/* 生き物の分類たんけん — tree.js（🌳 樹形図ビュー）
 * SVG + 素のJS。外部ライブラリ・通信なし。app.js より先に読み込み、window.createTreeView(api) を公開する。
 * 横向きツリー（根→界→門→綱→目→科→属→種）。ノードは展開中のものだけをレイアウトし、
 * DOMは id をキーにして再利用（差分更新）。展開／折りたたみは自前の rAF アニメーション。
 */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var ROW = 32;          // 葉1つぶんの縦ピッチ
  var GAP = 56;          // 列と列のすき間（枝を曲げる幅）
  var HEADH = 34;        // 上部の階級ヘッダの高さ（画面座標）
  var MINK = 0.04, MAXK = 3;
  var MS = 380;          // 展開／折りたたみアニメの長さ

  function sv(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    for (var i = 2; i < arguments.length; i++) if (arguments[i]) e.appendChild(arguments[i]);
    return e;
  }
  function textW(str, fs) {
    var w = 0;
    for (var ch of String(str)) w += ch.codePointAt(0) > 0x2000 ? fs * 1.05 : fs * 0.58;
    return w;
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function ease(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
  function f1(v) { return Math.round(v * 10) / 10; }

  window.createTreeView = function (api) {
    var T = api.T, RANKS = api.RANKS, h = api.h;
    var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    function dur(ms) { return reduce && reduce.matches ? 0 : ms; }

    /* ---------- 根（仮想ノード）と系統の道具 ---------- */
    var root = {
      id: 'root', rank: 'root', depth: -1, ja: '生き物', sci: '', emoji: '🌏', parent: null,
      children: T.kingdoms, species: api.allSpecies,
      blurb: '地球上のすべての生き物。ここから「界」「門」「綱」…と、枝分かれしていきます。'
    };
    function parentOf(n) { return n === root ? null : (n.parent || root); }
    function pathTo(n) { var p = []; for (; n; n = parentOf(n)) p.unshift(n); return p; }

    /* ---------- 状態 ---------- */
    var expanded = new Set(['root']);   // 初期：界まで展開
    var recs = new Map();               // id -> 描画レコード（DOM再利用）
    var list = [];                      // 表示中ノード（深さ優先順）
    var colX = [], nCols = 0;
    var cam = { k: 1, x: 24, y: HEADH + 20 };
    var vw = 800, vh = 500;
    var sel = null, hover = null, cursor = null;
    var pins = [], fork = null;         // くらべる用：2種と分かれ目
    var hlSet = new Set();
    var inited = false, suppress = false;
    var lay = null, camA = null, raf = 0;

    /* ---------- DOM ---------- */
    var edgesG = sv('g', { class: 'edges' });
    var nodesG = sv('g', { class: 'nodes' });
    var vp = sv('g', { class: 'vp' }, edgesG, nodesG);
    var guideG = sv('g', { class: 'guides' });
    var headBg = sv('rect', { class: 'head-bg', x: 0, y: 0, width: '100%', height: HEADH - 4 });
    var headG = sv('g', { class: 'heads' }, headBg);
    var heads = [], guides = [];
    RANKS.forEach(function (r, i) {
      var t = sv('text', { class: 'hd-t', x: 0, y: 21 });
      t.textContent = r.ja;
      var sub = sv('tspan', { class: 'hd-en', dx: 5 });
      sub.textContent = r.en;
      t.appendChild(sub);
      t.hdEn = sub;
      var g = sv('g', { class: 'hd r' + (i + 1), visibility: 'hidden' }, t);
      g.hdText = t;
      headG.appendChild(g);
      heads.push(g);
      var ln = sv('line', { class: 'guide r' + (i + 1), y1: HEADH - 4, y2: 600, visibility: 'hidden' });
      guideG.appendChild(ln);
      guides.push(ln);
    });
    var svg = sv('svg', {
      class: 'tree-svg', role: 'tree', tabindex: '0', 'data-lod': '0',
      'aria-label': '分類の樹形図。矢印キーで移動、Enterで展開・折りたたみ'
    }, guideG, vp, headG);

    var panel = h('aside', { class: 'tree-panel', role: 'region', 'aria-label': '選んだ分類群の説明', hidden: true });
    var zoomIn = h('button', { type: 'button', class: 'zbtn', 'aria-label': '拡大', onclick: function () { zoomBy(1.4); } }, '＋');
    var zoomOut = h('button', { type: 'button', class: 'zbtn', 'aria-label': '縮小', onclick: function () { zoomBy(1 / 1.4); } }, '−');
    var fitBtn = h('button', { type: 'button', class: 'zbtn wide', onclick: function () { fit(); } }, '全体を表示');
    var box = h('div', { class: 'tree-box' }, svg, panel, h('div', { class: 'tree-zoom' }, zoomIn, zoomOut, fitBtn));

    /* ---------- ツールバー（ツリー内検索・すべて展開・界までたたむ） ---------- */
    var sInput = h('input', {
      type: 'search', placeholder: 'ツリー内検索', 'aria-label': '樹形図の中をさがす',
      autocomplete: 'off', role: 'combobox', 'aria-expanded': 'false', 'aria-controls': 'tree-results', 'aria-autocomplete': 'list'
    });
    var sList = h('ul', { class: 'tree-results', id: 'tree-results', role: 'listbox', 'aria-label': '樹形図のけんさく結果', hidden: true });
    var sShown = [], sActive = -1;
    var bar = h('div', { class: 'tree-bar' },
      h('div', { class: 'tree-search', role: 'search' }, sInput, sList),
      h('button', { type: 'button', class: 'btn ghost', onclick: expandAll }, 'すべて展開'),
      h('button', { type: 'button', class: 'btn ghost', onclick: collapseToKingdoms }, '界までたたむ'));

    var el = h('div', { class: 'tree-view' },
      h('section', { class: 'tree-head' },
        h('h2', { tabindex: '-1', 'data-focus': '' }, '🌳 樹形図'),
        h('p', { class: 'tree-hint' }, '丸をクリックで枝がのびたり、たたまれたりします。ドラッグで移動、ホイール（ピンチ）で拡大・縮小。マウスをのせると、根からの道すじが太くなります。')),
      bar, box);

    /* ---------- レコード（ノード1つぶんのDOM） ---------- */
    function rankName(n) { return n === root ? 'はじまり' : RANKS[n.depth].ja; }

    function makeRec(n) {
      var isSp = n.rank === 'species';
      var r = n === root ? 9 : isSp ? 5.5 : 7;
      var label = (isSp ? n.emoji + ' ' : '') + n.ja;
      var lw = textW(label, isSp ? 13 : 14.5);
      var rec = {
        n: n, id: n.id, pr: null, r: r, isSp: isSp, lw: lw, out: r + 6 + lw + 4,
        cx: 0, cy: 0, co: 1, tx: 0, ty: 0, sx: 0, sy: 0, so: 1, lo: -1,
        alive: true, exiting: false, open: false, hasKids: false, col: n.depth + 1, ext: 0, tag: null
      };
      var hit = sv('rect', { class: 'hit', y: -ROW / 2, height: ROW, x: -r - 6, width: 40 });
      var dot = sv('circle', { class: 'dot', r: r });
      var ring = sv('circle', { class: 'ring', r: r + 5 });
      var lbl = sv('text', { class: 'lbl', x: r + 6, y: 0 });
      lbl.textContent = label;
      var g = sv('g', { class: 'node', id: 'tn-' + n.id, 'data-id': n.id, role: 'treeitem', 'aria-level': String(n.depth + 2) }, hit, ring, dot, lbl);
      if (!isSp) {
        var txt = '+' + n.children.length;
        rec.bw = textW(txt, 11) + 12;
        var bt = sv('text', { x: rec.bw / 2, y: 0, 'text-anchor': 'middle' });
        bt.textContent = txt;
        rec.badge = sv('g', { class: 'badge', transform: 'translate(' + (rec.out + 6) + ',0)' },
          sv('rect', { x: 0, y: -9, width: rec.bw, height: 18, rx: 9 }), bt);
        g.appendChild(rec.badge);
      } else {
        var at = sv('text', { x: 12, y: 0, 'text-anchor': 'middle' });
        at.textContent = '→';
        var go = sv('g', { class: 'go', transform: 'translate(' + (rec.out + 4) + ',0)' },
          sv('title', null), sv('rect', { class: 'go-hit', x: -4, y: -ROW / 2, width: 40, height: ROW }),
          sv('rect', { class: 'go-bg', x: 0, y: -10, width: 24, height: 20, rx: 10 }), at);
        go.firstChild.textContent = n.ja + 'のページへ';
        g.appendChild(go);
      }
      rec.g = g; rec.hit = hit;
      if (n !== root) rec.edge = sv('path', { class: 'edge r' + (n.depth + 1) });
      return rec;
    }

    function styleRec(rec) {
      var n = rec.n;
      var cls = 'node r' + (n.depth + 1) + (rec.isSp ? ' sp' : '') + (rec.open ? ' open' : rec.hasKids ? ' closed' : ' leaf') +
        (hlSet.has(rec.id) ? ' hl' : '') + (sel === n ? ' sel' : '') + (fork === n ? ' fork' : '') + (cursor === n ? ' cursor' : '');
      if (rec.cls !== cls) {
        rec.cls = cls;
        rec.g.setAttribute('class', cls);
        if (rec.edge) rec.edge.setAttribute('class', 'edge r' + (n.depth + 1) + (hlSet.has(rec.id) ? ' hl' : ''));
      }
      if (rec.badge) rec.badge.style.display = !rec.open && rec.hasKids ? '' : 'none';
      rec.hit.setAttribute('width', f1(rec.ext + rec.r + 12));
      if (rec.hasKids) rec.g.setAttribute('aria-expanded', String(rec.open));
      else rec.g.removeAttribute('aria-expanded');
      rec.g.setAttribute('aria-label', n.ja + '（' + rankName(n) + '）' + (rec.hasKids ? (rec.open ? '　ひらいています' : '　とじています。' + n.children.length + 'つの' + RANKS[n.depth + 1].ja) : ''));
      if (fork === n && !rec.tag) {
        var tt = sv('text', { x: 0, y: 0, 'text-anchor': 'middle' });
        tt.textContent = '分かれ目';
        rec.tag = sv('g', { class: 'forktag', transform: 'translate(0,-24)' }, sv('rect', { x: -28, y: -10, width: 56, height: 19, rx: 4 }), tt);
        rec.g.appendChild(rec.tag);
      } else if (fork !== n && rec.tag) {
        rec.tag.remove(); rec.tag = null;
      }
    }
    function restyleAll() { list.forEach(styleRec); }

    /* ---------- レイアウト（表示中ノードだけ計算） ---------- */
    function computeLayout(snap) {
      recs.forEach(function (r) { r.alive = false; });
      list = [];
      var row = 0, wmax = [];
      function place(n, pr) {
        var rec = recs.get(n.id);
        if (!rec) {
          rec = makeRec(n);
          recs.set(n.id, rec);
          rec.cx = pr ? pr.cx : 0; rec.cy = pr ? pr.cy : 0;   // 親の位置から生える
          rec.co = snap ? 1 : 0;
          nodesG.appendChild(rec.g);
          if (rec.edge) edgesG.appendChild(rec.edge);
        }
        rec.pr = pr; rec.alive = true; rec.exiting = false;
        list.push(rec);
        var kids = n.children && expanded.has(n.id) ? n.children : null;
        rec.open = !!kids;
        rec.hasKids = !!(n.children && n.children.length);
        rec.ext = rec.out + (rec.open ? 0 : rec.hasKids ? 8 + rec.bw : rec.isSp ? 32 : 0);
        if (kids) {
          var first, last;
          kids.forEach(function (c, i) { var cr = place(c, rec); if (!i) first = cr; last = cr; });
          rec.ty = (first.ty + last.ty) / 2;
        } else {
          rec.ty = row++ * ROW;
        }
        wmax[rec.col] = Math.max(wmax[rec.col] || 0, rec.ext + 10);
        return rec;
      }
      place(root, null);
      colX = []; nCols = wmax.length;
      var x = 22;
      for (var c = 0; c < nCols; c++) { colX[c] = x; x += wmax[c] + GAP; }
      list.forEach(function (r) { r.tx = colX[r.col] + 10; });
      // 消えるノードは、いちばん近い生きている祖先の位置へ縮む
      recs.forEach(function (r) {
        if (r.alive) return;
        r.exiting = true;
        for (var a = parentOf(r.n); a; a = parentOf(a)) {
          var ar = recs.get(a.id);
          if (ar && ar.alive) { r.tx = ar.tx; r.ty = ar.ty; break; }
        }
      });
    }

    /* ---------- 描画（位置・枝・不透明度） ---------- */
    function pathD(x0, y0, x1, y1) {
      var mx = (x0 + x1) / 2;
      return 'M' + f1(x0) + ',' + f1(y0) + 'C' + f1(mx) + ',' + f1(y0) + ' ' + f1(mx) + ',' + f1(y1) + ' ' + f1(x1) + ',' + f1(y1);
    }
    function applyRec(rec) {
      rec.g.setAttribute('transform', 'translate(' + f1(rec.cx) + ',' + f1(rec.cy) + ')');
      var op = Math.round(rec.co * 100) / 100;
      if (op !== rec.lo) {
        rec.lo = op;
        rec.g.setAttribute('opacity', op);
        if (rec.edge) rec.edge.setAttribute('opacity', op);
      }
      if (rec.edge && rec.pr) rec.edge.setAttribute('d', pathD(rec.pr.cx + rec.pr.out, rec.pr.cy, rec.cx - rec.r - 2, rec.cy));
    }
    function finishExit() {
      recs.forEach(function (r, id) {
        if (!r.exiting) return;
        r.g.remove(); if (r.edge) r.edge.remove();
        recs.delete(id);
      });
    }
    function startAnim(d) {
      if (d === 0) {
        recs.forEach(function (r) { r.cx = r.tx; r.cy = r.ty; r.co = r.exiting ? 0 : 1; });
        lay = null;
        finishExit();
        recs.forEach(applyRec);
        return;
      }
      recs.forEach(function (r) { r.sx = r.cx; r.sy = r.cy; r.so = r.co; });
      lay = { t0: performance.now(), d: d };
      kick();
    }
    function kick() { if (!raf) raf = requestAnimationFrame(tick); }
    function tick(now) {
      raf = 0;
      if (lay) {
        var p = clamp((now - lay.t0) / lay.d, 0, 1), e = ease(p);
        recs.forEach(function (r) {
          r.cx = r.sx + (r.tx - r.sx) * e;
          r.cy = r.sy + (r.ty - r.sy) * e;
          r.co = r.so + ((r.exiting ? 0 : 1) - r.so) * e;
        });
        if (p >= 1) {
          lay = null;
          recs.forEach(function (r) { r.cx = r.tx; r.cy = r.ty; r.co = r.exiting ? 0 : 1; });
          finishExit();
        }
        recs.forEach(applyRec);
      }
      if (camA) {
        var q = clamp((now - camA.t0) / camA.d, 0, 1), ee = ease(q);
        cam.k = camA.from.k + (camA.to.k - camA.from.k) * ee;
        cam.x = camA.from.x + (camA.to.x - camA.from.x) * ee;
        cam.y = camA.from.y + (camA.to.y - camA.from.y) * ee;
        if (q >= 1) camA = null;
        domCam();
      }
      if (lay || camA) kick();
    }

    /* ---------- カメラ（パン＆ズーム） ---------- */
    function domCam() {
      vp.setAttribute('transform', 'translate(' + f1(cam.x) + ',' + f1(cam.y) + ') scale(' + cam.k.toFixed(4) + ')');
      for (var i = 0; i < 7; i++) {
        var c = i + 1, show = c < nCols;
        var hx = f1(cam.x + (colX[c] + 2) * cam.k), gx = f1(cam.x + (colX[c] + 10) * cam.k);
        heads[i].setAttribute('visibility', show ? 'visible' : 'hidden');
        guides[i].setAttribute('visibility', show ? 'visible' : 'hidden');
        if (show) {
          heads[i].setAttribute('transform', 'translate(' + hx + ',0)');
          // 引いて列が詰まったら、英語名 → 階級名の順に省く（重なり防止）
          var gap = ((c + 1 < nCols ? colX[c + 1] - colX[c] : colX[c] - colX[c - 1]) * cam.k);
          heads[i].hdText.hdEn.setAttribute('visibility', gap < 84 ? 'hidden' : 'visible');
          heads[i].hdText.setAttribute('visibility', gap < 20 ? 'hidden' : 'visible');
          guides[i].setAttribute('x1', gx); guides[i].setAttribute('x2', gx);
        }
      }
      svg.setAttribute('data-lod', cam.k < 0.12 ? '3' : cam.k < 0.3 ? '2' : cam.k < 0.55 ? '1' : '0');
    }
    function setCam(t, d) {
      if (!d) { camA = null; cam.k = t.k; cam.x = t.x; cam.y = t.y; domCam(); return; }
      camA = { from: { k: cam.k, x: cam.x, y: cam.y }, to: { k: t.k, x: t.x, y: t.y }, t0: performance.now(), d: d };
      kick();
    }
    function setSize() {
      vw = svg.clientWidth || 800; vh = svg.clientHeight || 500;
      guides.forEach(function (g) { g.setAttribute('y2', vh); });
    }
    function zoomAt(k2, px, py, d) {
      k2 = clamp(k2, MINK, MAXK);
      var wx = (px - cam.x) / cam.k, wy = (py - cam.y) / cam.k;
      setCam({ k: k2, x: px - wx * k2, y: py - wy * k2 }, d);
    }
    function zoomBy(f) {
      var base = camA ? camA.to : cam;
      var px = vw / 2, py = (vh + HEADH) / 2;
      var k2 = clamp(base.k * f, MINK, MAXK);
      var wx = (px - base.x) / base.k, wy = (py - base.y) / base.k;
      setCam({ k: k2, x: px - wx * k2, y: py - wy * k2 }, dur(220));
    }
    function boxOf(rs) {
      var b = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
      rs.forEach(function (r) {
        b.x0 = Math.min(b.x0, r.tx - 12); b.x1 = Math.max(b.x1, r.tx + r.ext);
        b.y0 = Math.min(b.y0, r.ty - ROW / 2); b.y1 = Math.max(b.y1, r.ty + ROW / 2);
      });
      return b;
    }
    function insets() {
      var narrow = vw < 640, shown = !panel.hidden;
      return { r: shown && !narrow ? 330 : 0, b: shown && narrow ? Math.min(panel.offsetHeight + 64, vh * 0.5) : 0 };
    }
    function fitCam(b, kmin, kmax) {
      var ins = insets();
      var aw = Math.max(80, vw - ins.r - 24), ah = Math.max(80, vh - HEADH - ins.b - 24);
      var k = clamp(Math.min(aw / (b.x1 - b.x0), ah / (b.y1 - b.y0)), kmin == null ? MINK : kmin, kmax || 1.1);
      return {
        k: k,
        x: 12 + (aw - (b.x1 - b.x0) * k) / 2 - b.x0 * k,
        y: HEADH + 12 + (ah - (b.y1 - b.y0) * k) / 2 - b.y0 * k
      };
    }
    function fit() {
      setCam(fitCam(boxOf(list)), dur(450));
    }
    // 目標カメラ t を動かして、ワールド座標の箱 b が見える位置にする
    function reveal(t, b, anchorY) {
      var m = 24, ins = insets();
      var x0 = b.x0 * t.k + t.x, x1 = b.x1 * t.k + t.x, y0 = b.y0 * t.k + t.y, y1 = b.y1 * t.k + t.y;
      var L = m, Rr = vw - m - ins.r, Tp = HEADH + m, Bt = vh - m - ins.b;
      if (x1 - x0 > Rr - L || x0 < L) t.x += L - x0;
      else if (x1 > Rr) t.x += Rr - x1;
      if (y1 - y0 > Bt - Tp) t.y += (Tp + Bt) / 2 - (anchorY * t.k + t.y);
      else if (y0 < Tp) t.y += Tp - y0;
      else if (y1 > Bt) t.y += Bt - y1;
      return t;
    }

    /* ---------- 変更の適用（レイアウト＋アニメ＋カメラ） ---------- */
    function commit(o) {
      o = o || {};
      var anchor = o.anchor && recs.get(o.anchor.id);
      var screen = anchor && { x: anchor.cx * cam.k + cam.x, y: anchor.cy * cam.k + cam.y };
      var baseK = camA ? camA.to.k : cam.k;
      computeLayout(!!o.snap);
      applyHL(true);
      restyleAll();
      updatePanel();
      var t;
      if (o.fit) t = fitCam(boxOf(list));
      else if (o.fitIds) t = fitCam(boxOf(list.filter(function (r) { return o.fitIds.has(r.id); })), 0.3, 1.1);
      else if (o.center) {
        var cr = recs.get(o.center.id), k = Math.max(baseK, o.minK || 0), ins = insets();
        t = { k: k, x: (vw - ins.r) * 0.3 - cr.tx * k, y: (HEADH + vh - ins.b) / 2 - cr.ty * k };
      } else {
        t = { k: cam.k, x: cam.x, y: cam.y };
        if (anchor) {   // クリックしたノードは画面上の同じ場所に留める（周りが動く）
          t.x = screen.x - anchor.tx * t.k; t.y = screen.y - anchor.ty * t.k;
          var kidsRecs = list.filter(function (r) { return r.pr === anchor; }).concat(anchor);
          reveal(t, boxOf(kidsRecs), anchor.ty);
        }
      }
      var d = o.snap ? 0 : dur(MS);
      startAnim(d);
      setCam(t, d);
    }

    /* ---------- ハイライト ---------- */
    function applyHL(silent) {
      var nodes = hover ? [hover] : sel ? [sel] : pins;
      var ids = new Set();
      nodes.forEach(function (n) { pathTo(n).forEach(function (p) { ids.add(p.id); }); });
      var changed = [];
      hlSet.forEach(function (id) { if (!ids.has(id)) changed.push(id); });
      ids.forEach(function (id) { if (!hlSet.has(id)) changed.push(id); });
      hlSet = ids;
      svg.classList.toggle('has-hl', ids.size > 0);
      if (silent) return;
      changed.forEach(function (id) {
        var r = recs.get(id);
        if (!r) return;
        styleRec(r);
        if (ids.has(id) && r.edge) edgesG.appendChild(r.edge);   // 強調する枝を手前へ
      });
    }
    function setHover(n) {
      if (hover === n) return;
      hover = n;
      applyHL();
      updatePanel();
    }
    function setSel(n) {
      var old = [sel, cursor, fork];
      sel = n; if (n) cursor = n;
      applyHL();
      old.concat([sel, cursor, fork]).forEach(function (x) { var r = x && recs.get(x.id); if (r) styleRec(r); });
      updatePanel();
    }

    /* ---------- 説明パネル ---------- */
    var panelKey = '';
    function updatePanel() {
      var n = hover || sel;
      var hovering = !!(hover && hover !== sel);
      var key;
      if (n) key = n.id + (hovering ? '|h' : '|s') + (n.children ? '|' + expanded.has(n.id) : '');
      else if (pins.length === 2) key = 'cmp|' + pins[0].id + pins[1].id;
      else key = '';
      if (key === panelKey) return;
      panelKey = key;
      panel.classList.toggle('hovering', hovering);
      if (!key) { panel.hidden = true; panel.replaceChildren(); return; }
      panel.hidden = false;
      panel.replaceChildren(n ? nodeCard(n, hovering) : compareCard());
    }
    function pathLine(p) {
      return h('p', { class: 'tp-path', 'aria-label': '分類の系統' }, p.map(function (x, i) {
        return [i ? h('span', { class: 'tp-sep', 'aria-hidden': 'true' }, ' › ') : null, h('span', { class: 'pp r' + (x.depth + 1) }, x.ja)];
      }));
    }
    function nodeCard(n, hovering) {
      var p = pathTo(n);
      var blurb = n.blurb || (n.rank === 'genus' ? 'この属の仲間：' + n.species.map(function (s) { return s.ja; }).join('、') : '');
      var isSp = n.rank === 'species';
      var open = expanded.has(n.id);
      var ph = isSp || n.rank === 'genus' ? api.photoOf(n) : null;
      return h('div', null,
        hovering ? null : h('button', { type: 'button', class: 'tp-close', 'aria-label': '説明をとじる', onclick: function () { pins = []; fork = null; setSel(null); updatePanel(); } }, '×'),
        ph ? api.thumb(n, 'tp-photo') : null,
        h('div', { class: 'tp-top' },
          n === root ? h('span', { class: 'chip r0' }, 'はじまり') : api.chip(n.depth),
          isSp ? null : h('span', { class: 'tp-count' }, n.species.length + '種')),
        h('h3', { class: 'tp-name' }, isSp ? n.emoji + ' ' : '', n.ja, api.yomiEl(n)),
        n.sci ? h('p', { class: 'tp-sci' }, api.sciEl(n)) : null,
        pathLine(p),
        blurb ? h('p', { class: 'tp-blurb' }, blurb) : null,
        ph ? h('div', { class: 'tp-credit' }, ph.sp === n ? null : '例：' + ph.sp.ja + '　', api.creditEl(ph.p, true)) : null,
        hovering ? null : h('div', { class: 'tp-actions' },
          isSp ? h('a', { class: 'btn', href: '#/' + n.id }, 'この種のページへ ›') : [
            h('button', { type: 'button', class: 'btn', onclick: function () { activate(n); } }, open ? 'たたむ' : 'ひらく（' + n.children.length + 'つの' + RANKS[n.depth + 1].ja + '）'),
            h('a', { class: 'btn ghost', href: n === root ? '#/' : '#/' + n.id }, '図鑑で開く ›')]));
    }
    function compareCard() {
      var a = pins[0], b = pins[1];
      var pa = api.pathOf(a), pb = api.pathOf(b), shared = -1;
      for (var i = 0; i < pa.length && i < pb.length; i++) { if (pa[i] === pb[i]) shared = i; else break; }
      var head = shared < 0
        ? a.ja + 'と' + b.ja + 'は、「界」から別々のグループ。'
        : a.ja + 'と' + b.ja + 'は、「' + RANKS[shared].ja + '」まで同じ。';
      var where = shared < 0 ? '分かれ目は、いちばん根もと。' : '分かれ目：' + fork.ja + '（' + RANKS[shared].ja + '）から枝がわかれます。';
      return h('div', null,
        h('div', { class: 'tp-top' }, h('span', { class: 'chip r0' }, 'くらべる')),
        h('h3', { class: 'tp-name' }, (a.emoji || '') + ' ' + a.ja + ' × ' + (b.emoji || '') + ' ' + b.ja),
        h('p', { class: 'tp-blurb' }, head), h('p', { class: 'tp-blurb' }, where),
        h('div', { class: 'tp-actions' },
          h('a', { class: 'btn ghost', href: '#/compare/' + a.id + '/' + b.id }, '⚖️ くらべる表を見る ›')));
    }

    /* ---------- 操作：展開／折りたたみ・フォーカス ---------- */
    function activate(n) {
      pins = []; fork = null;
      sel = n; cursor = n;
      if (n.children && n.children.length) {
        if (expanded.has(n.id)) expanded.delete(n.id); else expanded.add(n.id);
      }
      commit({ anchor: n });
    }
    function expandTo(n) {
      pathTo(n).forEach(function (a) { if (a !== n) expanded.add(a.id); });
      if (n.children && n.children.length) expanded.add(n.id);
    }
    function focusNode(n, snap) {
      pins = []; fork = null;
      expandTo(n);
      sel = n; cursor = n;
      commit({ snap: snap, center: n, minK: 0.85 });
    }
    function compareNodes(a, b, snap) {
      pins = [a, b]; sel = null; cursor = a;
      expandTo(a); expandTo(b);
      var pa = pathTo(a), pb = pathTo(b), lca = root;
      for (var i = 0; i < pa.length && i < pb.length; i++) { if (pa[i] === pb[i]) lca = pa[i]; else break; }
      fork = lca;
      var ids = new Set();
      pa.concat(pb).forEach(function (x) { ids.add(x.id); });
      commit({ snap: snap, fitIds: ids });
    }
    function expandAll() {
      pins = []; fork = null;
      api.all.forEach(function (n) { if (n.children && n.children.length) expanded.add(n.id); });
      commit({ fit: true });
    }
    function collapseToKingdoms() {
      pins = []; fork = null; sel = null;
      expanded = new Set(['root']);
      commit({ fit: true });
    }

    /* ---------- ポインタ操作（ドラッグ・ピンチ・ホイール・クリック） ---------- */
    var ptrs = new Map(), g0 = null, pinch = null, moved = false;
    function local(e) { var r = svg.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
    svg.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      camA = null;
      var p = local(e);
      ptrs.set(e.pointerId, p);
      if (ptrs.size === 1) { moved = false; g0 = { x: p.x, y: p.y, cx: cam.x, cy: cam.y }; }
      else if (ptrs.size === 2) {
        var ps = Array.from(ptrs.values());
        pinch = { d: Math.hypot(ps[0].x - ps[1].x, ps[0].y - ps[1].y) || 1, mx: (ps[0].x + ps[1].x) / 2, my: (ps[0].y + ps[1].y) / 2, cam: { k: cam.k, x: cam.x, y: cam.y } };
        moved = true;
      }
    });
    svg.addEventListener('pointermove', function (e) {
      var p = ptrs.get(e.pointerId);
      if (!p) return;
      var q = local(e);
      p.x = q.x; p.y = q.y;
      if (ptrs.size === 1 && g0) {
        var dx = q.x - g0.x, dy = q.y - g0.y;
        if (!moved && Math.hypot(dx, dy) > (e.pointerType === 'touch' ? 8 : 5)) {
          moved = true;
          svg.classList.add('dragging');
          try { svg.setPointerCapture(e.pointerId); } catch (err) { /* 無視 */ }
        }
        if (moved) { cam.x = g0.cx + dx; cam.y = g0.cy + dy; domCam(); }
      } else if (ptrs.size >= 2 && pinch) {
        var ps = Array.from(ptrs.values());
        var d = Math.hypot(ps[0].x - ps[1].x, ps[0].y - ps[1].y) || 1;
        var mx = (ps[0].x + ps[1].x) / 2, my = (ps[0].y + ps[1].y) / 2;
        var k2 = clamp(pinch.cam.k * d / pinch.d, MINK, MAXK);
        var wx = (pinch.mx - pinch.cam.x) / pinch.cam.k, wy = (pinch.my - pinch.cam.y) / pinch.cam.k;
        cam.k = k2; cam.x = mx - wx * k2; cam.y = my - wy * k2;
        domCam();
      }
    });
    function endPtr(e) {
      if (!ptrs.has(e.pointerId)) return;
      ptrs.delete(e.pointerId);
      pinch = null;
      if (ptrs.size === 1) {   // ピンチのあと残った指でそのままパン
        var p = Array.from(ptrs.values())[0];
        g0 = { x: p.x, y: p.y, cx: cam.x, cy: cam.y };
      } else if (ptrs.size === 0) {
        svg.classList.remove('dragging');
        suppress = moved;
        g0 = null;
        if (moved) setTimeout(function () { suppress = false; }, 0);
      }
    }
    svg.addEventListener('pointerup', endPtr);
    svg.addEventListener('pointercancel', endPtr);
    svg.addEventListener('wheel', function (e) {
      e.preventDefault();
      var dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      var p = local(e);
      var f = Math.exp(-dy * (e.ctrlKey ? 0.012 : 0.0016));
      var base = camA ? camA.to : cam;
      camA = null;
      zoomAt(base.k * f, p.x, p.y, 0);
    }, { passive: false });
    svg.addEventListener('click', function (e) {
      if (suppress) { suppress = false; return; }
      var nd = e.target.closest ? e.target.closest('.node') : null;
      if (!nd) { pins = []; fork = null; setSel(null); return; }
      var rec = recs.get(nd.getAttribute('data-id'));
      if (!rec) return;
      if (e.target.closest('.go')) { location.hash = '#/' + rec.id; return; }
      svg.focus({ preventScroll: true });
      activate(rec.n);
    });
    svg.addEventListener('pointerover', function (e) {
      if (e.pointerType !== 'mouse' || ptrs.size) return;
      var nd = e.target.closest ? e.target.closest('.node') : null;
      var rec = nd && recs.get(nd.getAttribute('data-id'));
      setHover(rec && !rec.exiting ? rec.n : null);
    });
    svg.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') setHover(null); });

    /* ---------- キーボード ---------- */
    function moveCursor(rec) {
      if (!rec) return;
      cursor = rec.n; sel = rec.n; pins = []; fork = null;
      svg.setAttribute('aria-activedescendant', 'tn-' + rec.id);
      applyHL(); restyleAll(); updatePanel();
      var t = { k: cam.k, x: camA ? camA.to.x : cam.x, y: camA ? camA.to.y : cam.y };
      reveal(t, boxOf([rec]), rec.ty);
      setCam(t, dur(200));
    }
    svg.addEventListener('keydown', function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      var rec = (cursor && recs.get(cursor.id)) || list[0];
      var i = list.indexOf(rec), handled = true;
      switch (e.key) {
        case 'ArrowDown': moveCursor(list[Math.min(list.length - 1, i + 1)]); break;
        case 'ArrowUp': moveCursor(list[Math.max(0, i - 1)]); break;
        case 'Home': moveCursor(list[0]); break;
        case 'End': moveCursor(list[list.length - 1]); break;
        case 'ArrowLeft':
          if (rec.open) activate(rec.n);
          else if (rec.pr) moveCursor(rec.pr);
          break;
        case 'ArrowRight':
          if (rec.hasKids && !rec.open) activate(rec.n);
          else if (rec.open) moveCursor(list[i + 1]);
          break;
        case 'Enter': case ' ':
          if (rec.isSp && e.key === 'Enter') location.hash = '#/' + rec.id; else activate(rec.n);
          break;
        case '+': case '=': zoomBy(1.4); break;
        case '-': zoomBy(1 / 1.4); break;
        case '0': fit(); break;
        default: handled = false;
      }
      if (handled) e.preventDefault();
    });

    /* ---------- ツリー内検索（app.js の検索ロジックを再利用） ---------- */
    function closeSearch() {
      sList.hidden = true; sActive = -1;
      sInput.setAttribute('aria-expanded', 'false');
      sInput.removeAttribute('aria-activedescendant');
    }
    function setSActive(i) {
      sActive = i;
      Array.prototype.forEach.call(sList.children, function (li, k) {
        li.classList.toggle('active', k === i); li.setAttribute('aria-selected', String(k === i));
        if (k === i) { sInput.setAttribute('aria-activedescendant', li.id); li.scrollIntoView({ block: 'nearest' }); }
      });
    }
    function chooseHit(n) {
      sInput.value = '';
      closeSearch();
      try { history.replaceState(null, '', '#/tree/' + n.id); } catch (err) { /* file:// など */ }
      focusNode(n, false);
    }
    function showHits() {
      var q = sInput.value;
      sList.replaceChildren();
      if (!q.trim()) { closeSearch(); return; }
      sShown = api.search(q).slice(0, 8).map(function (x) { return x.node; });
      if (!sShown.length) sList.append(h('li', { class: 'no-hit', role: 'presentation' }, '見つかりませんでした。'));
      sShown.forEach(function (n, i) {
        var p = pathTo(n).slice(1, -1);
        sList.append(h('li', { role: 'option', id: 'tr-opt-' + i, 'aria-selected': 'false', onclick: function () { chooseHit(n); } },
          n.rank === 'species' ? h('span', { class: 'r-emoji', 'aria-hidden': 'true' }, n.emoji) : api.chip(n.depth),
          h('span', { class: 'r-main' }, h('span', { class: 'r-name' }, n.ja, ' ', api.sciEl(n, 'small')),
            h('span', { class: 'r-path' }, p.map(function (x) { return x.ja; }).join(' › ')))));
      });
      sList.hidden = false;
      sInput.setAttribute('aria-expanded', 'true');
      sActive = -1;
    }
    sInput.addEventListener('input', showHits);
    sInput.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); if (sList.hidden) showHits(); setSActive(Math.min(sShown.length - 1, sActive + 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setSActive(Math.max(0, sActive - 1)); }
      else if (e.key === 'Enter') {
        var pick = sActive >= 0 ? sShown[sActive] : sShown[0];
        if (!pick && sInput.value.trim()) { var hs = api.search(sInput.value); pick = hs[0] && hs[0].node; }
        if (pick) { e.preventDefault(); chooseHit(pick); }
      } else if (e.key === 'Escape') closeSearch();
    });
    sList.addEventListener('mousedown', function (e) { e.preventDefault(); });
    document.addEventListener('click', function (e) { if (!e.target.closest('.tree-search')) closeSearch(); });

    /* ---------- サイズ変化 ---------- */
    if (window.ResizeObserver) new ResizeObserver(function () { if (inited && svg.clientWidth) { setSize(); domCam(); } }).observe(svg);

    /* ---------- 公開 ---------- */
    return {
      el: el,
      // ルート表示のあとに呼ぶ。route = { node, node2 }
      enter: function (route) {
        setSize();
        var a = route.node, b = route.node2;
        var first = !inited;
        if (first) {
          inited = true;
          if (!a) { commit({ snap: true, fit: true }); return; }
        }
        if (!a) return;
        if (b && b !== a) compareNodes(a, b, first); else focusNode(a, first);
      },
      leave: function () { hover = null; applyHL(); }
    };
  };
})();
