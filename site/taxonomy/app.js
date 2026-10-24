/* 生き物の分類たんけん — app.js
 * ビルド不要。データは window.TAXONOMY（data/taxonomy*.js）と window.PHOTOS（data/photos.js）。
 * 外部通信は写真の読み込み（Wikimedia）だけで、読めなければ絵文字のまま使える。
 * URLハッシュ：  #/  ホーム   #/<id>  分類群・種   #/compare[/<idA>/<idB>]  くらべる   #/quiz  クイズ
 *                #/tree[/<id>[/<id2>]]  樹形図（tree.js。2つ指定すると分かれ目を強調）
 */
(function () {
  'use strict';

  var T = window.TAXONOMY;
  var main = document.getElementById('main');
  if (!T) {
    main.textContent = 'データ（data/taxonomy.js）を読み込めませんでした。';
    return;
  }
  var RANKS = T.ranks;

  /* ---------- 小さな道具 ---------- */
  function h(tag, props) {
    var e = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v == null || v === false) return;
        if (k === 'class') e.className = v;
        else if (k === 'text') e.textContent = v;
        else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
        else e.setAttribute(k, v === true ? '' : v);
      });
    }
    for (var i = 2; i < arguments.length; i++) append(e, arguments[i]);
    return e;
  }
  function append(parent, kid) {
    if (kid == null || kid === false) return;
    if (Array.isArray(kid)) { kid.forEach(function (k) { append(parent, k); }); return; }
    parent.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function kataToHira(s) {
    return s.replace(/[ァ-ヶ]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0x60); });
  }
  function norm(s) {
    return kataToHira(String(s).normalize('NFKC').toLowerCase()).replace(/[\s・･·]/g, '');
  }

  /* ---------- データの索引 ---------- */
  var byId = new Map();
  var all = [];
  var allSpecies = [];
  function indexNode(node, parent) {
    node.parent = parent;
    byId.set(node.id, node);
    all.push(node);
    if (node.rank === 'species') {
      node.species = [node];
      allSpecies.push(node);
      return;
    }
    node.species = [];
    node.children.forEach(function (c) {
      indexNode(c, node);
      node.species = node.species.concat(c.species);
    });
  }
  T.kingdoms.forEach(function (k) { indexNode(k, null); });

  function pathOf(node) {
    var p = [];
    for (var n = node; n; n = n.parent) p.unshift(n);
    return p;
  }
  // 子ごとに1種ずつ順番に拾って、いろいろな仲間の例を作る
  function examples(node, n) {
    var lists = node.children.map(function (c) { return c.species; });
    var out = [];
    for (var round = 0; out.length < n; round++) {
      var added = false;
      for (var i = 0; i < lists.length && out.length < n; i++) {
        if (lists[i][round]) { out.push(lists[i][round]); added = true; }
      }
      if (!added) break;
    }
    return out;
  }
  var tiger = byId.get(T.meta.addressExampleId) || allSpecies[0];

  /* ---------- 写真（data/photos.js：Wikimedia Commons の画像をホットリンク） ---------- */
  var PHOTOS = window.PHOTOS || {};
  function safeUrl(u) { return /^https:\/\//.test(u || '') ? u : null; }
  // 種ならその種の写真、属ならその属で写真のある最初の種の写真（例として）を返す
  function photoOf(node) {
    if (node.rank === 'species') return PHOTOS[node.id] ? { p: PHOTOS[node.id], sp: node } : null;
    if (node.rank === 'genus') {
      for (var i = 0; i < node.species.length; i++) {
        if (PHOTOS[node.species[i].id]) return { p: PHOTOS[node.species[i].id], sp: node.species[i] };
      }
    }
    return null;
  }
  // 小さなサムネイル。読み込みに失敗したら（オフライン等）静かに取り除いて絵文字表示のままにする
  function thumbImg(node, cls) {
    var ph = photoOf(node);
    if (!ph) return null;
    var img = h('img', {
      class: cls, src: safeUrl(ph.p.thumb), alt: '', width: ph.p.width, height: ph.p.height,
      loading: 'lazy', decoding: 'async', 'data-photo-of': ph.sp.id
    });
    img.addEventListener('error', function () { img.remove(); });
    return img;
  }
  function ext(href, text) {
    return h('a', { href: safeUrl(href), target: '_blank', rel: 'noopener' }, text);
  }
  // クレジット：写真：作者 / ライセンス（リンク）／出典：Wikimedia Commons（ファイルページ）＋ Wikipediaで読む
  function creditEl(p, short) {
    var licenseLink = ext(p.licenseUrl || p.filePage, p.license);
    if (short) return h('p', { class: 'credit short' }, '写真：' + p.artist + ' / ', licenseLink);
    return h('div', { class: 'credit' },
      h('p', null, '写真：' + p.artist + ' / ', licenseLink, '／出典：', ext(p.filePage, 'Wikimedia Commons')),
      h('p', null, ext(p.article, p.lang === 'ja' ? 'Wikipediaで読む' : 'Wikipedia（英語版）で読む'), h('span', { class: 'credit-note' }, '（記事：' + p.articleTitle + '）')));
  }
  // 種ページ・クイズ用の大きめの写真＋クレジット。読み込み失敗時は丸ごと取り除く
  function photoFigure(sp, cls, short) {
    var p = PHOTOS[sp.id];
    if (!p || !safeUrl(p.thumb)) return null;
    var img = h('img', {
      src: p.thumb, alt: sp.ja + 'の写真', width: p.width, height: p.height, loading: 'lazy', decoding: 'async'
    });
    var fig = h('figure', { class: 'photo ' + cls }, h('div', { class: 'photo-frame' }, img), h('figcaption', null, creditEl(p, short)));
    img.addEventListener('error', function () { fig.remove(); });
    return fig;
  }

  /* ---------- 共通パーツ ---------- */
  function chip(depth, label) {
    return h('span', { class: 'chip r' + (depth + 1) }, label || RANKS[depth].ja);
  }
  function sciEl(node, cls) {
    var italic = node.rank === 'genus' || node.rank === 'species';
    return h(italic ? 'i' : 'span', { class: 'sci' + (italic ? '' : ' plain') + (cls ? ' ' + cls : ''), lang: 'la' }, node.sci);
  }
  function yomiEl(node) {
    return node.yomi ? h('span', { class: 'yomi' }, '（' + node.yomi + '）') : null;
  }
  function link(node, cls) {
    return h('a', { href: '#/' + node.id, class: cls }, node.ja);
  }
  function rankLine(path) {
    return path.map(function (n) { return n.ja; }).join(' › ');
  }

  /* ---------- ルーティング ---------- */
  var state = { explore: null, first: true, lastDepth: -1 };

  function parseHash() {
    var raw = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    var parts = raw.split('/').filter(Boolean);
    if (!parts.length) return { mode: 'explore', node: null };
    if (parts[0] === 'compare') return { mode: 'compare', a: parts[1], b: parts[2] };
    if (parts[0] === 'quiz') return { mode: 'quiz' };
    if (parts[0] === 'tree') return { mode: 'tree', node: byId.get(parts[1]) || null, node2: byId.get(parts[2]) || null };
    var n = byId.get(parts[0]);
    return n ? { mode: 'explore', node: n } : { mode: 'explore', node: null, invalid: true };
  }

  function render() {
    var route = parseHash();
    var view;
    var title = T.meta.title;
    if (route.mode === 'explore') {
      state.explore = route.node;
      view = route.node ? (route.node.rank === 'species' ? speciesView(route.node) : groupView(route.node)) : homeView(route.invalid);
      if (route.node) title = route.node.ja + '｜' + title;
    } else if (route.mode === 'compare') {
      view = compareView(route);
      title = 'くらべてみよう｜' + title;
    } else if (route.mode === 'tree') {
      view = treeView ? treeView.el : h('p', { class: 'notice' }, '樹形図（tree.js）を読み込めませんでした。');
      title = '樹形図｜' + title;
    } else {
      view = quizView();
      title = 'クイズ｜' + title;
    }
    document.title = title;

    var depth = route.mode === 'explore' ? (route.node ? route.node.depth : -1) : state.lastDepth;
    view.classList.add('view', depth >= state.lastDepth ? 'from-right' : 'from-left');
    state.lastDepth = depth;
    main.replaceChildren(view);
    document.body.classList.toggle('mode-tree', route.mode === 'tree');
    if (treeView) { if (route.mode === 'tree') treeView.enter(route); else treeView.leave(); }

    renderStairs();
    markModes(route.mode);
    if (!state.first) {
      window.scrollTo(0, 0);
      var head = main.querySelector('[data-focus]');
      if (head) head.focus({ preventScroll: true });
    }
    state.first = false;
  }
  window.addEventListener('hashchange', render);

  function markModes(mode) {
    document.querySelectorAll('.modes a').forEach(function (a) {
      if (a.dataset.mode === mode) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  /* ---------- 階段（パンくず） ---------- */
  var stairsOl = document.querySelector('#stairs ol');
  function renderStairs() {
    var path = state.explore ? pathOf(state.explore) : [];
    var last = path.length ? path[path.length - 1] : null;
    var canGoDeeper = !last || last.rank !== 'species';
    stairsOl.replaceChildren();
    var currentLi = null;
    RANKS.forEach(function (r, i) {
      var li = h('li', { class: 'step-li', style: '--i:' + i });
      var node = path[i];
      var inner;
      if (node) {
        var isCurrent = i === path.length - 1;
        inner = h('a', {
          class: 'step r' + (i + 1) + ' done' + (isCurrent ? ' current' : ''),
          href: '#/' + node.id,
          title: r.ja + '：' + r.tip,
          'aria-current': isCurrent ? 'location' : null
        }, h('span', { class: 'rk' }, r.ja), h('span', { class: 'nm' }, node.ja));
        if (isCurrent) currentLi = li;
      } else if (i === path.length && canGoDeeper) {
        inner = h('span', { class: 'step r' + (i + 1) + ' next', title: r.title }, h('span', { class: 'rk' }, r.ja), h('span', { class: 'nm' }, 'えらぶ…'));
      } else {
        inner = h('span', { class: 'step future', 'aria-hidden': 'true' }, h('span', { class: 'rk' }, r.ja), h('span', { class: 'nm' }, '―'));
      }
      li.append(inner);
      stairsOl.append(li);
    });
    // スマホで横スクロールのとき、いまの段が見えるようにする
    var scroller = stairsOl;
    var target = currentLi || stairsOl.children[path.length] || stairsOl.children[0];
    if (target && scroller.scrollWidth > scroller.clientWidth) {
      scroller.scrollLeft = Math.max(0, target.offsetLeft - (scroller.clientWidth - target.offsetWidth) / 2);
    }
  }

  /* ---------- 階級の解説パネル ---------- */
  function rankPanel(activeIdx) {
    var active = activeIdx;
    var body = h('div', { class: 'rankpanel-body' });
    var tabs = h('div', { class: 'rank-tabs', role: 'group', 'aria-label': '階級をえらんで説明を読む' });
    var summary = h('summary', null);
    var details = h('details', { class: 'rankpanel', open: true }, summary, tabs, body);

    function fill() {
      var r = RANKS[active];
      summary.textContent = '階級のしくみ：' + r.title;
      tabs.replaceChildren();
      RANKS.forEach(function (rr, i) {
        tabs.append(h('button', {
          type: 'button', class: 'tab r' + (i + 1), 'aria-pressed': String(i === active),
          onclick: function () { active = i; fill(); }
        }, rr.ja));
      });
      var ladder = h('ol', { class: 'ladder', 'aria-label': '住所にたとえると' });
      RANKS.forEach(function (rr, i) {
        ladder.append(h('li', { class: i === active ? 'on r' + (i + 1) : '' }, h('span', { class: 'l-rank' }, rr.ja), h('span', { class: 'l-addr' }, rr.address)));
      });
      body.replaceChildren(
        h('h3', { class: 'rp-title' }, r.title, h('span', { class: 'rp-latin' }, r.latin + ' / ' + r.en)),
        h('p', null, r.text),
        h('p', { class: 'rp-tip' }, '🏠 ' + r.tip),
        h('p', { class: 'rp-ladder-label' }, '住所に例えると　国 → 都道府県 → 市 → 町 → 丁目 → 番地 → 名前'),
        ladder
      );
    }
    fill();
    return details;
  }

  /* ---------- カード ---------- */
  function card(node) {
    var d = node.depth;
    var isSp = node.rank === 'species';
    var thumb = thumbImg(node, 'card-photo');
    var a = h('a', { class: 'card' + (isSp ? ' card-sp' : '') + (thumb ? ' has-photo' : ''), href: '#/' + node.id });
    if (thumb) a.append(thumb);
    var top = h('div', { class: 'card-top' }, chip(d), isSp ? null : h('span', { class: 'count' }, node.species.length + '種'));
    var nameRow = h('h3', { class: 'card-name' }, isSp ? h('span', { class: 'emoji', 'aria-hidden': 'true' }, node.emoji) : null, node.ja, yomiEl(node));
    a.append(top, nameRow, h('div', { class: 'card-sci' }, sciEl(node)));
    var blurb = node.blurb || (node.rank === 'genus' ? 'この属の仲間：' + node.species.map(function (s) { return s.ja; }).join('、') : '');
    if (blurb) a.append(h('p', { class: 'card-blurb' }, blurb));
    if (!isSp) {
      var ex = examples(node, 4);
      a.append(h('p', { class: 'card-ex' }, h('span', { class: 'lbl' }, '例'), ex.map(function (s) { return h('span', { class: 'ex' }, s.emoji + s.ja); })));
      a.append(h('div', { class: 'card-foot' }, node.children.length + 'つの' + RANKS[d + 1].ja + 'をひらく ›'));
    } else {
      a.append(h('div', { class: 'card-foot' }, 'この種のページへ ›'));
    }
    return a;
  }

  /* ---------- ホーム ---------- */
  function homeView(invalid) {
    var path = pathOf(tiger);
    var table = h('table', { class: 'addr-table' },
      h('caption', null, '「' + tiger.ja + '」の分類の住所'),
      h('thead', null, h('tr', null, h('th', { scope: 'col' }, '階級'), h('th', { scope: 'col' }, '住所でいうと'), h('th', { scope: 'col' }, tiger.ja + 'の場合'))),
      h('tbody', null, RANKS.map(function (r, i) {
        return h('tr', null,
          h('th', { scope: 'row' }, chip(i)),
          h('td', null, r.address),
          h('td', null, h('a', { href: '#/' + path[i].id }, path[i].ja), ' ', sciEl(path[i], 'small')));
      })));

    var kingdomCards = h('div', { class: 'grid' }, T.kingdoms.map(card));
    return h('div', null,
      invalid ? h('p', { class: 'notice', role: 'status' }, '指定された場所が見つからなかったので、最初の画面に戻りました。') : null,
      h('section', { class: 'intro' },
        h('h2', { tabindex: '-1', 'data-focus': '' }, '生き物には「分類の住所」があります'),
        h('p', { class: 'lead' }, '地球にはものすごくたくさんの生き物がいます。そこで科学者は、似ている仲間どうしをグループに分けて、「界・門・綱・目・科・属・種」という7つの階級で整理しました。'),
        h('p', null, '住所が「国 → 都道府県 → 市 → 町 → 丁目 → 番地」と進むほど場所がしぼれるように、分類も「界」から「種」へ進むほど、仲間がしぼられていきます。いちばん下の「種」は、住んでいる人の名前のようなものです。'),
        h('div', { class: 'intro-grid' }, table, h('div', { class: 'intro-side' },
          h('p', { class: 'system-note' }, h('strong', null, 'この図鑑の分け方　'), T.meta.systemNote),
          h('div', { class: 'btn-row' },
            h('a', { class: 'btn', href: '#/' + tiger.id }, '🐅 ' + tiger.ja + 'の住所を見る'),
            h('button', { class: 'btn ghost', type: 'button', onclick: function () { location.hash = '#/' + shuffle(allSpecies)[0].id; } }, '🎲 ランダムな生き物'),
            h('a', { class: 'btn ghost', href: '#/compare' }, '⚖️ くらべてみよう'),
            h('a', { class: 'btn ghost', href: '#/tree' }, '🌳 樹形図'),
            h('a', { class: 'btn ghost', href: '#/quiz' }, '❓ クイズ'))))),
      rankPanel(0),
      h('section', { class: 'children' },
        h('h2', { class: 'section-title' }, 'どの界からたんけんする？', h('span', { class: 'sub' }, T.kingdoms.length + 'つの界・全' + allSpecies.length + '種')),
        kingdomCards));
  }

  /* ---------- 分類群（界〜属） ---------- */
  function groupView(node) {
    var d = node.depth;
    var next = RANKS[d + 1];
    var ex = examples(node, 6);
    var head = h('section', { class: 'node-head' },
      h('div', { class: 'node-rank' }, chip(d), h('span', { class: 'en' }, RANKS[d].en + '（' + RANKS[d].latin + '）')),
      h('h2', { tabindex: '-1', 'data-focus': '' }, node.ja, yomiEl(node)),
      h('p', { class: 'node-sci' }, '学名　', sciEl(node)),
      node.blurb ? h('p', { class: 'lead' }, node.blurb) : null,
      h('p', { class: 'node-meta' }, 'この' + RANKS[d].ja + 'には ' + node.children.length + 'つの' + next.ja + '、図鑑にのっている種は ' + node.species.length + '種 あります。',
        ex.length ? '（例：' + ex.map(function (s) { return s.emoji + s.ja; }).join('、') + '）' : ''),
      h('div', { class: 'btn-row' }, h('a', { class: 'btn ghost', href: '#/tree/' + node.id }, '🌳 樹形図で見る')));
    return h('div', null,
      head,
      h('section', { class: 'children' },
        h('h2', { class: 'section-title' }, next.ja + 'をえらぼう', h('span', { class: 'sub' }, node.children.length + 'つ')),
        h('div', { class: 'grid' }, node.children.map(card))),
      rankPanel(d + 1));
  }

  /* ---------- 種ページ ---------- */
  function speciesView(sp) {
    var path = pathOf(sp);
    var genus = sp.parent;
    var words = sp.sci.split(/\s+/);
    var hybrid = words[1] === '×';
    var epithet = hybrid ? words[2] : words[1];
    var sub = words.length > (hybrid ? 3 : 2) ? words[words.length - 1] : null;

    var binomial = h('section', { class: 'binomial' },
      h('h3', null, '学名のしくみ（二名法）'),
      h('p', { class: 'bn-line' },
        h('span', { class: 'bn-part genus-part' }, h('span', { class: 'bn-cap' }, '属名'), h('i', { lang: 'la' }, words[0])),
        h('span', { class: 'bn-op' }, '＋'),
        h('span', { class: 'bn-part epi-part' }, h('span', { class: 'bn-cap' }, '種小名'), h('i', { lang: 'la' }, (hybrid ? '× ' : '') + epithet)),
        sub ? h('span', { class: 'bn-op' }, '＋') : null,
        sub ? h('span', { class: 'bn-part sub-part' }, h('span', { class: 'bn-cap' }, '亜種名'), h('i', { lang: 'la' }, sub)) : null),
      h('p', null, '「' + words[0] + '」は ', link(genus), ' の属名、「' + epithet + '」が種小名です。この2つの単語を組み合わせたものが、世界共通の学名になります。ラテン語で書き、イタリック（斜体）にします。属名は大文字、種小名は小文字で始めます。',
        sub ? '3つめの単語は「亜種」を表します。' : '', hybrid ? '「×」は、2つの種のかけ合わせ（交雑）から生まれたことを表します。' : ''));

    var addr = h('section', { class: 'address' },
      h('h3', null, 'この種の住所'),
      h('p', { class: 'addr-lead' }, '界から種まで、7つの階級すべてをたどった「分類の住所」です。クリックするとそのグループに移動します。'),
      h('ol', { class: 'addr-list' }, path.map(function (n, i) {
        var self = i === 6;
        return h('li', { class: 'addr-item r' + (i + 1), style: '--i:' + i },
          chip(i),
          h('span', { class: 'addr-body' },
            self ? h('strong', { class: 'addr-name' }, n.ja) : h('a', { class: 'addr-name', href: '#/' + n.id }, n.ja),
            yomiEl(n), ' ', sciEl(n, 'small')),
          h('span', { class: 'addr-as' }, '住所でいうと「' + RANKS[i].address + '」'));
      })));

    var family = path[4];
    var kin = family.species.filter(function (s) { return s !== sp; }).slice(0, 12);

    return h('article', null,
      photoFigure(sp, 'sp-photo', false),
      h('section', { class: 'sp-hero' },
        h('div', { class: 'sp-emoji', 'aria-hidden': 'true' }, sp.emoji),
        h('div', { class: 'sp-title' },
          h('div', { class: 'node-rank' }, chip(6), h('span', { class: 'en' }, 'Species')),
          h('h2', { tabindex: '-1', 'data-focus': '' }, sp.ja, yomiEl(sp)),
          h('p', { class: 'sp-sci' }, sciEl(sp)),
          h('p', { class: 'lead' }, sp.blurb))),
      h('div', { class: 'sp-layout' },
        h('div', { class: 'sp-main' },
          h('section', { class: 'facts' },
            h('dl', null,
              h('dt', null, '🔎 とくちょう'), h('dd', null, sp.feat),
              h('dt', null, '🌍 すんでいる場所'), h('dd', null, sp.hab),
              h('dt', null, '💡 豆知識'), h('dd', null, sp.trivia))),
          binomial,
          h('div', { class: 'btn-row' },
            h('a', { class: 'btn', href: '#/compare/' + sp.id + '/' }, '⚖️ ほかの生き物とくらべる'),
            h('a', { class: 'btn ghost', href: '#/tree/' + sp.id }, '🌳 樹形図で見る'),
            h('a', { class: 'btn ghost', href: '#/quiz' }, '❓ クイズにちょうせん'),
            h('a', { class: 'btn ghost', href: '#/' + genus.id }, genus.ja + 'の仲間を見る'))),
        h('aside', { class: 'sp-side' }, addr)),
      kin.length ? h('section', { class: 'kin' },
        h('h3', null, '同じ' + family.ja + 'の仲間（図鑑にある種）'),
        h('ul', { class: 'kin-list' }, kin.map(function (s) {
          return h('li', null, h('a', { class: 'kin-link', href: '#/' + s.id }, s.emoji + ' ' + s.ja));
        }))) : h('p', { class: 'kin-none' }, '図鑑には、同じ' + family.ja + 'の種は他に載っていません。'));
  }

  /* ---------- 検索 ---------- */
  var input = document.getElementById('q');
  var list = document.getElementById('results');
  var searchIndex = all.map(function (n) {
    var keys = [norm(n.ja), norm(n.kana), norm(n.sci)];
    if (n.rank !== 'species') keys.push(norm(n.ja.slice(0, -1)));
    return { node: n, keys: keys };
  });
  var activeIdx = -1;
  var shown = [];

  function search(qRaw) {
    var q = norm(qRaw);
    if (!q) return [];
    var hits = [];
    searchIndex.forEach(function (e) {
      var best = Infinity;
      e.keys.forEach(function (k) {
        var s = k === q ? 0 : k.indexOf(q) === 0 ? 1 : k.indexOf(q) > 0 ? 2 : Infinity;
        if (s < best) best = s;
      });
      if (best < Infinity) hits.push({ node: e.node, score: best });
    });
    hits.sort(function (a, b) { return a.score - b.score || a.node.depth - b.node.depth; });
    return hits;
  }
  function closeResults() {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    activeIdx = -1;
  }
  function setActive(i) {
    activeIdx = i;
    Array.prototype.forEach.call(list.children, function (li, k) {
      var on = k === i;
      li.setAttribute('aria-selected', String(on));
      li.classList.toggle('active', on);
      if (on) { input.setAttribute('aria-activedescendant', li.id); li.scrollIntoView({ block: 'nearest' }); }
    });
  }
  function choose(node) {
    input.value = '';
    closeResults();
    location.hash = '#/' + node.id;
  }
  function showResults() {
    var hits = search(input.value);
    list.replaceChildren();
    shown = hits.slice(0, 12).map(function (x) { return x.node; });
    if (!input.value.trim()) { closeResults(); return; }
    if (!shown.length) {
      list.append(h('li', { class: 'no-hit', role: 'presentation' }, '見つかりませんでした。ひらがなやカタカナ、学名でも試してみてね。'));
    }
    shown.forEach(function (n, i) {
      var p = pathOf(n).slice(0, -1);
      var li = h('li', { role: 'option', id: 'opt-' + i, 'aria-selected': 'false', onclick: function () { choose(n); } },
        n.rank === 'species' ? h('span', { class: 'r-emoji', 'aria-hidden': 'true' }, n.emoji) : chip(n.depth),
        h('span', { class: 'r-main' },
          h('span', { class: 'r-name' }, n.ja, ' ', sciEl(n, 'small')),
          h('span', { class: 'r-path' }, n.rank === 'species' ? '種｜' + (p.length ? rankLine(p.slice(2)) : '') : RANKS[n.depth].ja + (p.length ? '｜' + rankLine(p) : ''))));
      list.append(li);
    });
    if (hits.length > shown.length) list.append(h('li', { class: 'no-hit', role: 'presentation' }, 'ほか ' + (hits.length - shown.length) + '件（もっとくわしく入力してしぼりこもう）'));
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    activeIdx = -1;
  }
  input.addEventListener('input', showResults);
  input.addEventListener('focus', function () { if (input.value.trim()) showResults(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (list.hidden) showResults(); setActive(Math.min(shown.length - 1, activeIdx + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(Math.max(0, activeIdx - 1)); }
    else if (e.key === 'Enter') {
      var pick = activeIdx >= 0 ? shown[activeIdx] : shown[0];
      if (!pick) { var hs = search(input.value); pick = hs[0] && hs[0].node; }
      if (pick) { e.preventDefault(); choose(pick); }
    } else if (e.key === 'Escape') { closeResults(); }
  });
  list.addEventListener('mousedown', function (e) { e.preventDefault(); });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.search')) closeResults();
  });

  /* ---------- くらべてみよう ---------- */
  function speciesSelect(label, selectedId, onchange) {
    var sel = h('select', { 'aria-label': label, onchange: onchange }, h('option', { value: '' }, '生き物をえらんでね'));
    var groups = new Map();
    allSpecies.forEach(function (s) {
      var p = pathOf(s);
      var key = p[0].ja + ' › ' + p[2].ja;
      if (!groups.has(key)) groups.set(key, h('optgroup', { label: key }));
      groups.get(key).append(h('option', { value: s.id }, s.emoji + ' ' + s.ja));
    });
    groups.forEach(function (g) { sel.append(g); });
    if (selectedId && byId.has(selectedId)) sel.value = selectedId;
    return sel;
  }

  var PRESETS = [
    ['s-homo-sapiens', 's-pan-troglodytes'], ['s-homo-sapiens', 's-thunnus-orientalis'], ['s-panthera-leo', 's-panthera-tigris'],
    ['s-panthera-leo', 's-canis-lupus-familiaris'], ['s-trypoxylus-dichotomus', 's-apis-mellifera'], ['s-homo-sapiens', 's-prunus-yedoensis'],
    ['s-orcinus-orca', 's-hippopotamus-amphibius'], ['s-oryza-sativa', 's-lentinula-edodes']
  ].filter(function (p) { return byId.has(p[0]) && byId.has(p[1]); });

  function compareView(route) {
    var a = route.a && byId.get(route.a), b = route.b && byId.get(route.b);
    if (a && a.rank !== 'species') a = null;
    if (b && b.rank !== 'species') b = null;
    var result = h('div', { class: 'cmp-result', 'aria-live': 'polite' });
    var selA, selB;

    function update() {
      var ia = selA.value, ib = selB.value;
      history.replaceState(null, '', '#/compare' + (ia || ib ? '/' + ia + '/' + ib : ''));
      result.replaceChildren(compareResult(byId.get(ia), byId.get(ib)));
    }
    function set(ia, ib) { selA.value = ia; selB.value = ib; update(); }
    selA = speciesSelect('1ぴきめ（1つめ）の生き物', a && a.id, update);
    selB = speciesSelect('2ひきめ（2つめ）の生き物', b && b.id, update);

    var presets = h('div', { class: 'presets' }, h('span', { class: 'lbl' }, 'れい：'),
      PRESETS.map(function (p) {
        var x = byId.get(p[0]), y = byId.get(p[1]);
        return h('button', { type: 'button', class: 'pill', onclick: function () { set(p[0], p[1]); } }, x.ja + '×' + y.ja);
      }),
      h('button', { type: 'button', class: 'pill', onclick: function () { var r = shuffle(allSpecies); set(r[0].id, r[1].id); } }, '🎲 ランダム'));

    var view = h('div', null,
      h('section', { class: 'intro' },
        h('h2', { tabindex: '-1', 'data-focus': '' }, '⚖️ くらべてみよう'),
        h('p', { class: 'lead' }, '2つの生き物をえらぶと、「どの階級まで同じグループか」がわかります。同じ階級が多いほど、近い親戚です。')),
      h('section', { class: 'cmp-form' },
        h('div', { class: 'cmp-pick' }, h('label', null, '1つめ', selA), h('span', { class: 'vs', 'aria-hidden': 'true' }, '×'), h('label', null, '2つめ', selB)),
        presets),
      result);
    result.append(compareResult(a, b));
    return view;
  }

  function compareResult(a, b) {
    if (!a || !b) return h('p', { class: 'cmp-hint' }, '生き物を2つえらんでね。');
    var pa = pathOf(a), pb = pathOf(b);
    var shared = -1;
    for (var i = 0; i < 7; i++) { if (pa[i] === pb[i]) shared = i; else break; }
    var headline, detail;
    if (a === b) {
      headline = '同じ種です。';
      detail = '別々の生き物をえらんで、くらべてみよう。';
    } else if (shared < 0) {
      headline = a.ja + 'と' + b.ja + 'は、「界」から別々のグループです。';
      detail = '分類の最初の段階（界）からちがう、遠い親戚です。';
    } else {
      var g = pa[shared];
      headline = a.ja + 'と' + b.ja + 'は、「' + RANKS[shared].ja + '」まで同じです。';
      detail = '共通のグループは「' + g.ja + '」。ここまでは同じ住所で、「' + RANKS[shared + 1].ja + '」から別々になります（' +
        pa[shared + 1].ja + ' と ' + pb[shared + 1].ja + '）。';
    }
    var table = h('table', { class: 'cmp-table' },
      h('caption', { class: 'sr-only' }, a.ja + 'と' + b.ja + 'の分類の比較'),
      h('thead', null, h('tr', null, h('th', { scope: 'col' }, '階級'), h('th', { scope: 'col' }, a.emoji + ' ' + a.ja), h('th', { scope: 'col' }, b.emoji + ' ' + b.ja), h('th', { scope: 'col' }, 'おなじ？'))),
      h('tbody', null, RANKS.map(function (r, i) {
        var same = i <= shared;
        return h('tr', { class: same ? 'same r' + (i + 1) : 'diff' },
          h('th', { scope: 'row' }, chip(i)),
          h('td', null, h('a', { href: '#/' + pa[i].id }, pa[i].ja), ' ', sciEl(pa[i], 'small')),
          h('td', null, h('a', { href: '#/' + pb[i].id }, pb[i].ja), ' ', sciEl(pb[i], 'small')),
          h('td', { class: 'verdict' }, same ? '◎ 同じ' : '× ちがう'));
      })));
    return h('div', null,
      h('div', { class: 'cmp-summary' }, h('p', { class: 'cmp-headline' }, headline), h('p', null, detail),
        shared >= 0 && a !== b ? h('p', { class: 'cmp-addr' }, '共通の住所：' + rankLine(pa.slice(0, shared + 1))) : null),
      table,
      h('div', { class: 'btn-row' }, h('a', { class: 'btn ghost', href: '#/tree/' + a.id + (a === b ? '' : '/' + b.id) }, a === b ? '🌳 樹形図で見る' : '🌳 樹形図で見る（分かれ目をさがす）')),
      h('p', { class: 'cmp-note' }, '※ 分類は研究によって見直されます。ここでは、この図鑑で使っている分け方でくらべています。'));
  }

  /* ---------- クイズ ---------- */
  var LEVELS = {
    easy: { label: 'やさしい（界・門・綱）', ranks: [0, 1, 2] },
    normal: { label: 'ふつう（綱・目・科）', ranks: [2, 3, 4] },
    hard: { label: 'むずかしい（目・科・属）', ranks: [3, 4, 5] }
  };
  var QUIZ_LEN = 10;
  var quiz = null;

  function makeQuestion(sp, rIdx) {
    var lineage = pathOf(sp);
    var correct = lineage[rIdx];
    var parent = rIdx > 0 ? lineage[rIdx - 1] : null;
    var sameRank = all.filter(function (n) { return n.depth === rIdx && n !== correct; });
    var near = parent ? parent.children.filter(function (n) { return n !== correct; }) : [];
    var sameKingdom = sameRank.filter(function (n) { return near.indexOf(n) < 0 && pathOf(n)[0] === lineage[0]; });
    var rest = sameRank.filter(function (n) { return near.indexOf(n) < 0 && sameKingdom.indexOf(n) < 0; });
    var pool = shuffle(near).slice(0, 2).concat(shuffle(sameKingdom), shuffle(rest));
    var picked = [], seen = {};
    seen[correct.ja] = true;
    pool.forEach(function (n) {
      if (picked.length < 3 && !seen[n.ja]) { picked.push(n); seen[n.ja] = true; }
    });
    return { sp: sp, rIdx: rIdx, correct: correct, options: shuffle(picked.concat(correct)), chosen: null };
  }

  function startQuiz(levelKey) {
    var lv = LEVELS[levelKey];
    var picks = shuffle(allSpecies).slice(0, QUIZ_LEN);
    quiz = {
      level: levelKey, i: 0, score: 0, done: false,
      qs: picks.map(function (sp) { return makeQuestion(sp, lv.ranks[Math.floor(Math.random() * lv.ranks.length)]); })
    };
  }

  function quizView() {
    var box = h('div', { class: 'quiz' });
    function draw() {
      box.replaceChildren();
      if (!quiz) box.append(quizStart());
      else if (quiz.done) box.append(quizResult());
      else box.append(quizQuestion());
    }
    function quizStart() {
      var chosen = 'normal';
      var radios = Object.keys(LEVELS).map(function (k) {
        return h('label', { class: 'radio' },
          h('input', { type: 'radio', name: 'level', value: k, checked: k === chosen, onchange: function () { chosen = k; } }), ' ' + LEVELS[k].label);
      });
      return h('section', { class: 'intro' },
        h('h2', { tabindex: '-1', 'data-focus': '' }, '❓ 分類クイズ'),
        h('p', { class: 'lead' }, '生き物が1ぴき出てきます。その生き物が「何綱？」「何目？」など、どのグループに入るかを4つの中から当てよう。全' + QUIZ_LEN + '問です。'),
        h('fieldset', { class: 'levels' }, h('legend', null, 'むずかしさをえらんでね'), radios),
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn', onclick: function () { startQuiz(chosen); draw(); focusHead(); } }, 'スタート')));
    }
    function focusHead() {
      var hd = box.querySelector('[data-focus]');
      if (hd) hd.focus({ preventScroll: true });
    }
    function quizQuestion() {
      var q = quiz.qs[quiz.i];
      var rk = RANKS[q.rIdx];
      var answered = q.chosen !== null;
      var opts = h('div', { class: 'opts' }, q.options.map(function (o, k) {
        var cls = 'opt';
        var mark = null;
        if (answered) {
          if (o === q.correct) { cls += ' correct'; mark = h('span', { class: 'mark' }, '〇 せいかい'); }
          else if (o === q.chosen) { cls += ' wrong'; mark = h('span', { class: 'mark' }, '× ちがう'); }
        }
        return h('button', {
          type: 'button', class: cls, disabled: answered ? true : null,
          onclick: function () {
            q.chosen = o;
            if (o === q.correct) quiz.score++;
            draw();
            var nb = box.querySelector('.next-btn'); if (nb) nb.focus();
          }
        }, h('span', { class: 'opt-no' }, 'ABCD'[k]), h('span', { class: 'opt-text' }, o.ja, yomiEl(o), ' ', o.rank === 'genus' ? sciEl(o, 'small') : null), mark);
      }));
      var fb = null;
      if (answered) {
        var ok = q.chosen === q.correct;
        var path = pathOf(q.sp);
        fb = h('div', { class: 'feedback ' + (ok ? 'ok' : 'ng'), role: 'status' },
          h('p', { class: 'fb-head' }, ok ? '〇 せいかい！' : '× ざんねん…　答えは「' + q.correct.ja + '」'),
          h('p', null, q.sp.ja + 'は「' + q.correct.ja + '」の' + (q.rIdx === 6 ? '' : '仲間') + 'です。' + (q.correct.blurb ? q.correct.blurb : '')),
          h('ol', { class: 'fb-path' }, path.map(function (n, i) {
            return h('li', { class: i === q.rIdx ? 'hit r' + (i + 1) : '' }, chip(i), ' ', n.ja);
          })),
          h('div', { class: 'btn-row' },
            h('a', { class: 'btn ghost', href: '#/' + q.sp.id }, q.sp.ja + 'のページを見る'),
            h('button', { type: 'button', class: 'btn next-btn', onclick: function () {
              if (quiz.i + 1 >= quiz.qs.length) quiz.done = true; else quiz.i++;
              draw(); focusHead();
            } }, quiz.i + 1 >= quiz.qs.length ? '結果を見る' : '次の問題へ ›')));
      }
      return h('section', { class: 'q' },
        h('div', { class: 'q-top' },
          h('span', { class: 'q-prog' }, '第 ' + (quiz.i + 1) + ' 問 / ' + quiz.qs.length),
          h('span', { class: 'q-score', 'aria-live': 'polite' }, '正解 ' + quiz.score + ' 問'),
          h('span', { class: 'q-level' }, LEVELS[quiz.level].label)),
        h('h2', { class: 'q-text', tabindex: '-1', 'data-focus': '' },
          h('span', { class: 'q-emoji', 'aria-hidden': 'true' }, q.sp.emoji), q.sp.ja, h('span', { class: 'q-ask' }, 'は、何' + rk.ja + '？')),
        h('p', { class: 'q-sci' }, '学名　', sciEl(q.sp)),
        photoFigure(q.sp, 'q-photo', true),
        opts, fb);
    }
    function quizResult() {
      var n = quiz.qs.length, s = quiz.score;
      var msg = s >= 9 ? 'すごい！ 分類はかせ級です。' : s >= 7 ? 'よくできました！ かなりくわしいね。' : s >= 4 ? 'いい調子！ 図鑑で復習するとさらに伸びるよ。' : 'まずは図鑑をたんけんしてから、もう一度ちょうせんしよう。';
      return h('section', { class: 'intro result' },
        h('h2', { tabindex: '-1', 'data-focus': '' }, '結果発表'),
        h('p', { class: 'score-big' }, s + ' / ' + n, h('span', null, '問 正解')),
        h('p', { class: 'lead' }, msg),
        h('ul', { class: 'review' }, quiz.qs.map(function (q) {
          var ok = q.chosen === q.correct;
          return h('li', { class: ok ? 'ok' : 'ng' }, h('span', { class: 'mk' }, ok ? '〇' : '×'), ' ' + q.sp.emoji + q.sp.ja + '：何' + RANKS[q.rIdx].ja + '？ → ' + q.correct.ja);
        })),
        h('div', { class: 'btn-row' },
          h('button', { type: 'button', class: 'btn', onclick: function () { quiz = null; draw(); focusHead(); } }, 'もういちど'),
          h('a', { class: 'btn ghost', href: '#/' }, '図鑑にもどる')));
    }
    draw();
    return box;
  }

  /* ---------- 樹形図（tree.js） ---------- */
  var treeView = window.createTreeView ? window.createTreeView({
    T: T, RANKS: RANKS, h: h, byId: byId, all: all, allSpecies: allSpecies, pathOf: pathOf,
    search: search, chip: chip, sciEl: sciEl, yomiEl: yomiEl,
    thumb: thumbImg, photoOf: photoOf, creditEl: creditEl
  }) : null;

  /* ---------- 起動 ---------- */
  document.getElementById('footer-note').textContent = T.meta.systemNoteShort + '　' + allSpecies.length + '種を掲載しています。';
  render();
})();
