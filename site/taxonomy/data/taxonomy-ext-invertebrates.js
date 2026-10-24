/* 拡張データ（無脊椎動物：甲殻類・軟体動物・棘皮動物・刺胞動物・環形動物ほか）。
 * taxonomy.js が最後に X を渡して呼び出す（使い方は taxonomy.js の「拡張データの取り込み」参照）。
 * 昆虫・クモ・多足類は別ファイル。 */
(window.TAXON_EXT = window.TAXON_EXT || []).push(function (X) {
  'use strict';
  var S = X.S, G = X.G;
  var A = 'Animalia';

  /* ===================== 節足動物門：甲殻類 ===================== */
  X.def('Arthropoda', '節足動物門', 'からだが節（ふし）に分かれ、かたい殻とふしのある足をもつ動物。', 'せっそくどうぶつもん');
  X.def('Malacostraca', '軟甲綱', 'エビ・カニ・ダンゴムシなど、大きめの甲殻類。', 'なんこうこう');
  X.def('Decapoda', '十脚目', '足が10本あるエビ・カニ・ヤドカリの仲間。', 'じっきゃくもく');
  X.def('Isopoda', '等脚目', 'ダンゴムシやフナムシなど、平たいからだの甲殻類。', 'とうきゃくもく');
  X.def('Stomatopoda', 'シャコ目', 'するどい前あしをもつ、シャコの仲間。', null);
  X.def('Amphipoda', 'ヨコエビ目', 'からだが横に平たい小さな甲殻類。', null);
  X.def('Euphausiacea', 'オキアミ目', 'エビに似た小さな甲殻類。', null);


  // --- 十脚目：エビ・カニ・ヤドカリ ---
  X.def('Palinuridae', 'イセエビ科', 'ハサミをもたない大型のエビ。長い触角が特徴。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Palinuridae'],
    G('イセエビ属', 'Panulirus', [
      S('イセエビ', 'Panulirus japonicus', '🦞', 'お祝いにも使われる高級エビ', 'ハサミはなく、長い触角と、かたいトゲのある殻をもつ。夜に動きまわって貝や小さな生き物を食べる。', '日本の本州中部から九州の、岩だらけの浅い海。', 'おめでたい席の飾りに使われる。ハサミのかわりに触角を使って身を守る。'),
      S('ゴシキエビ', 'Panulirus versicolor', '🦞', '青緑がきれいなイセエビ', '体が青緑色で、足には白い縞（しま）がある。イセエビの仲間でも、とてもカラフル。', '南西諸島などの、あたたかいサンゴ礁の海。', 'イセエビと同じ属で、日本では南の海にすんでいる。'),
      S('シマイセエビ', 'Panulirus penicillatus', '🦞', '足に白い縞のあるイセエビ', '黒っぽい体で、足に細かい縞模様がある。波の荒い岩場にすむ。', '南西諸島、小笠原など、あたたかい海の岩礁。', '同じ属のイセエビより、南の海にすんでいる。')
    ], 'ハサミのない大型のエビ「イセエビ」の仲間の属。熱帯から温帯の岩礁にすむ。'));

  X.def('Penaeidae', 'クルマエビ科', 'エビの中でも食用として世界的に大切にされている仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Penaeidae'],
    G('クルマエビ属', 'Penaeus', [
      S('クルマエビ', 'Penaeus japonicus', '🦐', '縞模様が車輪みたい', '体に濃い縞模様があり、腹を曲げると車輪のように見える。昼は砂にもぐり、夜に動いて食べ物をさがす。', '日本からインド洋・西太平洋の、砂や泥の浅い海。', '天ぷらや塩焼き、お祝いの料理に使われる。養殖も行われている。'),
      S('ブラックタイガー', 'Penaeus monodon', '🦐', '世界で大量に養殖されるエビ', '体が大きく、黒っぽい縞模様がある。加熱すると赤くなる。', '東南アジアなどの、あたたかい浅い海や河口。', '日本では、輸入されたエビフライやむきエビの材料としてなじみ深い。'),
      S('バナメイエビ', 'Penaeus vannamei', '🦐', '中南米生まれの養殖エビ', '体は白っぽく、ブラックタイガーよりやや小さい。養殖しやすく、世界中で育てられている。', '原産は太平洋の中南米沿岸。養殖は東南アジアなどで盛ん。', '現在、日本が輸入するエビの中でも多くを占めるとされる。'),
      S('タイショウエビ', 'Penaeus chinensis', '🦐', '黄海にすむ大型のエビ', '体は透明感のある色で、大型になる。「コウライエビ」とも呼ばれる。', '黄海や東シナ海など、東アジアの浅い海。', '日本では、おもに輸入や養殖の話題で名前が出てくる。')
    ], 'クルマエビやブラックタイガーなど、食用エビの代表がそろう属。'));

  X.def('Cheiragonidae', 'クリガニ科', '北の海にすむ、毛の生えたカニの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Cheiragonidae'],
    G('ケガニ属', 'Erimacrus', [
      S('ケガニ', 'Erimacrus isenbeckii', '🦀', '全身に毛が生えた北のカニ', '甲らや足に短い毛が生えている。身とカニみそが人気で、ゆでて食べる。', '北海道から東北、ロシア極東などの冷たい海。', '北海道の名物で、ゆでてそのまま食べるのが定番。')
    ], '全身に毛が生えたカニ「ケガニ」の属。北の冷たい海にすむ。'));

  X.def('Oregoniidae', 'ズワイガニ科', '足が長く、からだが丸いカニの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Oregoniidae'],
    G('ズワイガニ属', 'Chionoecetes', [
      S('ズワイガニ', 'Chionoecetes opilio', '🦀', '冬の味覚の高級ガニ', '足が長く、オスは大きく、メスはずっと小さい。オスは「松葉ガニ」「越前ガニ」と呼ばれることもある。', '日本海やオホーツク海などの、冷たい深い海。', 'メスは「セイコガニ」などと呼ばれ、冬のごちそうとして親しまれている。'),
      S('ベニズワイガニ', 'Chionoecetes japonicus', '🦀', 'ゆでる前から赤いカニ', '殻がもともと赤っぽい。ズワイガニよりさらに深い海にすむ。', '日本海などの、水深の深い海底。', 'ズワイガニの仲間だが、ゆでる前から赤いのが名前の由来。')
    ], 'ズワイガニなど、足の長い大型のカニの属。冷たい深い海にすむ。'));

  X.def('Varunidae', 'モクズガニ科', '川と海を行き来するものを含む、小〜中型のカニの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Varunidae'],
    G('モクズガニ属', 'Eriocheir', [
      S('モクズガニ', 'Eriocheir japonica', '🦀', 'ハサミに毛がもじゃもじゃ', 'ハサミに毛が密に生えているカニ。川で育ち、産卵のために海へ向かう。', '日本の川や河口、周辺の海。', '川と海を行き来する。ツガニ、ズガニなどと呼ばれる地域もある。'),
      S('チュウゴクモクズガニ', 'Eriocheir sinensis', '🦀', '「上海ガニ」のなかま', 'モクズガニによく似て、ハサミに毛が生えている。秋に食べられる「上海ガニ」として知られる。', '中国の川や河口が原産。日本にも外来種として入っている。', '中国料理の高級食材。日本では外来種として警戒されている。')
    ], 'ハサミに毛が生えたカニの属。川と海を行き来する種を含む。'));

  X.def('Potamidae', 'サワガニ科', '川や池など淡水にすむカニの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Potamidae'],
    G('サワガニ属', 'Geothelphusa', [
      S('サワガニ', 'Geothelphusa dehaani', '🦀', '一生を川で過ごすカニ', '体は赤茶色や青っぽい色。一生を淡水で暮らし、幼生にならず、小さなカニの姿で生まれる。', '日本の山地の清流や沢。', '日本の固有種とされる。きれいな水の川にすむので、環境の目安にもなる。')
    ], '一生を川や沢で過ごす小さなカニ「サワガニ」の属。'));

  X.def('Ocypodidae', 'スナガニ科', '干潟や砂浜で巣穴を掘るカニの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Ocypodidae'],
    G('シオマネキ属', 'Tubuca', [
      S('シオマネキ', 'Tubuca arcuata', '🦀', 'ハサミで潮を招く？', 'オスは片方のハサミだけがとても大きい。ハサミをふってメスにアピールする。', '日本の南西部などの、河口や干潟。', 'ハサミをふる姿が「潮を招く」ように見えるのが名前の由来。')
    ], '片方のハサミが大きなオスをもつ「シオマネキ」の属。'));
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Ocypodidae'],
    G('ハクセンシオマネキ属', 'Austruca', [
      S('ハクセンシオマネキ', 'Austruca lactea', '🦀', '白い大ハサミをふるカニ', 'オスの大きなハサミが白っぽい。干潟で何匹ものオスがいっせいにハサミをふる。', '日本の本州南部から南西諸島の、干潟や河口。', '大きなハサミをふって、メスを呼んだりなわばりを守ったりする。')
    ], 'シオマネキの仲間。オスの大きなハサミを振る行動で知られる。'));

  X.def('Paguridae', 'ヤドカリ科', '巻き貝の殻を背負う「ヤドカリ」の仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Paguridae'],
    G('ホンヤドカリ属', 'Pagurus', [
      S('ホンヤドカリ', 'Pagurus filholi', '🐚', '磯のヤドカリの代表', '巻き貝の殻を背負い、成長すると、もっと大きい殻に引っ越しする。潮だまりでよく見られる。', '日本の海岸の岩礁や潮だまり。', '殻はいつも自分のものとは限らず、サイズの合うものを探して引っ越す。')
    ], '巻き貝の殻を背負う「ヤドカリ」の仲間の属。'));

  X.def('Coenobitidae', 'オカヤドカリ科', '陸でくらすヤドカリや、ヤシガニなどの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Coenobitidae'],
    G('オカヤドカリ属', 'Coenobita', [
      S('ムラサキオカヤドカリ', 'Coenobita purpureus', '🐚', '海岸の林にすむヤドカリ', 'ふだんは陸で暮らすヤドカリ。ハサミは紫色っぽい。産卵のときだけ海へ行く。', '南西諸島、小笠原などの海岸近く。', 'オカヤドカリ類は、日本では国の天然記念物に指定されている。'),
      S('ナキオカヤドカリ', 'Coenobita rugosus', '🐚', '南の島の陸のヤドカリ', 'ムラサキオカヤドカリと同じ属で、陸で暮らす。夜に海岸で動くことが多い。', '南西諸島などの海岸近く。', 'オカヤドカリ類は、日本では国の天然記念物。むやみにつかまえてはいけない。')
    ], '陸地でくらすヤドカリ「オカヤドカリ」の属。'));
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Coenobitidae'],
    G('ヤシガニ属', 'Birgus', [
      S('ヤシガニ', 'Birgus latro', '🦀', '陸の甲殻類で最大級', 'ヤドカリの仲間だが、大人になると殻を背負わない。強いハサミで、ヤシの実なども割るとされる。', '南西諸島やインド洋・西太平洋の島の森や海岸。', '陸にすむ節足動物では世界最大級とされる。')
    ], '大人になると殻を背負わない、巨大なヤドカリの仲間。'));

  X.def('Pandalidae', 'タラバエビ科', '寒い海にすむ、赤っぽくておいしいエビの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Pandalidae'],
    G('タラバエビ属', 'Pandalus', [
      S('ホッコクアカエビ', 'Pandalus eous', '🦐', '「アマエビ」として売られる', 'あまみが強く、お寿司に使われる。生まれたときはオスで、成長するとメスに変わる。', '日本海や北海道など、北の冷たい深い海。', '「アマエビ」の名で売られる。性別が途中で変わる不思議なエビ。'),
      S('ボタンエビ', 'Pandalus nipponensis', '🦐', '大きくて高級なエビ', '大きなエビで、赤みがかった色をしている。あまくて柔らかい身が人気。', '日本の沿岸の、やや深い海底。', 'お寿司や刺身で出る、高級なエビ。')
    ], '北の海にすむ赤っぽいエビの属。生まれはオスで、大きくなるとメスになる種もある。'));

  X.def('Palaemonidae', 'テナガエビ科', '川や湖、海にすむ、細長いエビの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Palaemonidae'],
    G('テナガエビ属', 'Macrobrachium', [
      S('テナガエビ', 'Macrobrachium nipponense', '🦐', 'オスのハサミ足が長い', 'オスは第二脚のハサミが体より長いほど伸びる。川や湖の水草のあたりにすむ。', '日本の川、湖、沼、河口。', '釣りの対象として人気があり、夏の風物詩になっている。')
    ], 'ハサミ足の長い淡水エビ「テナガエビ」の属。'));
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Palaemonidae'],
    G('スジエビ属', 'Palaemon', [
      S('スジエビ', 'Palaemon paucidens', '🦐', '縞のある小さな川エビ', '透明な体に黒っぽい縞がある。池や川で水草のかげにかくれている。', '日本の川、池、湖。', '小型のエビで、佃煮やから揚げにして食べる地域もある。')
    ], '体に縞のある小さなエビの属。'));

  X.def('Atyidae', 'ヌマエビ科', '川や池にすむ、小型のエビの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Atyidae'],
    G('ミナミヌマエビ属', 'Neocaridina', [
      S('ミナミヌマエビ', 'Neocaridina denticulata', '🦐', '水槽でおなじみの小さなエビ', '体は小さく、茶色や透明っぽい。水草の多いところで暮らし、一生淡水で過ごす。', '日本の本州西部〜九州の、川や用水路。', '水槽のそうじ屋さんとして、メダカといっしょに飼われることが多い。')
    ], '一生を淡水で過ごす小型のエビの属。'));
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Atyidae'],
    G('ヤマトヌマエビ属', 'Caridina', [
      S('ヤマトヌマエビ', 'Caridina multidentata', '🦐', '海で育つ川のエビ', '体は半透明で、ふつうのヌマエビより大きい。川にすむが、幼生は海で育つ。', '日本の本州中部〜九州などの、川や河口。', '水槽の苔をよく食べるので、飼育されることも多い。')
    ], '川と海を行き来するものがいる、ヌマエビの仲間の属。'));

  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Portunidae'],
    G('イシガニ属', 'Charybdis', [
      S('イシガニ', 'Charybdis japonica', '🦀', '港や磯にいる泳ぐカニ', '甲らに丸みがあり、後ろの足がひれのようになっていて、泳ぐことができる。', '日本の沿岸の磯や港。', 'ガザミ（ワタリガニ）の仲間で、みそ汁などにして食べられる。')
    ], '後ろ足がヒレ状で泳げる、ワタリガニの仲間の属。'));
  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Portunidae'],
    G('ノコギリガザミ属', 'Scylla', [
      S('ノコギリガザミ', 'Scylla serrata', '🦀', 'マングローブにすむ大きなカニ', '大型で、強力なハサミと、甲らの縁（ふち）にとがったギザギザがある。', 'インド洋・西太平洋の、河口やマングローブ。日本では南西諸島。', '東南アジアなどでは、高級なカニとして食べられる。')
    ], '大型で、ハサミの力が強いカニの属。'));

  X.add([A, 'Arthropoda', 'Malacostraca', 'Decapoda', 'Lithodidae'],
    G('タラバガニ属', 'Paralithodes', [
      S('ハナサキガニ', 'Paralithodes brevipes', '🦀', '根室名物の赤いカニ', 'タラバガニに似るが、小型で、ゆでる前から赤っぽい。トゲだらけの甲らをもつ。', '北海道東部、千島列島、オホーツク海などの冷たい海。', '北海道の花咲港（根室）で有名になり、この名前がついたとされる。')
    ]));

  // --- シャコ目 ---
  X.def('Squillidae', 'シャコ科', '前あしでえものをつかむ、シャコの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Stomatopoda', 'Squillidae'],
    G('シャコ属', 'Oratosquilla', [
      S('シャコ', 'Oratosquilla oratoria', '🦐', 'ふしぎな形の寿司ネタ', '前あしが折りたたみナイフのようになっていて、すばやくえものをつかむ。エビやカニとは別のグループ。', '日本各地の内湾の、砂や泥の海底。', '寿司ネタや塩ゆでで食べられる。ゆでると殻にたまごがつまっていることがある。')
    ], '折りたたみ式の前あしを持つ、エビに似た甲殻類の属。'));
  X.def('Odontodactylidae', 'モンハナシャコ科', '強力なこぶし状の前あしをもつシャコの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Stomatopoda', 'Odontodactylidae'],
    G('モンハナシャコ属', 'Odontodactylus', [
      S('モンハナシャコ', 'Odontodactylus scyllarus', '🌈', 'カラフルな「パンチ屋」', '体が緑やオレンジなど、とてもカラフル。ハンマーのような前あしで、すごい速さでパンチする。', 'インド洋・西太平洋の、サンゴ礁の砂地。', '水槽のガラスにひびを入れることがあるとされるほど、パンチ力が強い。')
    ], 'こぶしのような前あしでパンチするカラフルなシャコの属。'));

  // --- 等脚目 ---
  X.def('Porcellionidae', 'ワラジムシ科', '丸くならない、ワラジムシの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Isopoda', 'Porcellionidae'],
    G('ワラジムシ属', 'Porcellio', [
      S('ワラジムシ', 'Porcellio scaber', '🐛', 'ダンゴムシのいとこ', 'ダンゴムシに似ているが、さわっても丸くならず、すばやく走って逃げる。', '石の下、落ち葉の下、庭などの湿ったところ。原産はヨーロッパとされる。', 'ダンゴムシと同じく、エビやカニに近い甲殻類。')
    ], 'ダンゴムシに似るが、丸くならないワラジムシの属。'));
  X.add([A, 'Arthropoda', 'Malacostraca', 'Isopoda', 'Armadillidiidae'],
    G('オカダンゴムシ属', 'Armadillidium', [
      S('コシビロダンゴムシ', 'Armadillidium nasatum', '🐛', 'オカダンゴムシの仲間', 'オカダンゴムシと同じ属で、危険を感じると丸くなる。落ち葉などを食べる。', '日本の庭や公園、林の湿ったところ。', 'オカダンゴムシに比べると、見かける機会は少ないかもしれない。')
    ]));
  X.def('Cirolanidae', 'スナホリムシ科', '深海にすむものを含む、等脚類の仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Isopoda', 'Cirolanidae'],
    G('ダイオウグソクムシ属', 'Bathynomus', [
      S('ダイオウグソクムシ', 'Bathynomus giganteus', '🐛', '深海の巨大ダンゴムシ', 'ダンゴムシに近い仲間だが、体長が30cmほどにもなる。深海の死んだ生き物などを食べる。', '大西洋の深い海底。日本の水族館でも人気。', '水族館で5年以上食べ物をとらなかった例が知られる。')
    ], '深海にすむ巨大な等脚類の属。'));
  X.def('Ligiidae', 'フナムシ科', '海辺の岩場を走る等脚類の仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Isopoda', 'Ligiidae'],
    G('フナムシ属', 'Ligia', [
      S('フナムシ', 'Ligia exotica', '🐛', '岩場をすばやく走る', '海岸の岩や防波堤で、集団ですばやく走り回る。からだは平たい。', '日本をはじめ世界の温かい海岸。', 'ダンゴムシに近い甲殻類。見た目はゴキブリに似ているが、まったく別の仲間。')
    ], '海岸の岩場で見られる、すばやく走る等脚類の属。'));

  // --- ヨコエビ目 ---
  X.def('Talitridae', 'ハマトビムシ科', '海辺で跳ねる小さなヨコエビの仲間。', null);
  X.add([A, 'Arthropoda', 'Malacostraca', 'Amphipoda', 'Talitridae'],
    G('ヒメハマトビムシ属', 'Morinoia', [
      S('ヒメハマトビムシ', 'Morinoia japonica', '🦐', '砂浜でぴょんぴょん跳ねる', '砂浜に打ち上げられた海藻の下で見つかる。ぴょんぴょん跳ねて移動する。', '日本の砂浜の打ち上げ海藻の下。', '砂浜のそうじ屋さんとして、海藻の分解を助けている。')
    ], '砂浜で跳ねる、小さなヨコエビの仲間の属。'));

  X.add([A, 'Arthropoda', 'Malacostraca', 'Euphausiacea', 'Euphausiidae'],
    G('オキアミ属', 'Euphausia', [
      S('ツノナシオキアミ', 'Euphausia pacifica', '🦐', '日本近海のオキアミ', '体長は数cmの小さなエビのような生き物。群れをつくって海を漂い、魚やクジラのえさになる。', '北太平洋、日本の三陸沖などの海。', '漁業の対象にもなり、ナンキョクオキアミと同じ属の仲間。')
    ]));

  // --- 鰓脚綱 ---
  X.def('Branchiopoda', '鰓脚綱', 'ミジンコやカブトエビなど、水の中の小さな甲殻類。', 'さいきゃくこう');
  X.def('Diplostraca', 'ミジンコ目', '水中にすむミジンコの仲間。', null);
  X.def('Daphniidae', 'ミジンコ科', 'いわゆる「ミジンコ」の仲間。', null);
  X.add([A, 'Arthropoda', 'Branchiopoda', 'Diplostraca', 'Daphniidae'],
    G('ミジンコ属', 'Daphnia', [
      S('ミジンコ', 'Daphnia pulex', '🔬', '池や田んぼの小さな住人', '体長は2mmほどで、ほぼ透明。顕微鏡で見ると心臓が動いているのが見える。', '日本を含め世界中の池や水たまり。', '植物プランクトンを食べる。環境が悪くなると、オスが生まれて卵をつくる。'),
      S('オオミジンコ', 'Daphnia magna', '🔬', 'ミジンコより大きい', 'ミジンコ属の中でも大きく、数mmになる。水の中をぴょんぴょん跳ねるように泳ぐ。', '日本を含む北半球の池や湖。', '実験にもよく使われ、水の汚れの調査に役立っている。')
    ], '水の中をぴょんぴょん泳ぐ「ミジンコ」の属。'));

  X.def('Notostraca', 'カブトエビ目', 'かぶとのような甲らをもつ、カブトエビの仲間。', null);
  X.def('Triopsidae', 'カブトエビ科', 'かぶと型の甲らをもつ、田んぼなどの小さな生き物。', null);
  X.add([A, 'Arthropoda', 'Branchiopoda', 'Notostraca', 'Triopsidae'],
    G('カブトエビ属', 'Triops', [
      S('アメリカカブトエビ', 'Triops longicaudatus', '🦐', '田んぼの「生きた化石」', 'かぶとのような甲らと、細い2本の尾をもつ。田んぼの泥をかきまぜて、雑草の芽をじゃまする。', '北米原産。日本の水田にも定着している。', '卵は乾燥にとても強く、水に入れると孵化（ふか）する。')
    ], '3億年以上前から姿が大きく変わっていないとされる、カブトエビの属。'));

  X.def('Anostraca', 'ホウネンエビ目', '水たまりや田んぼに現れる、エビに似た小さな甲殻類。', null);
  X.def('Thamnocephalidae', 'ホウネンエビ科', 'ホウネンエビの仲間。', null);
  X.add([A, 'Arthropoda', 'Branchiopoda', 'Anostraca', 'Thamnocephalidae'],
    G('ホウネンエビ属', 'Branchinella', [
      S('ホウネンエビ', 'Branchinella kugenumaensis', '🦐', '背泳ぎする田んぼのエビ', '体は細長く、たくさんの足があり、背中を下にして泳ぐ。田植えの後に水田に現れる。', '日本の水田や水たまり。', '「豊年エビ」と書き、たくさん出る年は豊作といわれることがある。')
    ], '背泳ぎで泳ぐ、田んぼにすむ細長い甲殻類の属。'));
  X.def('Artemiidae', 'アルテミア科', '塩水の湖などにすむ小さな甲殻類。', null);
  X.add([A, 'Arthropoda', 'Branchiopoda', 'Anostraca', 'Artemiidae'],
    G('アルテミア属', 'Artemia', [
      S('アルテミア', 'Artemia salina', '🦐', '「ブラインシュリンプ」の正体', '塩分の濃い湖や塩田にすむ、小さなエビのような生き物。卵は乾燥にとても強い。', '世界各地の塩水湖や塩田。', '乾燥した卵に塩水をかけると孵化し、観賞魚の稚魚のえさに使われる。')
    ], '塩水の湖にすむ小さな甲殻類。卵が乾燥に強いことで知られる。'));

  // --- 貝形虫綱 ---
  X.def('Ostracoda', '貝形虫綱', '二枚貝のような殻をもつ、小さな甲殻類。', 'かいけいちゅうこう');
  X.def('Myodocopida', 'ミオドコパ目', 'ウミホタルなどを含む、貝形虫の仲間。', null);
  X.def('Cypridinidae', 'ウミホタル科', '海底にすみ、青く光るものがいる仲間。', null);
  X.add([A, 'Arthropoda', 'Ostracoda', 'Myodocopida', 'Cypridinidae'],
    G('ウミホタル属', 'Vargula', [
      S('ウミホタル', 'Vargula hilgendorfii', '🔵', '夜の海で青く光る', '体長3mmほどの小さな生き物で、二枚貝のような殻をもつ。刺激されると青く光る液を出す。', '日本の海の砂地。', '乾燥させても、水を加えると光るので、昔から観察や実験に使われてきた。')
    ], '青く光る小さな甲殻類「ウミホタル」の属。'));

  // --- 顎脚綱：フジツボ ---
  X.def('Maxillopoda', '顎脚綱', 'フジツボなどを含む、変わった形の甲殻類。', 'がっきゃくこう');
  X.def('Sessilia', 'フジツボ目', '岩などにくっついて動かない、フジツボの仲間。', null);
  X.def('Balanidae', 'フジツボ科', '岩や貝の表面にくっつく、フジツボの仲間。', null);
  X.add([A, 'Arthropoda', 'Maxillopoda', 'Sessilia', 'Balanidae'],
    G('タテジマフジツボ属', 'Amphibalanus', [
      S('タテジマフジツボ', 'Amphibalanus amphitrite', '🐚', '船底にもくっつくフジツボ', '殻に縦の縞模様がある。岩や船底、桟橋などにびっしりつく。', '世界中の温かい海の沿岸。', '貝の仲間に見えるが、エビやカニに近い甲殻類。')
    ], '縦じまのフジツボの属。港や船底にもよくつく。'));
  X.def('Chthamalidae', 'イワフジツボ科', '岩のてっぺんにつく小さなフジツボの仲間。', null);
  X.add([A, 'Arthropoda', 'Maxillopoda', 'Sessilia', 'Chthamalidae'],
    G('イワフジツボ属', 'Chthamalus', [
      S('イワフジツボ', 'Chthamalus challengeri', '🐚', '岩の高いところにつく', '小さくて灰色っぽいフジツボで、潮の満ち引きの上のほうの岩にくっついている。', '日本の海岸の岩場。', '潮が引くと殻を閉じて、乾燥に耐える。')
    ], '岩場の高いところにつく小さなフジツボの属。'));

  /* ===================== 軟体動物門 ===================== */
  X.def('Mollusca', '軟体動物門', '貝やイカ・タコなど、やわらかいからだをもつ動物。', 'なんたいどうぶつもん');

  // --- 腹足綱（巻き貝・ナメクジ・ウミウシ） ---
  X.def('Gastropoda', '腹足綱', '巻き貝やナメクジ、ウミウシなど。', 'ふくそくこう');

  X.def('Lepetellida', 'レペテラ目', 'アワビなどを含む巻き貝のグループ。', null);
  X.def('Haliotidae', 'アワビ科', '殻の穴が並ぶ、アワビの仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Lepetellida', 'Haliotidae'],
    G('アワビ属', 'Haliotis', [
      S('クロアワビ', 'Haliotis discus', '🐚', '高級食材の代表', '殻が平たい皿のような形で、並んだ穴がある。海藻を食べ、岩にはりついて暮らす。', '日本の岩礁の海。', '殻の穴は、水や排出物の出口になっている。'),
      S('マダカアワビ', 'Haliotis madaka', '🐚', '大きなアワビ', '日本のアワビの中でも大型で、殻が厚い。やや深い海にすむ。', '房総半島から九州など、日本の太平洋側の岩礁。', 'クロアワビと同じ属で、並べて比べるとちがいがわかる。'),
      S('メガイアワビ', 'Haliotis gigantea', '🐚', '殻が大きくて平たい', '殻が大きくて、クロアワビより平たい。海藻を食べる。', '日本の本州中部から九州の岩礁。', '殻の内側は、真珠のような虹色に光る。')
    ], '海藻を食べ、殻に穴が並んだ巻き貝「アワビ」の属。'));

  X.def('Trochida', 'ニシキウズガイ目', 'サザエなどを含む巻き貝のグループ。', null);
  X.def('Turbinidae', 'サザエ科', 'サザエやヤコウガイなど、ふたの厚い巻き貝の仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Trochida', 'Turbinidae'],
    G('サザエ属', 'Turbo', [
      S('サザエ', 'Turbo sazae', '🐚', 'つぼ焼きでおなじみ', '殻にトゲのような突起があり、厚いふたをもつ。海藻を食べる。', '日本の沿岸の岩礁。', '殻のトゲは波の強さなどで長さが変わる。学名は近年見直された。'),
      S('ヤコウガイ', 'Turbo marmoratus', '🐚', '大きく真珠色に輝く貝', '大型の巻き貝で、殻の内側が真珠のように光る。昔から工芸品の材料に使われた。', '南西諸島などの、あたたかいサンゴ礁の海。', '光る殻は、螺鈿（らでん）細工の材料になる。', null)
    ], 'サザエなど、厚いふたをもつ大型の巻き貝の属。'));
  X.add([A, 'Mollusca', 'Gastropoda', 'Trochida', 'Turbinidae'],
    G('スガイ属', 'Lunella', [
      S('スガイ', 'Lunella coronata', '🐚', '磯でよく見る小さな貝', '殻は小さくて、丸みがあり、ふたが白くて硬い。潮だまりや岩のくぼみにいる。', '日本の海岸の岩礁。', 'サザエの親戚で、磯で見つけやすい貝。')
    ], 'サザエに近い仲間の小さな巻き貝の属。'));

  X.def('Littorinimorpha', 'リトリノモルファ目', 'タマキビやホラガイ、ツメタガイなどを含む巻き貝のグループ。', null);
  X.def('Littorinidae', 'タマキビ科', '海岸の岩にすむ、小さな丸い巻き貝。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Littorinimorpha', 'Littorinidae'],
    G('タマキビ属', 'Littorina', [
      S('タマキビ', 'Littorina brevicula', '🐚', '潮の満ち引きの上にいる', '1cmほどの小さな巻き貝。波しぶきがかかるくらいの、岩の高いところにすむ。', '日本の海岸の岩礁。', '長い時間、水から出たまま生きていられる。')
    ], '海辺の岩場にすむ、小さな巻き貝の属。'));
  X.def('Naticidae', 'タマガイ科', '他の貝に穴をあけて食べる巻き貝の仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Littorinimorpha', 'Naticidae'],
    G('ツメタガイ属', 'Neverita', [
      S('ツメタガイ', 'Neverita didyma', '🐚', 'アサリに穴をあける貝', '丸い殻をもつ肉食の巻き貝。アサリなどの二枚貝に穴をあけて食べる。', '日本の砂浜や干潟。', 'アサリの殻に小さな丸い穴が開いていたら、ツメタガイの仕業かも。')
    ], '二枚貝に穴をあけて食べる巻き貝の属。'));
  X.def('Charoniidae', 'ホラガイ科', '大型の巻き貝、ホラガイやボウシュウボラの仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Littorinimorpha', 'Charoniidae'],
    G('ホラガイ属', 'Charonia', [
      S('ホラガイ', 'Charonia tritonis', '🐚', '山伏が吹く法螺貝', '殻の長さが30cmを超える大型の巻き貝。ヒトデを食べる。', '南西諸島など、あたたかいサンゴ礁の海。', '殻の先に穴を開けて吹くと音が出る。オニヒトデを食べる貴重な貝でもある。'),
      S('ボウシュウボラ', 'Charonia lampas', '🐚', '大きな食用の巻き貝', '大型の巻き貝で、殻は厚く、模様がある。ウニやヒトデなどを食べる。', '日本の房総半島から九州の岩礁。', 'ホラガイの仲間で、地域によっては食用にされる。')
    ], '大きな殻をもつ肉食の巻き貝「ホラガイ」の属。'));

  X.def('Neogastropoda', '新腹足目', 'バイ、アカニシ、レイシガイなど、肉食の巻き貝のグループ。', 'しんふくそくもく');
  X.def('Babyloniidae', 'バイ科', '殻にまだら模様のある、バイの仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Neogastropoda', 'Babyloniidae'],
    G('バイ属', 'Babylonia', [
      S('バイガイ', 'Babylonia japonica', '🐚', '煮つけで食べる巻き貝', '殻は光沢があり、褐色の斑点がある。砂にもぐり、死んだ生き物などを食べる。', '日本の砂泥の浅い海。', '「バイ」と呼ばれ、煮つけなどで食べられる。')
    ], '砂にもぐる巻き貝「バイ」の属。'));
  X.def('Muricidae', 'アクキガイ科', '殻にトゲやこぶがある、肉食の巻き貝の仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Neogastropoda', 'Muricidae'],
    G('アカニシ属', 'Rapana', [
      S('アカニシ', 'Rapana venosa', '🐚', '卵が「海ほおずき」になる', '大型の巻き貝で、殻の口が赤い。二枚貝を食べる。', '日本の内湾の砂泥底。', '卵の入れ物は「海ほおずき」と呼ばれ、昔は口で吹いて遊ばれた。')
    ], '大型で肉食の巻き貝「アカニシ」の属。'));
  X.add([A, 'Mollusca', 'Gastropoda', 'Neogastropoda', 'Muricidae'],
    G('レイシガイ属', 'Reishia', [
      S('レイシガイ', 'Reishia clavigera', '🐚', '磯でフジツボを食べる', '殻に小さなこぶがある巻き貝。フジツボや二枚貝に穴をあけて食べる。', '日本の海岸の岩礁。', '岩場でフジツボやカキの近くによくいる。')
    ], '磯にすむ肉食の巻き貝の属。'));

  X.def('Architaenioglossa', 'タニシ目', '田んぼや池にすむタニシの仲間。', null);
  X.def('Viviparidae', 'タニシ科', '赤ちゃんを産むタニシの仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Architaenioglossa', 'Viviparidae'],
    G('タニシ属', 'Cipangopaludina', [
      S('マルタニシ', 'Cipangopaludina chinensis', '🐚', '田んぼのタニシ', '殻は丸く、ふたがある。水中の藻や小さな生き物を食べる。', '日本の水田や池、用水路。', '卵ではなく、殻のついた小さな赤ちゃんを産む。'),
      S('オオタニシ', 'Cipangopaludina japonica', '🐚', '大きな日本のタニシ', 'マルタニシより大きく育つタニシ。水がきれいな池や沼にすむ。', '日本の池や沼、用水路。', '数が減っているとされ、環境がよい場所の目安になる。')
    ], '日本の田んぼや池でおなじみの「タニシ」の属。'));
  X.add([A, 'Mollusca', 'Gastropoda', 'Architaenioglossa', 'Viviparidae'],
    G('ヒメタニシ属', 'Sinotaia', [
      S('ヒメタニシ', 'Sinotaia quadrata', '🐚', '小さな身近なタニシ', 'タニシの中では小さい。水をこしとって食べ、水をきれいにする働きがある。', '日本の池、沼、用水路。', '水槽で飼われることも多い。')
    ], '小型のタニシの属。'));
  X.def('Ampullariidae', 'リンゴガイ科', 'リンゴのように丸い殻の淡水の巻き貝。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Architaenioglossa', 'Ampullariidae'],
    G('スクミリンゴガイ属', 'Pomacea', [
      S('スクミリンゴガイ', 'Pomacea canaliculata', '🐚', '田んぼの外来種「ジャンボタニシ」', '大型の淡水の巻き貝で、ピンク色の卵の塊を水面近くに産む。稲の苗を食べてしまう。', '南米原産。日本では田んぼや水路に定着。', '食用に持ちこまれたが、逃げ出して広まった。')
    ], '淡水にすむ、大きくて丸い巻き貝の属。'));

  X.def('Sorbeoconcha', 'ニナ目', 'カワニナなど、細長い殻の巻き貝のグループ。', null);
  X.def('Semisulcospiridae', 'カワニナ科', 'カワニナの仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Sorbeoconcha', 'Semisulcospiridae'],
    G('カワニナ属', 'Semisulcospira', [
      S('カワニナ', 'Semisulcospira libertina', '🐚', 'ホタルの幼虫のごはん', '細長い巻き貝で、川の石の上を這って、藻などを食べる。', '日本の川や用水路。', 'ゲンジボタルの幼虫のえさになるので、「ホタルの里」には欠かせない。')
    ], '川にすむ細長い巻き貝の属。'));

  X.def('Hygrophila', 'ヒラマキガイ目', '池や沼にすむ、モノアラガイなどの巻き貝のグループ。', null);
  X.def('Physidae', 'サカマキガイ科', '殻が左巻きの淡水の貝の仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Hygrophila', 'Physidae'],
    G('サカマキガイ属', 'Physella', [
      S('サカマキガイ', 'Physella acuta', '🐚', '左巻きの小さな巻き貝', '殻が左巻きになっていて、小さい。水槽や、少し汚れた水路にもいる。', '北米原産とされる外来種。日本の池や水路。', '水草の水槽に混ざって入ってくることがある。')
    ], '殻が左巻きの小さな淡水の巻き貝の属。'));
  X.def('Lymnaeidae', 'モノアラガイ科', '淡水にすむ巻き貝の仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Hygrophila', 'Lymnaeidae'],
    G('モノアラガイ属', 'Radix', [
      S('モノアラガイ', 'Radix auricularia', '🐚', '池にいる昔なじみの貝', '殻は薄く丸みがあり、水草や藻を食べる。', '日本の池、沼、田んぼの水路。', '数が減っているとされ、身近な池で出会えたらうれしい貝。')
    ], '殻が薄く、丸みのある淡水の巻き貝の属。'));

  // 柄眼目（カタツムリ・ナメクジ）は既存
  X.def('Camaenidae', 'ナンバンマイマイ科', 'カタツムリの仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Stylommatophora', 'Camaenidae'],
    G('ミスジマイマイ属', 'Euhadra', [
      S('ミスジマイマイ', 'Euhadra brandtii', '🐌', '三本の帯のカタツムリ', '殻に3本の帯があることが多い、大きなカタツムリ。林の中の落ち葉の下にいる。', '日本の関東地方などの林。', '日本の大型のカタツムリの仲間のひとつ。'),
      S('ヒダリマキマイマイ', 'Euhadra quaesita', '🐌', '左巻きのカタツムリ', '殻の巻き方が左巻きの、大型のカタツムリ。', '日本の関東地方などの林や草地。', 'ふつうのカタツムリは右巻きが多いが、この仲間は左巻き。')
    ], '大型のカタツムリの属。'));
  X.def('Philomycidae', 'ヤマナメクジ科', '殻のないナメクジの仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Stylommatophora', 'Philomycidae'],
    G('ナメクジ属', 'Meghimatium', [
      S('ナメクジ', 'Meghimatium bilineatum', '🐌', '日本にもともといるナメクジ', '背中に2本の黒っぽい線があるナメクジ。湿った場所で、植物や落ち葉を食べる。', '日本の庭、畑、林などの湿ったところ。', '殻のないカタツムリの仲間。塩をかけると水分が出て縮んでしまう。')
    ], '殻がほとんどない陸の貝「ナメクジ」の属。'));
  X.add([A, 'Mollusca', 'Gastropoda', 'Stylommatophora', 'Limacidae'],
    G('キイロナメクジ属', 'Limacus', [
      S('キイロナメクジ', 'Limacus flavus', '🐌', '黄色っぽいナメクジ', '体が黄色っぽいナメクジ。家の庭や台所の近くなどにも出る。', 'ヨーロッパ原産とされ、日本の人家周辺にも定着。', '外来のナメクジで、湿ったところが好き。')
    ], '黄色っぽい体のナメクジの属。'));

  X.def('Aplysiida', 'アメフラシ目', 'アメフラシの仲間。', null);
  X.def('Aplysiidae', 'アメフラシ科', '海藻を食べる、大型のウミウシの仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Aplysiida', 'Aplysiidae'],
    G('アメフラシ属', 'Aplysia', [
      S('アメフラシ', 'Aplysia kurodai', '🐌', '紫の液を出す海のナメクジ', '海藻を食べる、大型のウミウシの仲間。刺激されると紫色の液を出す。', '日本の磯や潮だまり。', '麺のような卵の塊は「海そうめん」とも呼ばれ、食べられる地域もある。')
    ], '海藻を食べる大型のウミウシ「アメフラシ」の属。'));
  X.def('Nudibranchia', 'ウミウシ目', '殻がない、ウミウシの仲間。', null);
  X.def('Chromodorididae', 'イロウミウシ科', 'カラフルなウミウシの仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Nudibranchia', 'Chromodorididae'],
    G('アオウミウシ属', 'Hypselodoris', [
      S('アオウミウシ', 'Hypselodoris festiva', '🐌', '青い体の人気ウミウシ', '青い体に黄色い線がある、きれいなウミウシ。海綿を食べる。', '日本の磯や浅い海の岩の下。', 'ウミウシは貝の仲間だが、殻がない。')
    ], '色鮮やかなウミウシの属。'));
  X.def('Hexabranchidae', 'ミカドウミウシ科', '大型のウミウシの仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Nudibranchia', 'Hexabranchidae'],
    G('ミカドウミウシ属', 'Hexabranchus', [
      S('ミカドウミウシ', 'Hexabranchus sanguineus', '🐌', '赤い大型のウミウシ', 'ウミウシの中でも大きい。赤とオレンジに白い縁どりがある。泳ぐときにひらひらと体を波うたせる。', 'インド洋・西太平洋の、あたたかいサンゴ礁の海。', '泳ぐ様子が踊っているようで、英語では「スペインの踊り子」に例えられる。')
    ], '大型で赤い、ひらひらと泳ぐウミウシの属。'));

  X.def('Pteropoda', '翼足目', '翼のような足で泳ぐ、貝殻のない巻き貝のグループ。', 'よくそくもく');
  X.def('Clionidae', 'ハダカカメガイ科', '流氷の天使「クリオネ」の仲間。', null);
  X.add([A, 'Mollusca', 'Gastropoda', 'Pteropoda', 'Clionidae'],
    G('クリオネ属', 'Clione', [
      S('クリオネ', 'Clione limacina', '👼', '「流氷の天使」', '体は透明で、頭の近くの2枚の翼のようなものを動かして泳ぐ。貝殻のない巻き貝の仲間。', '北の冷たい海。日本ではオホーツク海などで見られる。', '正式な和名は「ハダカカメガイ」。主なえさは「ミジンウキマイマイ」という小さな貝。')
    ], '翼のような足で泳ぐ「流氷の天使」の属。'));

  // --- ヒザラガイ ---
  X.def('Polyplacophora', 'ヒザラガイ綱', '背中に8枚の殻の板をもつ貝の仲間。', 'ひざらがいこう');
  X.def('Chitonida', 'ヒザラガイ目', 'ヒザラガイの仲間。', null);
  X.def('Chitonidae', 'ヒザラガイ科', '岩にぴったりはりつく、板状の殻の貝の仲間。', null);
  X.add([A, 'Mollusca', 'Polyplacophora', 'Chitonida', 'Chitonidae'],
    G('ヒザラガイ属', 'Liolophura', [
      S('ヒザラガイ', 'Liolophura japonica', '🐚', '背中に8枚の殻', '背中に8枚の板が並んだ殻をもつ。岩にぴったりくっついて、岩の表面の藻をけずって食べる。', '日本の海岸の岩礁。', '丸まって身を守ることができる。')
    ], '背中に8枚の殻をもつ貝の属。'));

  // --- 頭足綱（イカ・タコ） ---
  X.def('Cephalopoda', '頭足綱', 'イカやタコ、オウムガイなど。', 'とうそくこう');
  X.add([A, 'Mollusca', 'Cephalopoda', 'Octopoda', 'Octopodidae'],
    G('マダコ属', 'Octopus', [
      S('マダコ', 'Octopus sinensis', '🐙', '日本人になじみ深いタコ', '8本のうでに吸盤が並ぶ。かしこく、岩の間にかくれたり、貝を割ったりする。', '日本をはじめ東アジアの沿岸の岩場。', '心臓が3つあり、血は青い。学名は以前 Octopus vulgaris とされていた。'),
      S('テナガダコ', 'Octopus minor', '🐙', 'うでが長い小型のタコ', 'うでが細長いタコ。干潟や砂の海底にすむ。', '日本の内湾や干潟、東アジアの沿岸。', '釣りやタコつぼ漁で獲られる。')
    ], '日本でも一番身近なタコ「マダコ」の属。'));
  X.add([A, 'Mollusca', 'Cephalopoda', 'Octopoda', 'Octopodidae'],
    G('イイダコ属', 'Amphioctopus', [
      S('イイダコ', 'Amphioctopus fangsiao', '🐙', 'ごはん粒みたいな卵', '小型のタコで、春になると卵の塊がごはん粒に似ているのが名前の由来といわれる。', '日本の内湾の砂泥底。', 'おでんや煮物にして食べられる。')
    ], '小型のタコの仲間の属。'));
  X.add([A, 'Mollusca', 'Cephalopoda', 'Octopoda', 'Octopodidae'],
    G('ヒョウモンダコ属', 'Hapalochlaena', [
      S('ヒョウモンダコ', 'Hapalochlaena fasciata', '🐙', '青い輪をもつ毒ダコ', '小型のタコ。おこると青い輪の模様が浮かぶ。唾液に強い毒をもつ。', '日本の本州以南の、あたたかい海の岩礁。', 'かまれると命にかかわることがあるので、見つけてもさわらないこと。')
    ], '青い輪の模様と毒をもつ小型のタコの属。'));
  X.def('Opisthoteuthidae', 'メンダコ科', '平たい体の深海のタコの仲間。', null);
  X.add([A, 'Mollusca', 'Cephalopoda', 'Octopoda', 'Opisthoteuthidae'],
    G('メンダコ属', 'Opisthoteuthis', [
      S('メンダコ', 'Opisthoteuthis depressa', '🐙', '耳があるように見える深海のタコ', '体が平たく、ひれが耳のように見える。深い海の底にすむ。', '日本近海の、水深の深い海底。', '水族館でも飼育がむずかしいとされる、人気の深海生物。')
    ], '平たい体の深海のタコの属。'));

  X.def('Idiosepida', 'ヒメイカ目', '小さなイカ、ヒメイカの仲間。', null);
  X.def('Idiosepiidae', 'ヒメイカ科', 'ごく小さなイカの仲間。', null);
  X.add([A, 'Mollusca', 'Cephalopoda', 'Idiosepida', 'Idiosepiidae'],
    G('ヒメイカ属', 'Idiosepius', [
      S('ヒメイカ', 'Idiosepius paradoxus', '🦑', '指先サイズのイカ', 'とても小さなイカで、アマモなどの海草にくっついて暮らす。', '日本の浅い海の海草のある場所。', '水槽でも飼えて、その愛らしい姿が人気。')
    ], '体長数cmのとても小さなイカの属。'));

  X.def('Sepiida', 'コウイカ目', 'コウイカやミミイカなど、体の中に甲をもつイカの仲間。', null);
  X.def('Sepiolidae', 'ダンゴイカ科', '小さくて丸みのあるイカの仲間。', null);
  X.def('Teuthida', 'ツツイカ目', '細長い胴をもつ、スルメイカなどの仲間。', null);
  X.def('Loliginidae', 'ジンドウイカ科', '沿岸にすむ、ヤリイカやアオリイカの仲間。', null);
  X.def('Enoploteuthidae', 'ホタルイカモドキ科', '発光器をもつイカの仲間。', null);
  X.def('Architeuthidae', 'ダイオウイカ科', '巨大なダイオウイカの仲間。', null);
  X.def('Ommastrephidae', 'アカイカ科', 'スルメイカやアカイカなど、外洋にすむイカの仲間。', null);
  X.add([A, 'Mollusca', 'Cephalopoda', 'Sepiida', 'Sepiolidae'],
    G('ミミイカ属', 'Euprymna', [
      S('ミミイカ', 'Euprymna morsei', '🦑', '耳のようなひれのイカ', '小さなイカで、胴の両脇にあるひれが耳のように見える。昼は砂にもぐる。', '日本の沿岸の砂泥底。', 'ひれを動かして、ふわふわと泳ぐ。')
    ], '耳のようなひれがある小さなイカの属。'));

  // ツツイカ目（既存）
  X.add([A, 'Mollusca', 'Cephalopoda', 'Teuthida', 'Loliginidae'],
    G('ヤリイカ属', 'Heterololigo', [
      S('ヤリイカ', 'Heterololigo bleekeri', '🦑', '槍の穂先のようなイカ', '胴がほっそりして先がとがる。冬から春に産卵のため沿岸に近づく。', '日本の沿岸から沖合の海。', '細い槍に似た形が名前の由来。刺身や天ぷらに使われる。')
    ], '細長い槍の穂先のような形をしたイカの属。'));
  X.add([A, 'Mollusca', 'Cephalopoda', 'Teuthida', 'Loliginidae'],
    G('アオリイカ属', 'Sepioteuthis', [
      S('アオリイカ', 'Sepioteuthis lessoniana', '🦑', '釣り人に人気のイカ', '胴のまわりをふちどるように大きなひれがある。', '日本の沿岸やインド洋・西太平洋の暖かい海。', '甘みの強い身が人気で、釣りの対象としても有名。')
    ], 'ひれが胴のまわりについたイカの属。'));
  X.add([A, 'Mollusca', 'Cephalopoda', 'Teuthida', 'Enoploteuthidae'],
    G('ホタルイカ属', 'Watasenia', [
      S('ホタルイカ', 'Watasenia scintillans', '✨', '青く光る富山湾の春の味', '体のあちこちに発光器があり、青く光る。', '日本の太平洋側や日本海の深い海。富山湾が有名。', '富山湾の「ほたるいか群遊海面」は国の特別天然記念物。')
    ], '体が光る小さなイカ「ホタルイカ」の属。'));
  X.add([A, 'Mollusca', 'Cephalopoda', 'Teuthida', 'Architeuthidae'],
    G('ダイオウイカ属', 'Architeuthis', [
      S('ダイオウイカ', 'Architeuthis dux', '🦑', '深海の巨大イカ', '全長10m以上になることもある巨大なイカ。深い海にすみ、長い2本の触腕をもつ。', '世界の深海。日本近海でも生きた姿が確認されている。', '日本の研究チームが、2012年に深海で生きた姿の撮影に成功した。')
    ], '深海にすむ巨大なイカの属。'));
  X.add([A, 'Mollusca', 'Cephalopoda', 'Teuthida', 'Ommastrephidae'],
    G('アカイカ属', 'Ommastrephes', [
      S('アカイカ', 'Ommastrephes bartramii', '🦑', '外洋にすむ大きなイカ', 'スルメイカと同じ仲間の大型のイカ。広い外洋を群れで泳ぐ。', '北太平洋などの外洋。', '身は食用として、さまざまな加工品に使われる。')
    ], '外洋にすむ大型のイカの属。'));
  X.add([A, 'Mollusca', 'Cephalopoda', 'Teuthida', 'Ommastrephidae'],
    G('アメリカオオアカイカ属', 'Dosidicus', [
      S('アメリカオオアカイカ', 'Dosidicus gigas', '🦑', '南米の大型イカ', '大型で、成長が早く、大きな群れをつくる。「フンボルトイカ」とも呼ばれる。', '東部太平洋の、ペルーやチリ沖など。', '世界で最も多く獲られるイカの一種。')
    ], '大きな群れをつくる大型のイカの属。'));

  X.def('Vampyromorpha', 'コウモリダコ目', 'コウモリダコ一種だけの、深海の頭足類のグループ。', null);
  X.def('Vampyroteuthidae', 'コウモリダコ科', 'コウモリダコの仲間。', null);
  X.add([A, 'Mollusca', 'Cephalopoda', 'Vampyromorpha', 'Vampyroteuthidae'],
    G('コウモリダコ属', 'Vampyroteuthis', [
      S('コウモリダコ', 'Vampyroteuthis infernalis', '🦇', '深海の「吸血イカ」', '黒っぽい体に水かきのついた8本のうで。タコでもイカでもない、独特の仲間。', '世界の温帯〜熱帯の深海。', '敵をおどかすと、墨ではなく光る粘液を出すといわれる。')
    ], '深海にすむ、タコともイカとも違う頭足類の属。'));

  X.add([A, 'Mollusca', 'Cephalopoda', 'Nautilida', 'Nautilidae'],
    G('オウムガイ属', 'Nautilus', [
      S('ヒメオウムガイ', 'Nautilus macromphalus', '🐚', '小さなオウムガイ', 'オウムガイより小型で、殻は渦巻き状。南太平洋の深い海にすむ。', 'ニューカレドニア周辺の海。', 'オウムガイと同じ属で、生きた化石と呼ばれる仲間。')
    ]));

  // --- 二枚貝綱 ---
  X.def('Bivalvia', '二枚貝綱', '2枚の殻をもつ貝。', 'にまいがいこう');
  X.add([A, 'Mollusca', 'Bivalvia', 'Venerida', 'Veneridae'],
    G('ハマグリ属', 'Meretrix', [
      S('ハマグリ', 'Meretrix lusoria', '🐚', 'ひな祭りの縁起物', '殻はなめらかで、模様がさまざま。内湾の砂や泥の干潟にすむ。', '日本の内湾の砂泥底。', '貝合わせという遊びがあるように、ほかの貝殻とは合わない。'),
      S('チョウセンハマグリ', 'Meretrix lamarckii', '🐚', '大きくて丸いハマグリ', 'ハマグリより大きく、殻に丸みがある。外洋に面した砂浜にすむ。', '日本の本州太平洋側などの砂浜。', '白い碁石の材料にも使われた。'),
      S('シナハマグリ', 'Meretrix petechialis', '🐚', '輸入もされるハマグリ', 'ハマグリに似ているが、殻の形や模様がちがう。', '中国や朝鮮半島の沿岸。日本にも輸入されている。', '日本で食べる「ハマグリ」には、この種の仲間も含まれる。')
    ], '食用の「ハマグリ」の属。'));
  X.def('Mactridae', 'バカガイ科', 'バカガイやミルクイなど、水管が長めの二枚貝の仲間。', null);
  X.add([A, 'Mollusca', 'Bivalvia', 'Venerida', 'Mactridae'],
    G('バカガイ属', 'Mactra', [
      S('バカガイ', 'Mactra chinensis', '🐚', '寿司のアオヤギ', '殻は薄めで、三角形に近い。むき身は「アオヤギ」として売られる。', '日本の内湾の砂浜。', 'むき身は「アオヤギ」と呼ばれ、寿司ネタにされる。')
    ], '砂浜にすむ二枚貝の属。'));
  X.add([A, 'Mollusca', 'Bivalvia', 'Venerida', 'Mactridae'],
    G('ミルクイ属', 'Tresus', [
      S('ミルクイ', 'Tresus keenae', '🐚', '太い水管の高級貝', '大型で、長くて太い水管をもつ。砂にもぐり、水管を出して呼吸し、食事をする。', '日本の内湾の砂泥底。', '水管は寿司ネタとして、高級な食材として知られる。')
    ], '大きな水管をもつ二枚貝の属。'));
  X.def('Cyrenidae', 'シジミ科', '淡水や河口にすむシジミの仲間。', null);
  X.add([A, 'Mollusca', 'Bivalvia', 'Venerida', 'Cyrenidae'],
    G('シジミ属', 'Corbicula', [
      S('ヤマトシジミ（貝）', 'Corbicula japonica', '🐚', 'みそ汁のシジミ', '川の河口の、塩分がうすい水にすむ。黒っぽい殻をもつ。', '日本の汽水域（川と海がまじる場所）。', '島根県の宍道湖は産地として有名。', 'やまとしじみ'),
      S('マシジミ', 'Corbicula leana', '🐚', '川にすむシジミ', '淡水にすむシジミ。川の砂や泥の中にいる。', '日本の川や水路。', '外来のシジミの影響で数が減っているとされる。'),
      S('セタシジミ', 'Corbicula sandai', '🐚', '琵琶湖だけのシジミ', '琵琶湖とその周辺にだけすむ、大きめのシジミ。', '滋賀県の琵琶湖と淀川水系。', '日本のシジミの中でも、特に大きくなる。')
    ], '汁ものでおなじみの「シジミ」の属。'));
  X.def('Adapedonta', 'アダペドンタ目', 'マテガイなどを含む二枚貝のグループ。', null);
  X.def('Solenidae', 'マテガイ科', '細長い殻をもつ二枚貝。', null);
  X.add([A, 'Mollusca', 'Bivalvia', 'Adapedonta', 'Solenidae'],
    G('マテガイ属', 'Solen', [
      S('マテガイ', 'Solen strictus', '🐚', '塩をかけると出てくる', '細長い筒のような形の二枚貝。干潟の砂に深く穴をほって暮らす。', '日本の内湾の砂浜や干潟。', '穴に塩をふると、貝が顔を出すので、潮干狩りで人気。')
    ], '細長い筒状の二枚貝の属。'));

  X.def('Ostreida', 'カキ目', 'カキや真珠貝などを含む二枚貝のグループ。', null);
  X.def('Ostreidae', 'イタボガキ科', 'カキの仲間。', null);
  X.add([A, 'Mollusca', 'Bivalvia', 'Ostreida', 'Ostreidae'],
    G('マガキ属', 'Magallana', [
      S('マガキ', 'Magallana gigas', '🦪', '冬の「海のミルク」', '殻がでこぼこで、岩や他のカキにくっつく。海水をこして食べる。', '日本の内湾や河口の岩場。', '広島や宮城は産地として有名。冬が旬。'),
      S('イワガキ', 'Magallana nippona', '🦪', '夏が旬の大きなカキ', 'マガキより大きく育つカキ。夏に産卵前でおいしくなる。', '日本の岩礁の海。日本海側が有名。', '夏のカキとして人気がある。')
    ], '食用の「カキ」の属。'));
  X.def('Margaritidae', 'アコヤガイ科', '真珠をつくる貝の仲間。', null);
  X.add([A, 'Mollusca', 'Bivalvia', 'Ostreida', 'Margaritidae'],
    G('アコヤガイ属', 'Pinctada', [
      S('アコヤガイ', 'Pinctada fucata', '🦪', '真珠をつくる貝', '殻の内側が真珠層でおおわれている。中に異物が入ると、その周りに真珠層をつくって真珠になる。', '日本の暖かい海。養殖も盛ん。', '明治時代に、日本で真珠の養殖が成功した。')
    ], '真珠をつくる貝の属。'));
  X.def('Pinnidae', 'ハボウキガイ科', '大型で三角形の二枚貝。', null);
  X.add([A, 'Mollusca', 'Bivalvia', 'Ostreida', 'Pinnidae'],
    G('タイラギ属', 'Atrina', [
      S('タイラギ', 'Atrina pectinata', '🐚', '大きな貝柱の二枚貝', '三角形で大型の二枚貝。海底に先を突きさして暮らす。', '日本の内湾の砂泥底。', '貝柱が大きく、寿司ネタとして人気。有明海などで知られる。')
    ], '大型で三角形の二枚貝の属。'));

  X.add([A, 'Mollusca', 'Bivalvia', 'Pectinida', 'Pectinidae'],
    G('イタヤガイ属', 'Pecten', [
      S('イタヤガイ', 'Pecten albicans', '🐚', '扇形の美しい貝殻', '扇形の殻をもち、片側がふくらみ、もう片側は平たい。', '日本の内湾から沖合の砂地。', '貝殻の形は、ホタテガイとよく似ている。')
    ], '扇形の殻をもつ貝の属。'));
  X.add([A, 'Mollusca', 'Bivalvia', 'Pectinida', 'Pectinidae'],
    G('ヒオウギガイ属', 'Mimachlamys', [
      S('ヒオウギガイ', 'Mimachlamys crassicostata', '🐚', '色とりどりの扇', '赤、オレンジ、紫など、鮮やかな色の殻をもつ。', '日本の本州中部から南の海。', '貝殻が美しく、飾りなどにも使われる。')
    ], '色鮮やかな殻のイタヤガイ科の貝の属。'));
  X.add([A, 'Mollusca', 'Bivalvia', 'Pectinida', 'Pectinidae'],
    G('ツキヒガイ属', 'Ylistrum', [
      S('ツキヒガイ', 'Ylistrum japonicum', '🐚', '片面が赤、片面が白', '丸く平たい殻で、片側は赤っぽく、反対側は白い。', '日本の本州中部から南の砂地。', '「月と日」にたとえた名前とされる。')
    ], '丸く平たい殻をもつホタテの仲間の属。'));

  X.add([A, 'Mollusca', 'Bivalvia', 'Mytilida', 'Mytilidae'],
    G('イガイ属', 'Mytilus', [
      S('イガイ', 'Mytilus unguiculatus', '🐚', 'ムール貝の仲間', 'ムラサキイガイに近い貝で、岩にくっつく。黒っぽい殻の二枚貝。', '日本の岩礁。', 'ムラサキイガイと同じ属の、日本の在来種。')
    ]));
  X.add([A, 'Mollusca', 'Bivalvia', 'Mytilida', 'Mytilidae'],
    G('ミドリイガイ属', 'Perna', [
      S('ミドリイガイ', 'Perna viridis', '🐚', '緑色のイガイ', '緑色の殻をもつ、大きなイガイ。岩や桟橋などにつく。', '熱帯〜亜熱帯の海。日本では外来種として定着。', '東南アジアなどでは食用にされる。')
    ], '緑色の殻をもつ大きなイガイの属。'));

  X.def('Unionida', 'イシガイ目', '淡水にすむ、イシガイやカワシンジュガイの仲間。', null);
  X.def('Margaritiferidae', 'カワシンジュガイ科', '川にすむ、真珠をつくる二枚貝の仲間。', null);
  X.add([A, 'Mollusca', 'Bivalvia', 'Unionida', 'Margaritiferidae'],
    G('カワシンジュガイ属', 'Margaritifera', [
      S('カワシンジュガイ', 'Margaritifera laevis', '🐚', '冷たい川の貝', '黒っぽい殻をもつ、淡水の二枚貝。幼生はサケやマスの仲間のえらに寄生して育つ。', '日本の北海道や東北などの冷たい清流。', '長生きで知られ、数が減っているとされる。')
    ], '川にすむ長寿の二枚貝の属。'));
  X.def('Unionidae', 'イシガイ科', '淡水にすむ大型の二枚貝の仲間。', null);
  X.add([A, 'Mollusca', 'Bivalvia', 'Unionida', 'Unionidae'],
    G('イシガイ属', 'Nodularia', [
      S('イシガイ', 'Nodularia douglasiae', '🐚', 'タナゴの産卵場所', '淡水にすむ二枚貝。幼生は魚のえらやひれに付いて育つ。', '日本の川、池、用水路。', 'タナゴという魚が、この貝の中に卵を産みつける。')
    ], '淡水の二枚貝の属。'));
  X.add([A, 'Mollusca', 'Bivalvia', 'Unionida', 'Unionidae'],
    G('ドブガイ属', 'Sinanodonta', [
      S('ドブガイ', 'Sinanodonta woodiana', '🐚', '大きな淡水の貝', '大型の淡水の二枚貝。池や沼の泥にもぐって暮らす。', '日本の池や沼、湖。', 'タナゴの仲間が、ドブガイの中に卵を産むことがある。')
    ], '大型の淡水の二枚貝の属。'));

  X.def('Arcida', 'フネガイ目', 'アカガイ、サルボウなどの二枚貝のグループ。', null);
  X.def('Arcidae', 'フネガイ科', 'アカガイなど、赤い血をもつ二枚貝の仲間。', null);
  X.add([A, 'Mollusca', 'Bivalvia', 'Arcida', 'Arcidae'],
    G('サルボウ属', 'Anadara', [
      S('アカガイ', 'Anadara broughtonii', '🐚', '赤い血をもつ貝', '大型の二枚貝で、体の中に赤い血がある。放射状のすじが入った殻をもつ。', '日本の内湾の泥底。', '血が赤いのは、人間と同じように酸素を運ぶ色素をもっているから。'),
      S('サルボウ', 'Anadara kagoshimensis', '🐚', '有明海の赤い貝', '赤い血をもつ二枚貝で、アカガイより小型。', '日本の内湾の砂泥底。', '有明海でとれる貝として知られる。')
    ], '赤い血をもつ二枚貝の属。'));

  /* ===================== 棘皮動物門 ===================== */
  X.def('Echinodermata', '棘皮動物門', 'ヒトデ、ウニ、ナマコなど、五放射相称の動物。', 'きょくひどうぶつもん');
  X.def('Asteroidea', 'ヒトデ綱', 'ヒトデの仲間。', null);
  X.def('Forcipulatida', 'マヒトデ目', 'マヒトデなど、うでが長いヒトデの仲間。', null);
  X.def('Asteriidae', 'マヒトデ科', 'マヒトデの仲間。', null);
  X.add([A, 'Echinodermata', 'Asteroidea', 'Forcipulatida', 'Asteriidae'],
    G('ヤツデヒトデ属', 'Coscinasterias', [
      S('ヤツデヒトデ', 'Coscinasterias acutispina', '⭐', '腕がたくさんのヒトデ', '6〜8本ほどの腕をもつヒトデ。からだが2つに分かれて増えることができる。', '日本の岩礁や潮だまり。', '分裂して増える。')
    ], '腕の数が多めのヒトデの属。'));
  X.def('Valvatida', 'ルリヒトデ目', 'イトマキヒトデやオニヒトデを含むヒトデのグループ。', null);
  X.def('Asterinidae', 'イトマキヒトデ科', '小さめで平たいヒトデの仲間。', null);
  X.add([A, 'Echinodermata', 'Asteroidea', 'Valvatida', 'Asterinidae'],
    G('イトマキヒトデ属', 'Patiria', [
      S('イトマキヒトデ', 'Patiria pectinifera', '⭐', '磯の定番ヒトデ', '腕が短めで、全体が五角形に近い。青と赤っぽい模様がある。', '日本の岩礁の潮だまり。', '岩場で、いちばん見つけやすいヒトデのひとつ。')
    ], '日本の磯でおなじみのヒトデの属。'));
  X.def('Acanthasteridae', 'オニヒトデ科', 'トゲだらけのオニヒトデの仲間。', null);
  X.add([A, 'Echinodermata', 'Asteroidea', 'Valvatida', 'Acanthasteridae'],
    G('オニヒトデ属', 'Acanthaster', [
      S('オニヒトデ', 'Acanthaster planci', '⭐', 'サンゴを食べるトゲトゲ', 'たくさんの腕と毒のあるトゲをもつ大きなヒトデ。サンゴを食べる。', 'インド洋・西太平洋のサンゴ礁。', '大量発生すると、サンゴ礁がひどく減ってしまう。')
    ], 'サンゴを食べる大型のヒトデの属。'));
  X.def('Paxillosida', 'モミジガイ目', '砂にもぐるヒトデの仲間。', null);
  X.def('Astropectinidae', 'モミジガイ科', '砂の中にもぐって暮らすヒトデ。', null);
  X.add([A, 'Echinodermata', 'Asteroidea', 'Paxillosida', 'Astropectinidae'],
    G('モミジガイ属', 'Astropecten', [
      S('モミジガイ', 'Astropecten scoparius', '⭐', '紅葉みたいなヒトデ', '腕の縁に並ぶトゲが目立つヒトデ。砂の中にもぐり、小さな貝などを食べる。', '日本の砂地の海底。', '形がモミジの葉のように見えるのが名前の由来。')
    ], '砂にもぐる、細い腕をもつヒトデの属。'));

  X.add([A, 'Echinodermata', 'Echinoidea', 'Camarodonta', 'Echinometridae'],
    G('ナガウニ属', 'Echinometra', [
      S('ナガウニ', 'Echinometra mathaei', '🦔', '岩に穴をあけてすむウニ', '黒っぽい色をしたウニで、岩やサンゴに穴をほって、その中に入っている。', 'インド洋・西太平洋のサンゴ礁。', '穴の中が居心地がよいのか、ずっとそこにいる。')
    ]));
  X.def('Strongylocentrotidae', 'バフンウニ科', 'バフンウニやキタムラサキウニなど、食用のウニの仲間。', null);
  X.add([A, 'Echinodermata', 'Echinoidea', 'Camarodonta', 'Strongylocentrotidae'],
    G('バフンウニ属', 'Hemicentrotus', [
      S('バフンウニ', 'Hemicentrotus pulcherrimus', '🦔', '小さくておいしいウニ', '殻の大きさは5cmほどの、トゲの短いウニ。藻類を食べる。', '日本の岩礁の海。', 'ウニの食べる部分は生殖巣（卵や精子をつくる部分）。')
    ], 'トゲの短い食用ウニの属。'));
  X.add([A, 'Echinodermata', 'Echinoidea', 'Camarodonta', 'Strongylocentrotidae'],
    G('キタムラサキウニ属', 'Mesocentrotus', [
      S('キタムラサキウニ', 'Mesocentrotus nudus', '🦔', '北の海の大きなウニ', 'ムラサキウニより北にすみ、昆布などの海藻をよく食べる。', '日本の北海道・東北の海。', '北海道のウニのひとつで、昆布を食べて育つ。')
    ], '北の海にすむ大きなウニの属。'));
  X.add([A, 'Echinodermata', 'Echinoidea', 'Camarodonta', 'Strongylocentrotidae'],
    G('エゾバフンウニ属', 'Strongylocentrotus', [
      S('エゾバフンウニ', 'Strongylocentrotus intermedius', '🦔', '北海道の赤いウニ', '殻は小さく、トゲが短い。身は赤みがかっていてあまい。', '北海道やロシア極東などの冷たい海。', '北海道の名産のひとつ。')
    ], '北の冷たい海にすむ小型のウニの属。'));
  X.add([A, 'Echinodermata', 'Echinoidea', 'Camarodonta', 'Strongylocentrotidae'],
    G('アカウニ属', 'Pseudocentrotus', [
      S('アカウニ', 'Pseudocentrotus depressus', '🦔', '九州のあまいウニ', '赤みがかった色のウニ。平たい殻で、トゲは長めで先がとがっている。', '日本の本州中部から九州などの暖かい海。', '養殖や放流も行われている。')
    ], '赤みがかった色の食用ウニの属。'));

  X.def('Toxopneustidae', 'ラッパウニ科', 'シラヒゲウニなどの仲間。', null);
  X.add([A, 'Echinodermata', 'Echinoidea', 'Camarodonta', 'Toxopneustidae'],
    G('シラヒゲウニ属', 'Tripneustes', [
      S('シラヒゲウニ', 'Tripneustes gratilla', '🦔', '沖縄のウニ', '白っぽいトゲが短いウニ。海藻や海草を食べる。', '南西諸島などの、あたたかい海の浅い所。', '沖縄では食用にされる。')
    ], '白い短いトゲをもつウニの属。'));
  X.add([A, 'Echinodermata', 'Echinoidea', 'Camarodonta', 'Toxopneustidae'],
    G('ラッパウニ属', 'Toxopneustes', [
      S('ラッパウニ', 'Toxopneustes pileolus', '🦔', '毒のある花のようなウニ', '花のように見える「叉棘（さきょく）」をもつウニ。この叉棘に毒がある。', 'インド洋・西太平洋の、あたたかい浅い海。', 'さわると痛みや麻痺が出ることがあるので、見つけても触らないこと。', null)
    ], '毒のある叉棘（さきょく）をもつウニの属。'));

  X.def('Diadematoida', 'ガンガゼ目', '長くて細いトゲをもつウニのグループ。', null);
  X.def('Diadematidae', 'ガンガゼ科', 'ガンガゼなど、長いトゲをもつウニの仲間。', null);
  X.add([A, 'Echinodermata', 'Echinoidea', 'Diadematoida', 'Diadematidae'],
    G('ガンガゼ属', 'Diadema', [
      S('ガンガゼ', 'Diadema setosum', '🦔', '長い黒トゲのウニ', '細くて長い黒いトゲをもつウニ。トゲが刺さると痛い。', 'インド洋・西太平洋の岩礁やサンゴ礁。', '夜に動き、日中は岩のかげにかくれていることが多い。')
    ], '長いトゲのウニの属。'));
  X.def('Clypeasteroida', 'カシパン目', '平たいウニ、カシパンの仲間。', null);
  X.def('Clypeasteridae', 'タコノマクラ科', 'タコノマクラなど、平たい砂地のウニの仲間。', null);
  X.add([A, 'Echinodermata', 'Echinoidea', 'Clypeasteroida', 'Clypeasteridae'],
    G('タコノマクラ属', 'Clypeaster', [
      S('タコノマクラ', 'Clypeaster japonicus', '🦔', '平たい砂地のウニ', '平たく、短いトゲがびっしり生えている。砂の上や砂の中で暮らす。', '日本の砂地の海底。', '死んで残った殻（かく）が、花のような模様になっている。')
    ], '平たい形をした砂地のウニの属。'));

  X.def('Holothuroidea', 'ナマコ綱', 'ナマコの仲間。', 'なまここう');
  X.def('Synallactida', 'シカクナマコ目', 'マナマコなどを含むナマコのグループ。', null);
  X.def('Stichopodidae', 'シカクナマコ科', 'マナマコなどの仲間。', null);
  X.add([A, 'Echinodermata', 'Holothuroidea', 'Synallactida', 'Stichopodidae'],
    G('マナマコ属', 'Apostichopus', [
      S('マナマコ', 'Apostichopus japonicus', '🥒', '食べられる日本のナマコ', '体はやわらかく、青っぽいものと赤っぽいものなどがいる。海底で、砂の中の栄養を食べる。', '日本の浅い海の岩場や砂泥底。', '敵におそわれると、内臓を出して逃げることがあるが、また生えてくる。')
    ], '日本で食べられるナマコの属。'));
  X.def('Holothuriida', 'クロナマコ目', 'クロナマコなどのナマコのグループ。', null);
  X.def('Holothuriidae', 'クロナマコ科', 'サンゴ礁などにすむ、いろいろなナマコの仲間。', null);
  X.add([A, 'Echinodermata', 'Holothuroidea', 'Holothuriida', 'Holothuriidae'],
    G('クロナマコ属', 'Holothuria', [
      S('クロナマコ', 'Holothuria atra', '🥒', 'サンゴ礁の黒いナマコ', '真っ黒で長いナマコ。体に砂がつき、サンゴ礁の砂の上にいる。', '南西諸島などのサンゴ礁の海。', '砂の中の有機物を食べて、海底をそうじしている。')
    ], '黒っぽい体のナマコの属。'));
  X.add([A, 'Echinodermata', 'Holothuroidea', 'Holothuriida', 'Holothuriidae'],
    G('ジャノメナマコ属', 'Bohadschia', [
      S('ジャノメナマコ', 'Bohadschia argus', '🥒', '目玉もようのナマコ', '背中に大きな目玉のような模様がある。', 'インド洋・西太平洋のサンゴ礁。', '敵におそわれると、ねばねばの白い糸のようなものを出すことがある。')
    ], '背中に目玉模様のあるナマコの属。'));

  X.def('Crinoidea', 'ウミユリ綱', 'ウミユリ、ウミシダの仲間。', null);
  X.def('Isocrinida', 'ウミユリ目', 'ウミユリの仲間。', null);
  X.def('Isselicrinidae', 'ウミユリ科', 'ウミユリの仲間。', null);
  X.add([A, 'Echinodermata', 'Crinoidea', 'Isocrinida', 'Isselicrinidae'],
    G('ウミユリ属', 'Metacrinus', [
      S('トリノアシ', 'Metacrinus rotundus', '🌿', '深海に咲く花のような動物', '長い柄の先に、たくさんの腕を広げたウミユリの仲間。深海の岩に根をはる。', '日本の相模湾や紀伊半島沖などの深い海。', '植物のように見えるが、ヒトデやウニの仲間の動物。')
    ], '柄をもち、深海に生えるウミユリの属。'));
  X.def('Comatulida', 'ウミシダ目', 'ウミシダの仲間。', null);
  X.def('Comatulidae', 'ウミシダ科', 'ウミシダの仲間。', null);
  X.add([A, 'Echinodermata', 'Crinoidea', 'Comatulida', 'Comatulidae'],
    G('ウミシダ属', 'Anneissia', [
      S('ウミシダ', 'Anneissia japonica', '🌿', '羽根のような腕で泳ぐ', '細かい枝のついた腕を10本もつ。腕を動かして、泳ぐこともできる。', '日本の岩礁の海。', '植物の「シダ」に似て見えるが、ウニやヒトデの仲間。')
    ], '羽根のような腕で泳ぐウミユリ類の属。'));

  X.def('Ophiuroidea', 'クモヒトデ綱', 'クモヒトデやテヅルモヅルの仲間。', null);
  X.def('Euryalida', 'テヅルモヅル目', 'テヅルモヅルなどのクモヒトデ。', null);
  X.def('Gorgonocephalidae', 'テヅルモヅル科', '腕が枝分かれするクモヒトデの仲間。', null);
  X.add([A, 'Echinodermata', 'Ophiuroidea', 'Euryalida', 'Gorgonocephalidae'],
    G('テヅルモヅル属', 'Gorgonocephalus', [
      S('テヅルモヅル', 'Gorgonocephalus eucnemis', '🕸', '腕が枝分かれするクモヒトデ', '5本の腕が何度も枝分かれして、複雑な形になる。海流の中で腕を広げてえさを捕る。', '北太平洋などの冷たい海。', 'ヒトデの仲間だが、見た目は網のようで、ふしぎな形。')
    ], '腕が何度も枝分かれするクモヒトデの属。'));

  /* ===================== 刺胞動物門 ===================== */
  X.def('Cnidaria', '刺胞動物門', 'クラゲ、イソギンチャク、サンゴなど。', 'しほうどうぶつもん');
  X.def('Scyphozoa', '鉢クラゲ綱', 'ミズクラゲなど、大型のクラゲの仲間。', 'はちくらげこう');
  X.def('Semaeostomeae', '旗口クラゲ目', 'ミズクラゲやアカクラゲなどの仲間。', 'きこうくらげもく');
  X.def('Pelagiidae', 'オキクラゲ科', 'アカクラゲなどの仲間。', null);
  X.add([A, 'Cnidaria', 'Scyphozoa', 'Semaeostomeae', 'Pelagiidae'],
    G('アカクラゲ属', 'Chrysaora', [
      S('アカクラゲ', 'Chrysaora pacifica', '🪼', '赤い縞のクラゲ', '傘に赤茶色の放射状の縞がある。長い触手に毒があり、刺されると痛い。', '日本の沿岸。特に初夏〜夏。', '海水浴の時期に見かけるが、触らないこと。')
    ], '傘に縞模様があるクラゲの属。'));
  X.def('Rhizostomeae', '根口クラゲ目', '口がたくさんの管に分かれたクラゲのグループ。', 'こんこうくらげもく');
  X.def('Rhizostomatidae', 'ビゼンクラゲ科', '大型のクラゲ、エチゼンクラゲやビゼンクラゲの仲間。', null);
  X.add([A, 'Cnidaria', 'Scyphozoa', 'Rhizostomeae', 'Rhizostomatidae'],
    G('エチゼンクラゲ属', 'Nemopilema', [
      S('エチゼンクラゲ', 'Nemopilema nomurai', '🪼', '巨大クラゲ', '傘の直径が1〜2mにもなる、巨大なクラゲ。大量発生すると、漁網を傷つける。', '東アジアの海。日本海でも見られる。', '大量発生するときは、漁業に大きな被害が出ることがある。')
    ], '傘が1mを超える巨大なクラゲの属。'));
  X.add([A, 'Cnidaria', 'Scyphozoa', 'Rhizostomeae', 'Rhizostomatidae'],
    G('ビゼンクラゲ属', 'Rhopilema', [
      S('ビゼンクラゲ', 'Rhopilema esculentum', '🪼', '食べられるクラゲ', '傘が丸くて大きな、ゼリー状のクラゲ。', '東アジアの沿岸、日本では有明海など。', '中華料理などで食べられるクラゲの代表。')
    ], '食用になるクラゲの属。'));
  X.def('Mastigiidae', 'タコクラゲ科', 'タコクラゲの仲間。', null);
  X.add([A, 'Cnidaria', 'Scyphozoa', 'Rhizostomeae', 'Mastigiidae'],
    G('タコクラゲ属', 'Mastigias', [
      S('タコクラゲ', 'Mastigias papua', '🪼', 'タコの足のような口腕', '傘の下に太い口腕が8本ある。体の中に共生する藻（もがい）の力を借りて栄養を得ている。', 'インド洋・西太平洋の、あたたかい海。', '刺す力が弱く、水族館でも人気。')
    ], 'タコの足のような口腕をもつクラゲの属。'));

  X.def('Cubozoa', '箱虫綱', '箱型の傘をもつ、毒の強いクラゲのグループ。', 'はこむしこう');
  X.def('Carybdeida', 'アンドンクラゲ目', '箱型のクラゲ。', null);
  X.def('Carybdeidae', 'アンドンクラゲ科', 'アンドンクラゲの仲間。', null);
  X.add([A, 'Cnidaria', 'Cubozoa', 'Carybdeida', 'Carybdeidae'],
    G('アンドンクラゲ属', 'Carybdea', [
      S('アンドンクラゲ', 'Carybdea brevipedalia', '🪼', '行灯みたいな箱型クラゲ', '傘が箱のような形で、4本の触手がある。夏の海水浴場に出ることがある。', '日本各地の沿岸。', '刺されると強い痛みがあり、「電気クラゲ」とも呼ばれる。')
    ], '箱型の傘をもつ毒クラゲの属。'));
  X.def('Chirodropida', 'ハブクラゲ目', '猛毒のハブクラゲなどの仲間。', null);
  X.def('Chirodropidae', 'ハブクラゲ科', 'ハブクラゲなどの仲間。', null);
  X.add([A, 'Cnidaria', 'Cubozoa', 'Chirodropida', 'Chirodropidae'],
    G('ハブクラゲ属', 'Chironex', [
      S('ハブクラゲ', 'Chironex yamaguchii', '🪼', '沖縄の強い毒をもつクラゲ', '傘が箱型で、長い触手をもつ。強い毒をもち、刺されると危険。', '沖縄などの南西諸島の沿岸。', '海水浴場では、ネットで守られた場所で泳ぐのが基本。')
    ], '強い毒をもつ箱型クラゲの属。'));

  X.def('Anthoathecata', '花クラゲ目', 'ベニクラゲやヒドラなどを含むヒドロ虫のグループ。', 'はなくらげもく');
  X.def('Oceaniidae', 'ベニクラゲ科', 'ベニクラゲなどの仲間。', null);
  X.add([A, 'Cnidaria', 'Hydrozoa', 'Anthoathecata', 'Oceaniidae'],
    G('ベニクラゲ属', 'Turritopsis', [
      S('ベニクラゲ', 'Turritopsis dohrnii', '🪼', '若返るクラゲ', '体長1cmほどの小さなクラゲ。成長した後も、条件によってはポリプという若い姿に戻ることができるとされる。', '世界の温帯〜熱帯の海。', '「不老不死のクラゲ」として知られる。', null)
    ], '若返ることができるといわれるクラゲの属。'));
  X.def('Hydridae', 'ヒドラ科', 'ヒドラの仲間。', null);
  X.add([A, 'Cnidaria', 'Hydrozoa', 'Anthoathecata', 'Hydridae'],
    G('ヒドラ属', 'Hydra', [
      S('ヒドラ', 'Hydra vulgaris', '🪱', '体の一部から増える淡水の生き物', '体は1cmほどの筒のようで、触手が数本ある。池や水路の水草にくっついている。', '世界の池や水路。日本でも見られる。', '体をばらばらにしても、再生する力が強い。')
    ], '体の一部から子を増やすことができる、淡水の小さな生き物の属。'));
  X.def('Porpitidae', 'ギンカクラゲ科', '海面を漂う、円盤や帆をもつヒドロ虫の仲間。', null);
  X.add([A, 'Cnidaria', 'Hydrozoa', 'Anthoathecata', 'Porpitidae'],
    G('ギンカクラゲ属', 'Porpita', [
      S('ギンカクラゲ', 'Porpita porpita', '🔵', '海に浮かぶ青い円盤', '青い丸い円盤のような体に、短い触手が縁にならぶ。海面を漂って暮らす。', '世界の暖かい外洋。', 'カツオノエボシと同じく海面で見られ、クラゲの仲間のように見える。')
    ], '海面に浮く円盤状の生き物の属。'));
  X.add([A, 'Cnidaria', 'Hydrozoa', 'Anthoathecata', 'Porpitidae'],
    G('カツオノカンムリ属', 'Velella', [
      S('カツオノカンムリ', 'Velella velella', '⛵', '帆をもつ海面の漂流者', '青い楕円形の体の上に、三角の帆のような突起がある。風に乗って海面を漂う。', '世界の外洋。日本でも海岸に打ち上がる。', '風で流され、大量に打ち上がることがある。')
    ], '帆を立てて海面を漂う生き物の属。'));
  X.def('Limnomedusae', 'リムノメデューサ目', '淡水にすむクラゲなどを含むヒドロ虫のグループ。', null);
  X.def('Olindiidae', 'ハナガサクラゲ科', 'ハナガサクラゲやマミズクラゲの仲間。', null);
  X.add([A, 'Cnidaria', 'Hydrozoa', 'Limnomedusae', 'Olindiidae'],
    G('ハナガサクラゲ属', 'Olindias', [
      S('ハナガサクラゲ', 'Olindias formosus', '🪼', '花笠のようなクラゲ', '傘のふちから細い触手が放射状に広がる、美しいクラゲ。', '日本の本州中部の太平洋側などの海。', '刺されると強い痛みがあるので、さわってはいけない。')
    ], '花の笠のような美しいクラゲの属。'));
  X.add([A, 'Cnidaria', 'Hydrozoa', 'Limnomedusae', 'Olindiidae'],
    G('マミズクラゲ属', 'Craspedacusta', [
      S('マミズクラゲ', 'Craspedacusta sowerbii', '🪼', '淡水にすむクラゲ', '直径2cmほどの小さなクラゲ。池や湖、ダムなどにあらわれることがある。', '世界の淡水域。日本の池や湖でも見られる。', '真水にすむ、めずらしいクラゲ。')
    ], '淡水にすむめずらしいクラゲの属。'));

  X.def('Stichodactylidae', 'ハタゴイソギンチャク科', 'クマノミが共生する大型のイソギンチャクの仲間。', null);
  X.add([A, 'Cnidaria', 'Anthozoa', 'Actiniaria', 'Stichodactylidae'],
    G('ハタゴイソギンチャク属', 'Stichodactyla', [
      S('ハタゴイソギンチャク', 'Stichodactyla gigantea', '🌸', 'クマノミが住む大型イソギンチャク', '大きく広がった触手を持ち、体内に共生する藻の力も借りて栄養を得る。クマノミの仲間と共生する。', 'インド洋・西太平洋のサンゴ礁。', 'クマノミは、イソギンチャクの毒に守られて暮らしている。')
    ], 'クマノミが共生する大型のイソギンチャクの属。'));
  X.add([A, 'Cnidaria', 'Anthozoa', 'Actiniaria', 'Actiniidae'],
    G('ヨロイイソギンチャク属', 'Anthopleura', [
      S('ヨロイイソギンチャク', 'Anthopleura japonica', '🌸', '磯のイソギンチャク', '体の表面に、いぼのような突起が並ぶ。磯の岩の割れ目などにすむ。', '日本の海岸の岩礁。', '潮が引くと触手を引っこめて、乾燥や敵から身を守る。')
    ], '磯の潮だまりなどにすむイソギンチャクの属。'));

  X.add([A, 'Cnidaria', 'Anthozoa', 'Scleractinia', 'Acroporidae'],
    G('ミドリイシ属', 'Acropora', [
      S('クシハダミドリイシ', 'Acropora hyacinthus', '🪸', 'テーブルみたいなサンゴ', '大きな平たい板のように広がるサンゴ。体の中にすむ共生藻で栄養を得る。', 'インド洋・西太平洋のサンゴ礁。', '魚たちが、テーブルサンゴの下をすみかにしている。')
    ]));
  X.def('Pocilloporidae', 'ハナヤサイサンゴ科', 'ハナヤサイサンゴなどの仲間。', null);
  X.add([A, 'Cnidaria', 'Anthozoa', 'Scleractinia', 'Pocilloporidae'],
    G('ハナヤサイサンゴ属', 'Pocillopora', [
      S('ハナヤサイサンゴ', 'Pocillopora damicornis', '🪸', 'カリフラワーみたいなサンゴ', '小さな枝がたくさん集まって、カリフラワーのような形になる。', 'インド洋・太平洋のサンゴ礁。', 'サンゴは動物で、体の中の藻から栄養をもらっている。')
    ], 'カリフラワーのような形のサンゴの属。'));
  X.def('Scleralcyonacea', 'スクレラルキオナケア目', 'アカサンゴなどを含む、八放サンゴのグループ。', null);
  X.def('Coralliidae', 'サンゴ科', '宝石サンゴの仲間。', null);
  X.add([A, 'Cnidaria', 'Anthozoa', 'Scleralcyonacea', 'Coralliidae'],
    G('サンゴ属', 'Corallium', [
      S('アカサンゴ', 'Corallium japonicum', '🪸', '宝石になる赤いサンゴ', '深い海の岩に根をはる、枝分かれした赤いサンゴ。成長がとてもおそい。', '日本の西部太平洋の深い海。', '磨いてアクセサリーにするため、宝石サンゴと呼ばれる。')
    ], '宝石になる赤いサンゴの属。'));

  /* ===================== 環形動物門 ===================== */
  X.def('Annelida', '環形動物門', 'ミミズ、ヒル、ゴカイなど、体が輪のような節に分かれた動物。', 'かんけいどうぶつもん');
  X.def('Clitellata', '環帯綱', 'ミミズやヒルなどの仲間。', 'かんたいこう');
  X.def('Crassiclitellata', 'ミミズ目', 'ミミズの仲間。', null);
  X.def('Lumbricidae', 'ツリミミズ科', 'シマミミズなどを含むミミズの仲間。', null);
  X.add([A, 'Annelida', 'Clitellata', 'Crassiclitellata', 'Lumbricidae'],
    G('シマミミズ属', 'Eisenia', [
      S('シマミミズ', 'Eisenia fetida', '🪱', '縞のあるミミズ', '体に縞模様がある。釣り餌や、コンポストの生ごみ処理に使われることもある。', 'ヨーロッパ原産。日本でも堆肥の中などで見つかる。', '土をたがやしたり、落ち葉を分解したりして役立っている。')
    ], '縞模様のあるミミズの属。'));
  X.def('Tubificida', 'イトミミズ目', 'イトミミズなど、細い水中のミミズ。', null);
  X.def('Naididae', 'ミズミミズ科', 'イトミミズなど、水中にすむ小さなミミズの仲間。', null);
  X.add([A, 'Annelida', 'Clitellata', 'Tubificida', 'Naididae'],
    G('イトミミズ属', 'Tubifex', [
      S('イトミミズ', 'Tubifex tubifex', '🪱', '川底にいる赤い糸', '赤くて細いミミズで、水の底の泥に頭を突っこみ、お尻を水に出してゆらゆらする。', '世界の川、池、水田の底。', '金魚や熱帯魚のえさとして売られている。')
    ], '川底の泥にすむ、赤くて細いミミズの属。'));
  X.add([A, 'Annelida', 'Clitellata', 'Tubificida', 'Naididae'],
    G('エラミミズ属', 'Branchiura', [
      S('エラミミズ', 'Branchiura sowerbyi', '🪱', 'お尻にえらがあるミミズ', '水の底の泥にすみ、体の後ろにえらのようなものがある。', '日本をはじめ世界の池や川。', '釣りのえさとして使われることもある。')
    ], '体の後ろにえらがある水中のミミズの属。'));
  X.def('Arhynchobdellida', 'ヒル目', 'ヒルの仲間。', null);
  X.def('Haemadipsidae', 'ヤマビル科', 'ヤマビルなど、陸にすむヒルの仲間。', null);
  X.add([A, 'Annelida', 'Clitellata', 'Arhynchobdellida', 'Haemadipsidae'],
    G('ヤマビル属', 'Haemadipsa', [
      S('ヤマビル', 'Haemadipsa zeylanica', '🪱', '山にいる吸血のヒル', '陸にすむヒルで、森や草むらで動物の血を吸う。人にもつく。', '日本の山地の森林。', 'シカなどが増えるにつれ、広がっているとされる。')
    ], '森林にすむ、吸血性のヒルの属。'));
  X.def('Hirudinidae', 'ヒル科', 'チスイビルなどの仲間。', null);
  X.add([A, 'Annelida', 'Clitellata', 'Arhynchobdellida', 'Hirudinidae'],
    G('チスイビル属', 'Hirudo', [
      S('チスイビル', 'Hirudo nipponia', '🪱', '田んぼの吸血ヒル', '水田や池にすむヒルで、動物の血を吸う。', '日本の水田や池。', 'ヒルのだ液には、血が固まるのを防ぐ物質が含まれる。')
    ], '動物の血を吸うヒルの属。'));

  X.def('Polychaeta', '多毛綱', 'ゴカイやイソメなど、足に剛毛が生えた環形動物。', 'たもうこう');
  X.def('Phyllodocida', 'サシバゴカイ目', 'ゴカイやアオイソメなどの仲間。', null);
  X.def('Nereididae', 'ゴカイ科', 'ゴカイやアオイソメなどの仲間。', null);
  X.add([A, 'Annelida', 'Polychaeta', 'Phyllodocida', 'Nereididae'],
    G('ゴカイ属', 'Hediste', [
      S('ゴカイ', 'Hediste japonica', '🪱', '干潟の定番', '体の両側に、たくさんの足のようなものが並ぶ。干潟の泥の中にすむ。', '日本の干潟や河口。', '釣りのえさに使われる。')
    ], '干潟の泥にすむ環形動物の属。'));
  X.add([A, 'Annelida', 'Polychaeta', 'Phyllodocida', 'Nereididae'],
    G('アオイソメ属', 'Perinereis', [
      S('アオイソメ', 'Perinereis aibuhitensis', '🪱', '釣りえさの定番', '体は青緑色に光ることがあり、口に鋭い歯がある。釣りのえさとして有名。', '日本の干潟や砂泥地。', '「イソメ」の名で売られる、釣りえさの定番。'),
      S('イソゴカイ', 'Perinereis nuntia', '🪱', '磯の小さなゴカイ', '岩場や砂地にすむゴカイの仲間。', '日本の磯や砂浜。', 'アオイソメと同じ属で、見た目が似ている。')
    ], '釣りえさでおなじみの、ゴカイの仲間の属。'));
  X.def('Eunicida', 'イソメ目', 'イワムシなどの仲間。', null);
  X.def('Eunicidae', 'イソメ科', 'イワムシなどの環形動物の仲間。', null);
  X.add([A, 'Annelida', 'Polychaeta', 'Eunicida', 'Eunicidae'],
    G('イワムシ属', 'Marphysa', [
      S('イワムシ', 'Marphysa sanguinea', '🪱', '大型の釣りえさ', '大きくなるゴカイの仲間。岩の間や砂泥の中にすむ。', '日本の岩場や干潟。', '大物釣りのえさとして使われる。')
    ], '大型のゴカイの仲間の属。'));
  X.def('Sabellida', 'ケヤリムシ目', '筒をつくり、冠のような触手を広げる環形動物のグループ。', null);
  X.def('Serpulidae', 'カンザシゴカイ科', 'らせん状の冠をもつ、サンゴにすむゴカイ。', null);
  X.add([A, 'Annelida', 'Polychaeta', 'Sabellida', 'Serpulidae'],
    G('クリスマスツリーワーム属', 'Spirobranchus', [
      S('クリスマスツリーワーム', 'Spirobranchus giganteus', '🎄', 'クリスマスツリー型のゴカイ', 'サンゴの中に筒をつくって暮らし、色とりどりのらせん状の冠を広げる。', '世界のサンゴ礁。', '冠はえらで、えさをとる役割もある。')
    ], 'サンゴにすむ、クリスマスツリーのような冠をもつゴカイの属。'));
  X.def('Echiuroidea', 'ユムシ目', 'ユムシの仲間。', null);
  X.def('Urechidae', 'ユムシ科', 'ユムシの仲間。', null);
  X.add([A, 'Annelida', 'Polychaeta', 'Echiuroidea', 'Urechidae'],
    G('ユムシ属', 'Urechis', [
      S('ユムシ', 'Urechis unicinctus', '🪱', 'ソーセージみたいな海の虫', '太く短いソーセージのような体の、海の底にすむ環形動物。U字型の巣穴をほる。', '日本、朝鮮半島などの干潟。', '釣りえさや食用にされる。')
    ], 'ソーセージのような形の海の環形動物の属。'));

  /* ===================== 脊索動物門：ホヤ・ナメクジウオ ===================== */
  X.def('Chordata', '脊索動物門', 'せぼねをもつ動物の仲間と、その近縁のホヤやナメクジウオ。', 'せきさくどうぶつもん');
  X.def('Ascidiacea', 'ホヤ綱', 'ホヤの仲間。', null);
  X.def('Stolidobranchia', 'ストリドブランキア目', 'マボヤなどを含むホヤのグループ。', null);
  X.def('Pyuridae', 'マボヤ科', 'マボヤなどの仲間。', null);
  X.add([A, 'Chordata', 'Ascidiacea', 'Stolidobranchia', 'Pyuridae'],
    G('マボヤ属', 'Halocynthia', [
      S('マボヤ', 'Halocynthia roretzi', '🍊', '食べられるホヤ', 'ごつごつした赤い体の海のホヤ。海水をこして食べる。', '日本の東北地方などの冷たい海。', '幼生のころは、おたまじゃくしのような尾をもつ。'),
      S('アカボヤ', 'Halocynthia aurantium', '🍊', '北のオレンジ色のホヤ', 'マボヤより大きく、オレンジ色をしている。', '北海道などの冷たい海。', 'マボヤと同じ属で、北海道で食べられている。')
    ], '食用のホヤ「マボヤ」の属。'));
  X.def('Styelidae', 'シロボヤ科', 'エボヤなどのホヤの仲間。', null);
  X.add([A, 'Chordata', 'Ascidiacea', 'Stolidobranchia', 'Styelidae'],
    G('エボヤ属', 'Styela', [
      S('エボヤ', 'Styela clava', '🍊', '港にいる外来のホヤ', '細長い体で、柄の先にこぶのある形をしたホヤ。', '北西太平洋が原産。世界の港に広がっている。', '船についてあちこちに運ばれたとされる。')
    ], '港で見られるホヤの属。'));
  X.add([A, 'Chordata', 'Ascidiacea', 'Stolidobranchia', 'Styelidae'],
    G('ミダレキクイタボヤ属', 'Botryllus', [
      S('ミダレキクイタボヤ', 'Botryllus schlosseri', '🍊', '集まって暮らす小さなホヤ', '小さなホヤが集まって、花のような模様をつくる。', '世界の浅い海。', '「群体」をつくる、ホヤの仲間。', null)
    ], '小さなホヤが集まって暮らす属。'));
  X.def('Phlebobranchia', 'フレボブランキア目', 'ユウレイボヤなどのホヤのグループ。', null);
  X.def('Cionidae', 'ユウレイボヤ科', 'ユウレイボヤの仲間。', null);
  X.add([A, 'Chordata', 'Ascidiacea', 'Phlebobranchia', 'Cionidae'],
    G('ユウレイボヤ属', 'Ciona', [
      S('ユウレイボヤ', 'Ciona intestinalis', '👻', '透明な体のホヤ', '体が透けて見える、細長いホヤ。実験動物としても使われる。', '世界の港や浅い海。', '遺伝子研究に使われる、研究でおなじみのホヤ。')
    ], '体が透けて見えるホヤの属。'));

  X.def('Leptocardii', 'ナメクジウオ綱', 'ナメクジウオの仲間。', 'なめくじうおこう');
  X.def('Amphioxiformes', 'ナメクジウオ目', 'ナメクジウオの仲間。', null);
  X.def('Branchiostomatidae', 'ナメクジウオ科', 'ナメクジウオの仲間。', null);
  X.add([A, 'Chordata', 'Leptocardii', 'Amphioxiformes', 'Branchiostomatidae'],
    G('ナメクジウオ属', 'Branchiostoma', [
      S('ナメクジウオ', 'Branchiostoma belcheri', '🐟', 'せぼねのはじまりを残す動物', '細長い魚のような形の小さな動物。せぼねはないが、背中に脊索（せきさく）をもつ。', '日本をはじめ、西太平洋の砂の海底。', '脊椎動物の祖先に近い姿をしていると考えられている。')
    ], '脊椎動物の祖先に近い姿をした小さな動物の属。'));

  /* ===================== その他の無脊椎動物 ===================== */
  X.def('Platyhelminthes', '扁形動物門', '体が平たい動物。プラナリアなど。', 'へんけいどうぶつもん');
  X.def('Turbellaria', '渦虫綱', 'プラナリアなど、ほとんどが自由生活のなかま。', 'うずむしこう');
  X.def('Tricladida', 'ウズムシ目', 'プラナリアなどの仲間。', null);
  X.def('Dugesiidae', 'ウズムシ科', 'ナミウズムシなどの仲間。', null);
  X.add([A, 'Platyhelminthes', 'Turbellaria', 'Tricladida', 'Dugesiidae'],
    G('ナミウズムシ属', 'Dugesia', [
      S('ナミウズムシ', 'Dugesia japonica', '🪱', '切っても再生する「プラナリア」', '平たい体の淡水の動物。三角形の頭に、目のような点が2つある。体を切っても、残った部分から再生する。', '日本の清流や湧水。', '一般に「プラナリア」の名で知られ、再生の研究で有名。'),
      S('リュウキュウナミウズムシ', 'Dugesia ryukyuensis', '🪱', '沖縄などのプラナリア', 'ナミウズムシに近い仲間。体を分けて増える個体と、卵を産む個体がある。', '日本の南西諸島の淡水。', '再生や生殖の研究に使われている。')
    ], '再生力で有名な、プラナリアの属。'));

  X.def('Nematoda', '線形動物門', '細長い糸のような体の動物。センチュウ。', 'せんけいどうぶつもん');
  X.def('Chromadorea', 'クロマドレア綱', '土の中や動植物に寄生するものを含む、線虫の大きなグループ。', null);
  X.def('Rhabditida', 'ラブディティス目', '実験動物のC.エレガンスなどを含む線虫のグループ。', null);
  X.def('Rhabditidae', 'ラブディティス科', '土の中にすむ小さな線虫。', null);
  X.add([A, 'Nematoda', 'Chromadorea', 'Rhabditida', 'Rhabditidae'],
    G('カエノラブディティス属', 'Caenorhabditis', [
      S('シーエレガンス', 'Caenorhabditis elegans', '🔬', '研究室の人気者', '体長1mmほどの透明な小さな線虫。体のつくりがシンプルで、遺伝子の研究に役立つ。', '土の中。研究室で飼育されている。', '2002年のノーベル賞の研究に使われた。')
    ], '研究に使われる小さな線虫の属。'));
  X.def('Ascarididae', 'カイチュウ科', 'ヒトカイチュウなどの寄生虫の仲間。', null);
  X.add([A, 'Nematoda', 'Chromadorea', 'Rhabditida', 'Ascarididae'],
    G('カイチュウ属', 'Ascaris', [
      S('ヒトカイチュウ', 'Ascaris lumbricoides', '🪱', 'ヒトの腸にすむ寄生虫', '人の腸に寄生する線虫。大きいものは20cmを超える。', '世界の熱帯・亜熱帯。日本では衛生環境が改善して、ほとんど見られなくなった。', '昔の日本では、よく見られる寄生虫だった。')
    ], '人の腸に寄生する大型の線虫の属。'));
  X.def('Anisakidae', 'アニサキス科', 'アニサキスなどの仲間。', null);
  X.add([A, 'Nematoda', 'Chromadorea', 'Rhabditida', 'Anisakidae'],
    G('アニサキス属', 'Anisakis', [
      S('アニサキス', 'Anisakis simplex', '🐟', '魚にいる細い寄生虫', '魚の内臓などにいる、白い糸のような線虫。クジラやイルカなどの体内で成虫になる。', '世界の海。魚のおなか。', '生で食べると人に食あたりを起こすことがある。')
    ], '魚介類にいる寄生性の線虫の属。'));
  X.def('Oxyuridae', 'ギョウチュウ科', 'ギョウチュウの仲間。', null);
  X.add([A, 'Nematoda', 'Chromadorea', 'Rhabditida', 'Oxyuridae'],
    G('ギョウチュウ属', 'Enterobius', [
      S('ギョウチュウ', 'Enterobius vermicularis', '🪱', '子どもに多い寄生虫', '小さな白い糸のような線虫。腸に寄生する。', '世界中。', '手をよく洗うことが予防につながる。')
    ], '人に寄生する小さな線虫の属。'));
  X.def('Aphelenchoididae', 'ハセンチュウ科', 'マツノザイセンチュウなどの仲間。', null);
  X.add([A, 'Nematoda', 'Chromadorea', 'Rhabditida', 'Aphelenchoididae'],
    G('マツノザイセンチュウ属', 'Bursaphelenchus', [
      S('マツノザイセンチュウ', 'Bursaphelenchus xylophilus', '🌲', 'マツを枯らす線虫', 'マツの木の中に入りこむ、とても小さな線虫。マツノマダラカミキリという昆虫に運ばれる。', '北米原産。日本のマツ林に広がっている。', '「松くい虫」被害の原因とされる。')
    ], 'マツの木に入って枯らす線虫の属。'));
  X.def('Onchocercidae', 'オンコセルカ科', 'フィラリアなどを含む、血や組織にすむ線虫の仲間。', null);
  X.add([A, 'Nematoda', 'Chromadorea', 'Rhabditida', 'Onchocercidae'],
    G('イヌフィラリア属', 'Dirofilaria', [
      S('イヌフィラリア', 'Dirofilaria immitis', '🐕', '犬の心臓にすむ寄生虫', '犬の心臓や血管に寄生する細長い線虫。蚊に運ばれる。', '世界各地。日本でも見られる。', '予防薬が使われている。')
    ], '蚊によって運ばれる寄生性の線虫の属。'));

  X.def('Nematomorpha', '類線形動物門', 'ハリガネムシの仲間。', 'るいせんけいどうぶつもん');
  X.def('Gordioida', 'ハリガネムシ綱', 'ハリガネムシの仲間。', null);
  X.def('Gordioidea', 'ハリガネムシ目', 'ハリガネムシの仲間。', null);
  X.def('Chordodidae', 'ハリガネムシ科', 'ハリガネムシの仲間。', null);
  X.add([A, 'Nematomorpha', 'Gordioida', 'Gordioidea', 'Chordodidae'],
    G('ハリガネムシ属', 'Chordodes', [
      S('ハリガネムシ', 'Chordodes japonensis', '🪱', '昆虫に寄生する針金みたいな虫', '針金のような細長い体。幼虫は昆虫の体内で育ち、成虫は水の中で暮らす。', '日本の川や池、水辺。', '寄生された昆虫が水辺に向かうようになるとされる。')
    ], '針金のような体の寄生虫の属。'));

  X.def('Rotifera', '輪形動物門', 'ワムシ。口のまわりの繊毛が輪のように動く、顕微鏡サイズの動物。', 'りんけいどうぶつもん');
  X.def('Eurotatoria', 'ユーロタトリア綱', 'ワムシの大きなグループ。', null);
  X.def('Ploima', 'プロイマ目', 'ツボワムシなどの仲間。', null);
  X.def('Brachionidae', 'ツボワムシ科', 'ツボワムシの仲間。', null);
  X.add([A, 'Rotifera', 'Eurotatoria', 'Ploima', 'Brachionidae'],
    G('ツボワムシ属', 'Brachionus', [
      S('シオミズツボワムシ', 'Brachionus plicatilis', '🔬', '養殖のえさになる', '体長は0.2mmほどの小さな動物。口の周りの繊毛をくるくる動かす。', '世界の塩分のある水域。', '養殖の魚の稚魚のえさとして使われる。'),
      S('ツボワムシ', 'Brachionus calyciflorus', '🔬', '淡水のワムシ', '壺のような形のワムシ。池や水たまりにすむ。', '世界の淡水域。', '顕微鏡で見ると、口の周りの繊毛が回転して見える。')
    ], '壺のような形のワムシの属。'));

  X.def('Bryozoa', '外肛動物門', 'コケムシ。小さな個体が集まる群体。', 'がいこうどうぶつもん');
  X.def('Phylactolaemata', '掩喉綱', '淡水にすむコケムシの仲間。', 'えんこうこう');
  X.def('Plumatellida', 'プルマテラ目', '淡水のコケムシ。', null);
  X.def('Pectinatellidae', 'オオマリコケムシ科', 'オオマリコケムシの仲間。', null);
  X.add([A, 'Bryozoa', 'Phylactolaemata', 'Plumatellida', 'Pectinatellidae'],
    G('オオマリコケムシ属', 'Pectinatella', [
      S('オオマリコケムシ', 'Pectinatella magnifica', '🔵', '湖にあらわれる寒天のかたまり', '小さな個体が集まって、ゼリー状の大きな丸いかたまりをつくる。', '北米原産とされ、日本の池や湖で見られる。', 'ゼリーの表面には、花のような小さな個体が並ぶ。')
    ], '淡水で丸いかたまりをつくるコケムシの属。'));

  X.def('Tardigrada', '緩歩動物門', 'クマムシ。乾燥にとても強い、小さな動物。', 'かんぽどうぶつもん');
  X.def('Eutardigrada', '真クマムシ綱', 'クマムシの大きなグループ。', 'しんくまむしこう');
  X.def('Parachela', 'パラケラ目', 'ヨコヅナクマムシなどの仲間。', null);
  X.def('Ramazzottiidae', 'ラマゾッティウス科', 'ヨコヅナクマムシなどの仲間。', null);
  X.add([A, 'Tardigrada', 'Eutardigrada', 'Parachela', 'Ramazzottiidae'],
    G('ラマゾッティウス属', 'Ramazzottius', [
      S('ヨコヅナクマムシ', 'Ramazzottius varieornatus', '🐻', '最強の生き物？', '体長は0.5mmほど。乾燥すると「乾眠」という状態になって、きびしい環境に耐える。', '日本の苔や地面のくぼみ。', '日本の研究者が、強さの秘密を調べている。')
    ], '乾燥にとても強いクマムシの属。'));
  X.def('Apochela', 'アポケラ目', 'オニクマムシなどの仲間。', null);
  X.def('Milnesiidae', 'オニクマムシ科', 'オニクマムシの仲間。', null);
  X.add([A, 'Tardigrada', 'Eutardigrada', 'Apochela', 'Milnesiidae'],
    G('オニクマムシ属', 'Milnesium', [
      S('オニクマムシ', 'Milnesium tardigradum', '🐻', '肉食のクマムシ', '体長は1mmほど。ほかの小さな生き物を食べることもある。', '世界各地の苔や地面。', 'クマムシの仲間は、乾燥に強いものが多い。')
    ], '肉食性のクマムシの属。'));

  X.def('Porifera', '海綿動物門', 'カイメン。からだにたくさんの穴があり、水をこして食べる動物。', 'かいめんどうぶつもん');
  X.def('Hexactinellida', '六放海綿綱', 'ガラスのような骨をもつカイメン。', 'ろっぽうかいめんこう');
  X.def('Amphidiscosida', 'アンフィディスコシダ目', 'ホッスガイなどのカイメン。', null);
  X.def('Hyalonematidae', 'ホッスガイ科', 'ホッスガイの仲間。', null);
  X.add([A, 'Porifera', 'Hexactinellida', 'Amphidiscosida', 'Hyalonematidae'],
    G('ホッスガイ属', 'Hyalonema', [
      S('ホッスガイ', 'Hyalonema sieboldii', '🧽', 'ガラスの毛をもつカイメン', '深海にすむガラス質のカイメン。長い毛のようなガラスの糸で、泥の海底に立つ。', '日本の深い海底。', '貝ではなく、カイメンの仲間。')
    ], 'ガラスの糸をもつ深海のカイメンの属。'));
  X.def('Demospongiae', '普通海綿綱', '多くのカイメンが属する、いちばん大きなグループ。', 'ふつうかいめんこう');
  X.def('Suberitida', 'スベリテス目', 'ダイダイイソカイメンなどのカイメン。', null);
  X.def('Halichondriidae', 'イソカイメン科', 'ダイダイイソカイメンなどの仲間。', null);
  X.add([A, 'Porifera', 'Demospongiae', 'Suberitida', 'Halichondriidae'],
    G('ダイダイイソカイメン属', 'Hymeniacidon', [
      S('ダイダイイソカイメン', 'Hymeniacidon perlevis', '🧽', '磯のオレンジのカイメン', 'オレンジ色の、ふにゃふにゃしたカイメン。磯の岩や貝殻につく。', '日本をはじめ、世界の沿岸。', '日本では Hymeniacidon sinapium とも呼ばれてきた。')
    ], '磯の岩につくオレンジ色のカイメンの属。'));

  X.def('Ctenophora', '有櫛動物門', 'クシクラゲ。くしのような繊毛の列で泳ぐ動物。', 'ゆうしつどうぶつもん');
  X.def('Tentaculata', '有触手綱', '触手をもつクシクラゲ。', 'ゆうしょくしゅこう');
  X.def('Lobata', 'ヘラクラゲ目', '大きな口の突出をもつクシクラゲ。', null);
  X.def('Bolinopsidae', 'カブトクラゲ科', 'カブトクラゲの仲間。', null);
  X.add([A, 'Ctenophora', 'Tentaculata', 'Lobata', 'Bolinopsidae'],
    G('カブトクラゲ属', 'Bolinopsis', [
      S('カブトクラゲ', 'Bolinopsis mikado', '🪼', '光る縞のあるクラゲもどき', '透明な体に、8本のくし板列があり、光が反射して虹色にきらめく。刺胞はもたない。', '日本の沿岸の海。', 'クラゲに見えるが、刺胞動物とは別の仲間。')
    ], 'くし板列で泳ぐ、クラゲに似た動物の属。'));

  X.def('Brachiopoda', '腕足動物門', 'シャミセンガイなど、二枚の殻をもつ海の動物。', 'わんそくどうぶつもん');
  X.def('Lingulata', 'シャミセンガイ綱', 'シャミセンガイの仲間。', null);
  X.def('Lingulida', 'シャミセンガイ目', 'シャミセンガイの仲間。', null);
  X.def('Lingulidae', 'シャミセンガイ科', 'シャミセンガイの仲間。', null);
  X.add([A, 'Brachiopoda', 'Lingulata', 'Lingulida', 'Lingulidae'],
    G('シャミセンガイ属', 'Lingula', [
      S('ミドリシャミセンガイ', 'Lingula anatina', '🐚', '生きた化石', '二枚の殻と、長い柄をもつ。二枚貝に似て見えるが、別のグループ。', '日本の有明海などの干潟。', '大昔の化石とほとんど姿が変わらないとされる。')
    ], '三味線のバチのような形の海の動物の属。'));
});
