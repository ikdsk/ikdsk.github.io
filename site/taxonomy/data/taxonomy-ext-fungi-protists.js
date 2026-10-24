/* 拡張データ。taxonomy.js が最後に X を渡して呼び出す（使い方は taxonomy.js の「拡張データの取り込み」参照） */
(window.TAXON_EXT = window.TAXON_EXT || []).push(function (X) {
  'use strict';
  var S = X.S, G = X.G;

  /* 野生キノコの注意書き（毒キノコ・食用キノコの両方に入れる） */
  var WILD = '野生のキノコは専門家でも見分けがむずかしい。自分で採って食べないこと。';

  /* ===================== 菌界 ===================== */
  var FU = 'Fungi', BA = 'Basidiomycota', AG = 'Agaricomycetes', AS = 'Ascomycota';

  X.def('Pleurotaceae', 'ヒラタケ科', 'ヒラタケやエリンギなど、枯れ木に横向きに生えるキノコの仲間。', null);
  X.def('Lyophyllaceae', 'シメジ科', 'ホンシメジやブナシメジなど、「シメジ」と呼ばれるキノコの仲間。', null);
  X.def('Strophariaceae', 'モエギタケ科', 'ナメコなど、枯れ木に群がって生えるキノコの仲間。', null);
  X.def('Lycoperdaceae', 'ホコリタケ科', 'ホコリタケなど、丸いふくろの中に胞子をつくるキノコの仲間。', null);
  X.def('Boletales', 'イグチ目', 'かさの裏がひだではなく、スポンジのような管になっているキノコの仲間。', null);
  X.def('Boletaceae', 'イグチ科', 'ヤマドリタケなど、かさの裏に細かい管の穴があるキノコの仲間。', null);
  X.def('Suillaceae', 'ヌメリイグチ科', 'かさの表面がぬるぬるしている、マツ類の林に生えるキノコの仲間。', null);
  X.def('Cantharellales', 'アンズタケ目', 'アンズタケなどを含む、ひだのようなしわをもつキノコの仲間。', null);
  X.def('Hydnaceae', 'ハリタケ科', 'アンズタケなどを含むグループ。', null);
  X.def('Russulales', 'ベニタケ目', 'ベニタケやハツタケ、ヤマブシタケなどを含む仲間。', null);
  X.def('Russulaceae', 'ベニタケ科', 'ベニタケやチチタケの仲間。肉がもろく、折るとぽきっと割れる。', null);
  X.def('Hericiaceae', 'ヤマブシタケ科', 'とげのような針が垂れ下がるキノコの仲間。', null);
  X.def('Polyporales', 'タマチョレイタケ目', 'マイタケやカワラタケ、マンネンタケなど、木に生えるかたいキノコを多く含む仲間。', null);
  X.def('Grifolaceae', 'マイタケ科', 'マイタケの仲間。', null);
  X.def('Polyporaceae', 'タマチョレイタケ科', 'サルノコシカケの仲間を多く含む、木に生える丈夫なキノコの仲間。', null);
  X.def('Phallales', 'スッポンタケ目', '成長するとにょきっと伸びる、ふしぎな形のキノコの仲間。', null);
  X.def('Phallaceae', 'スッポンタケ科', 'スッポンタケやキヌガサタケの仲間。', null);
  X.def('Geastrales', 'ヒメツチグリ目', 'ツチグリのように、外側の皮が星形に開くキノコの仲間。', null);
  X.def('Geastraceae', 'ヒメツチグリ科', '星形に開く皮の中に、胞子のふくろがあるキノコの仲間。', null);
  X.def('Auriculariales', 'キクラゲ目', '耳のような形のゼリー状のキノコの仲間。', null);
  X.def('Auriculariaceae', 'キクラゲ科', 'キクラゲの仲間。', null);
  X.def('Tremellomycetes', 'シロキクラゲ綱', 'ゼリー状のキノコや、酵母のような姿の菌を含む綱。', null);
  X.def('Tremellales', 'シロキクラゲ目', 'シロキクラゲなど、ゼリー状のキノコの仲間。', null);
  X.def('Tremellaceae', 'シロキクラゲ科', 'シロキクラゲの仲間。', null);

  X.add([FU, BA, AG, 'Agaricales', 'Omphalotaceae'],
    G('ツキヨタケ属', 'Omphalotus', [
      S('ツキヨタケ', 'Omphalotus guepiniiformis', '🍄', '暗がりでほのかに光る毒キノコ', 'ブナなどの枯れ木に重なって生える。かさの裏のひだが、暗いところでぼんやり光ることがある。シイタケやヒラタケなどに似ていて、中毒がとても多い毒キノコ。', '日本の山地のブナ林など（東アジア）。', WILD + '（日本では「ツキヨタケ」の学名として Omphalotus japonicus も長く使われてきた）。')
    ], '枯れ木に生える毒キノコの仲間。'));

  X.add([FU, BA, AG, 'Agaricales', 'Pleurotaceae'],
    G('ヒラタケ属', 'Pleurotus', [
      S('ヒラタケ', 'Pleurotus ostreatus', '🍄', '枯れ木に生える平たいキノコ', '灰色〜茶色の平たい貝がらのようなかさが、枯れ木に重なって生える。栽培されたものが店で売られている。', '広葉樹の枯れ木（世界の温帯）。', '英語ではカキ（oyster）に見立てて「オイスターマッシュルーム」と呼ばれる。' + WILD),
      S('エリンギ', 'Pleurotus eryngii', '🍄', '太くて歯ごたえのあるキノコ', '太い軸ともちもちした歯ごたえが特徴。日本では栽培されたものが、広く売られている。', '野生は南ヨーロッパから中央アジアの草原など。', '名前は、野生では「エリンジウム」というセリ科の植物の根もとに生えることからきている。'),
      S('タモギタケ', 'Pleurotus cornucopiae', '🍄', 'あざやかな黄色のキノコ', 'レモンのような黄色いかさが、枯れ木に群がって生える。栽培されたものも売られている。', '広葉樹の枯れ木（北日本を中心に、北半球の温帯）。', '同じヒラタケ属で、ヒラタケやエリンギの親せき。' + WILD)
    ], 'ヒラタケやエリンギなど、枯れ木から横向きにかさを広げるキノコの仲間。'));

  X.add([FU, BA, AG, 'Agaricales', 'Lyophyllaceae'],
    G('シメジ属', 'Lyophyllum', [
      S('ホンシメジ', 'Lyophyllum shimeji', '🍄', '「味しめじ」で知られるキノコ', '地面から、まとまって株になって生える。木の根と助け合う（共生する）ので、栽培がむずかしいとされてきた。', '雑木林やマツ林の地面（東アジア）。', '「香りまつたけ、味しめじ」という言葉で、おいしいキノコの代名詞とされる。' + WILD),
      S('ハタケシメジ', 'Lyophyllum decastes', '🍄', '畑や道ばたに生えるシメジ', 'ずんぐりした軸のキノコが、固まって株になって生える。畑のそばや道ばたなど、人の身近な場所に出る。', '畑・道ばた・林のふちの地面（北半球に広く分布）。', '枯れ木ではなく地面に生えるが、木の根と共生はしない。' + WILD)
    ], 'シメジの名で知られるキノコの仲間。'));
  X.add([FU, BA, AG, 'Agaricales', 'Lyophyllaceae'],
    G('ブナシメジ属', 'Hypsizygus', [
      S('ブナシメジ', 'Hypsizygus marmoreus', '🍄', 'スーパーで買える「ぶなしめじ」', '白〜灰色の小さなかさが、株になって生える。店で売られているものは栽培されたもの。', '野生ではブナなどの枯れ木（北半球の温帯）。', '学名の marmoreus は「大理石のような」という意味で、野生のかさの模様に由来する。')
    ], '枯れ木に生えるシメジに似たキノコの仲間。'));

  X.add([FU, BA, AG, 'Agaricales', 'Strophariaceae'],
    G('スギタケ属', 'Pholiota', [
      S('ナメコ', 'Pholiota microspora', '🍄', 'ぬるぬるが人気のキノコ', 'かさの表面がぬるぬるしたゼリー状の物質でおおわれている。みそ汁やなめこおろしでおなじみ。', '野生はブナなどの広葉樹の枯れ木（東アジア）。', '栽培では、原木のほか、おがくずを使った瓶栽培が多く行われている。' + WILD)
    ], '枯れ木に群がって生え、かさがぬるっとしたものが多いキノコの仲間。'));
  X.add([FU, BA, AG, 'Agaricales', 'Strophariaceae'],
    G('クリタケ属', 'Hypholoma', [
      S('ニガクリタケ', 'Hypholoma fasciculare', '🍄', '名前どおり苦い毒キノコ', '黄色っぽいかさのキノコが、枯れ木の根もとなどにたくさん集まって生える。苦みがあり、毒をもつ。', '切り株や枯れ木（世界の温帯）。', '食べられるキノコに似ているので、まちがえやすい。' + WILD)
    ], '切り株などに群がって生える、かさが黄〜赤茶色のキノコの仲間。'));

  X.add([FU, BA, AG, 'Agaricales', 'Agaricaceae'],
    G('ハラタケ属', 'Agaricus', [
      S('ハラタケ', 'Agaricus campestris', '🍄', '草地に生える、マッシュルームの仲間', '草地に生える白いキノコ。かさの裏のひだは、はじめピンク色で、古くなると黒っぽくなる。', '牧場や芝生などの草地（北半球に広く分布）。', 'ツクリタケ（マッシュルーム）と同じ属で、英語では「メドウ（草原）マッシュルーム」と呼ばれる。' + WILD),
      S('ヒメマツタケ', 'Agaricus subrufescens', '🍄', 'ブラジル原産とされるキノコ', 'マッシュルームの仲間で、アーモンドのような香りがあるとされる。栽培され、乾燥品などで売られている。', '原産はブラジルなどとされ、世界各地で栽培される。', 'マツタケの仲間ではない。かつて Agaricus blazei という学名でも知られた。')
    ]));
  X.add([FU, BA, AG, 'Agaricales', 'Lycoperdaceae'],
    G('ホコリタケ属', 'Lycoperdon', [
      S('ホコリタケ', 'Lycoperdon perlatum', '🍄', 'つつくと煙が出るキノコ', '丸くて白い小さなキノコ。熟すと、てっぺんの穴から胞子が煙のようにふき出す。', '林の地面や道ばた（世界の温帯）。', '雨のしずくが当たったり、つついたりすると、ぷしゅっと胞子の煙が出る。')
    ], '丸いふくろの中に胞子をつくり、熟すと煙のように飛ばすキノコの仲間。'));

  X.add([FU, BA, AG, 'Agaricales', 'Amanitaceae'],
    G('テングタケ属', 'Amanita', [
      S('タマゴタケ', 'Amanita hemibapha', '🍄', '赤いかさと白い「たまご」のキノコ', 'はじめは白い卵のようなふくろに入っていて、そこから赤〜オレンジ色のかさが顔を出す。', '夏〜秋の林の地面（東アジアなど）。', '食べられるとされるが、毒キノコのベニテングタケなどとまちがえる危険がある。' + WILD),
      S('ドクツルタケ', 'Amanita virosa', '🍄', '真っ白で姿の美しい猛毒キノコ', '全体が白く、軸にスカートのようなつばがある。ほんの少しでも命にかかわる毒をもつ。', '林の地面（北半球の温帯）。', '見た目がきれいなので、食べられそうに見えてしまう。' + WILD),
      S('テングタケ', 'Amanita pantherina', '🍄', '白い点々がある毒キノコ', '茶色いかさに白いいぼがちらばる。種小名の pantherina は「ヒョウ」の意味で、点々模様を表す。毒キノコ。', '林の地面（北半球に広く分布）。', 'ベニテングタケの仲間。' + WILD),
      S('タマゴテングタケ', 'Amanita phalloides', '🍄', '世界で中毒事故の多い猛毒キノコ', 'オリーブ色〜黄緑色のかさと、白いひだをもつ。ほんの少しでも命にかかわる毒がある。', 'ヨーロッパの林が原産（世界各地に広がっている）。', 'キノコの中毒死の原因として、世界で最も多いキノコの一つとされる。' + WILD)
    ]));

  X.add([FU, BA, AG, 'Boletales', 'Boletaceae'],
    G('ヤマドリタケ属', 'Boletus', [
      S('ヤマドリタケ', 'Boletus edulis', '🍄', 'ポルチーニの名で知られるキノコ', 'ずんぐりと太い軸と、茶色いかさをもつ。かさの裏はひだではなく、細かい管の穴。', '高原などの針葉樹林の地面（北半球）。', 'イタリア語では「ポルチーニ」と呼ばれ、ヨーロッパ料理で人気。' + WILD)
    ], 'かさの裏が細かい管の穴になっている、大型のキノコの仲間。'));
  X.add([FU, BA, AG, 'Boletales', 'Suillaceae'],
    G('ヌメリイグチ属', 'Suillus', [
      S('ヌメリイグチ', 'Suillus luteus', '🍄', 'ぬるぬるのかさのキノコ', '茶色いかさの表面がぬるぬるしている。マツの根と助け合って生きる。', 'マツ林の地面（北半球の温帯）。', 'ぬめりは、雨の日などに目立つ。' + WILD),
      S('ハナイグチ', 'Suillus grevillei', '🍄', 'カラマツ林に生えるキノコ', 'ぬめりのある黄〜褐色のかさをもつ。カラマツの根と助け合って生きる。', 'カラマツ林（北半球の寒い地域）。', '長野県などでは、地方名の「ジコボウ」の名で呼ばれる。' + WILD)
    ], 'かさがぬるぬるした、マツ類の林に生えるキノコの仲間。'));

  X.add([FU, BA, AG, 'Cantharellales', 'Hydnaceae'],
    G('アンズタケ属', 'Cantharellus', [
      S('アンズタケ', 'Cantharellus cibarius', '🍄', 'アンズの香りがする黄色いキノコ', 'あざやかな黄色で、ラッパのような形。ひだのようなしわが、軸まで続いている。', '林の地面（北半球の温帯）。', 'ヨーロッパでは「シャントレル」「ジロール」などの名前で、料理に使われる。' + WILD)
    ], 'ラッパのような形をした、黄色〜オレンジ色のキノコの仲間。'));

  X.add([FU, BA, AG, 'Russulales', 'Russulaceae'],
    G('ベニタケ属', 'Russula', [
      S('ドクベニタケ', 'Russula emetica', '🍄', '真っ赤なかさの毒キノコ', '赤いかさと白い軸をもち、肉は辛く、毒がある。', '林の地面（北半球の温帯）。', '赤い色が目立つが、食べてはいけない。' + WILD)
    ], '肉がもろく、ぽきっと折れるキノコの仲間。かさが赤いものが多い。'));
  X.add([FU, BA, AG, 'Russulales', 'Russulaceae'],
    G('チチタケ属', 'Lactarius', [
      S('ハツタケ', 'Lactarius hatsudake', '🍄', '傷つくと青緑に変わるキノコ', 'かさのひだを傷つけると、青緑色に変わる。マツ林に生える。', 'マツ林の地面（東アジア）。', '日本では昔から、秋のキノコとして親しまれてきた。' + WILD)
    ], '傷つけると、白や色のついた汁が出るキノコの仲間。'));
  X.add([FU, BA, AG, 'Russulales', 'Hericiaceae'],
    G('ヤマブシタケ属', 'Hericium', [
      S('ヤマブシタケ', 'Hericium erinaceus', '🍄', '白いふさふさのキノコ', '白くて丸く、たくさんの針のようなものが垂れ下がる。山伏が着る衣装の飾りに似ている。', '広葉樹の枯れ木や生きた木の幹（北半球の温帯）。', '栽培されたものが、食材や健康食品の原料として売られている。' + WILD),
      S('サンゴハリタケ', 'Hericium coralloides', '🍄', 'サンゴのように枝分かれするキノコ', '白く細かく枝分かれして、針のようなものが垂れ下がる。サンゴのように見える。', '広葉樹の枯れ木（北半球の温帯）。', 'ヤマブシタケと同じ属の仲間。' + WILD)
    ], '白くふさふさとして、針のようなものが垂れ下がるキノコの仲間。'));

  X.add([FU, BA, AG, 'Polyporales', 'Grifolaceae'],
    G('マイタケ属', 'Grifola', [
      S('マイタケ', 'Grifola frondosa', '🍄', '舞うように重なるキノコ', '灰褐色の小さなかさが、折り重なって大きな株になる。栽培されたものが店で売られている。', 'ミズナラなどの大木の根もと（北半球の温帯）。', '野生のものは大きな株になる。名前は、見つけた人が喜んで舞い踊るほどだったから、という説がある。' + WILD)
    ], '折り重なって大きな株をつくる、食用で知られるキノコの仲間。'));
  X.add([FU, BA, AG, 'Polyporales', 'Polyporaceae'],
    G('シロアミタケ属', 'Trametes', [
      S('カワラタケ', 'Trametes versicolor', '🍄', '瓦のように重なる枯れ木のキノコ', '小さな半円形のかたいキノコが、枯れ木の上に瓦のように重なって生える。色の模様は、黒・茶・青っぽい灰色などさまざま。', '倒木や切り株（世界中）。', '枯れ木を分解する。この菌の成分が、薬の研究にも使われてきた。')
    ], '枯れ木に生える、かたい半円形のキノコの仲間。'));
  X.add([FU, BA, AG, 'Polyporales', 'Polyporaceae'],
    G('マンネンタケ属', 'Ganoderma', [
      S('マンネンタケ', 'Ganoderma lucidum', '🍄', 'つやつやの「霊芝」', '赤茶色の、うるしを塗ったようなつやのあるかさをもつ。かたく、木のようなキノコ。', '広葉樹の根もとや枯れ木（東アジアなど）。', '中国では「霊芝」と呼ばれ、縁起のよいものとして大切にされてきた。'),
      S('コフキサルノコシカケ', 'Ganoderma applanatum', '🍄', '「猿の腰かけ」の代表', '木の幹にはりついた、棚のような形をしたかたいキノコ。かさの表面に、粉のような胞子がたまる。', '広葉樹の幹や切り株（世界中）。', 'かさの裏に傷をつけると茶色くなるので、絵を描くことができる。')
    ], 'かたく木のようなキノコの仲間。幹に棚のように生えるものが多い。'));

  X.add([FU, BA, AG, 'Phallales', 'Phallaceae'],
    G('スッポンタケ属', 'Phallus', [
      S('スッポンタケ', 'Phallus impudicus', '🍄', '強いにおいで虫を呼ぶキノコ', '白い卵のような姿から、にょきっと軸が伸びる。先に胞子を含むねばねばした液がつく。', '林や庭の地面（世界の温帯）。', 'くさいにおいでハエなどを呼び、胞子を運んでもらう。'),
      S('キヌガサタケ', 'Phallus indusiatus', '🍄', 'レースのスカートをはいたキノコ', '白い網目状のレースが軸の下にスカートのように広がる、美しいキノコ。', '竹林など（アジアなどの暖かい地域）。', '中国では「竹蓀（ちくそん）」と呼ばれ、料理の高級な食材にされる。')
    ], 'にょきっと伸び、においで虫を呼んで胞子を運ばせるキノコの仲間。'));
  X.add([FU, BA, AG, 'Geastrales', 'Geastraceae'],
    G('ツチグリ属', 'Geastrum', [
      S('エリマキツチグリ', 'Geastrum triplex', '🍄', '星のように開くキノコ', '外側の皮が星形に裂け、中の丸いふくろを持ち上げる。丸いふくろをつつくと、胞子が煙のように出る。', '林の地面（北半球の温帯）。', '星形に開いた皮が、まるでえり巻きのよう。')
    ], '外側の皮が星形に開く、土の中から生まれるキノコの仲間。'));

  X.add([FU, BA, AG, 'Auriculariales', 'Auriculariaceae'],
    G('キクラゲ属', 'Auricularia', [
      S('キクラゲ', 'Auricularia auricula-judae', '🍄', '耳のような形のゼリーのキノコ', '耳の形をした、ゼリー状でこりこりしたキノコ。乾燥させて売られ、水でもどして料理に使う。', '広葉樹の枯れ木（北半球の温帯）。', '名前は、木に生える「クラゲ」に見立てたもの。' + WILD),
      S('アラゲキクラゲ', 'Auricularia cornea', '🍄', '毛がある黒いキクラゲ', '黒っぽい耳の形のキノコ。外側の面に細かい毛が生えているので、「荒毛」の名前がついた。', '広葉樹の枯れ木（暖かい地域）。', '中華料理などで、よく使われる。' + WILD)
    ], '耳のような形で、ゼリー状のキノコの仲間。'));
  X.add([FU, BA, 'Tremellomycetes', 'Tremellales', 'Tremellaceae'],
    G('シロキクラゲ属', 'Tremella', [
      S('シロキクラゲ', 'Tremella fuciformis', '🍄', '白いゼリーのような花のキノコ', '白くて透明感のある、花びらのようなゼリー状のキノコ。乾燥して売られている。', '広葉樹の枯れ木（暖かい地域）。', '中国料理のデザート（甘いスープ）に使われる。')
    ], 'ゼリー状のキノコの仲間。'));

  /* --- 子嚢菌門 --- */
  X.def('Schizosaccharomycetes', 'シゾサッカロミケス綱', '分裂してふえる酵母の仲間。', null);
  X.def('Schizosaccharomycetales', 'シゾサッカロミケス目', '分裂酵母の仲間。', null);
  X.def('Schizosaccharomycetaceae', 'シゾサッカロミケス科', '分裂酵母の仲間。', null);
  X.def('Debaryomycetaceae', 'デバリオミケス科', 'カンジダなどを含む酵母の仲間。', null);
  X.def('Dothideomycetes', 'クロイボタケ綱', '黒っぽいカビなど、とても多様な子嚢菌の綱。', null);
  X.def('Capnodiales', 'ススカビ目', '黒いカビ（すすのような見た目）を含む仲間。', null);
  X.def('Cladosporiaceae', 'クロカビ科', 'クロカビの仲間。', null);
  X.def('Tuberaceae', 'セイヨウショウロタケ科', 'トリュフなど、地中にできる子嚢菌の仲間。', null);
  X.def('Sarcoscyphaceae', 'ベニチャワンタケ科', '赤い茶碗のような形のキノコの仲間。', null);
  X.def('Hypocreales', 'ボタンタケ目', '虫に寄生する冬虫夏草や、麦角菌などを含む仲間。', null);
  X.def('Hypocreaceae', 'ボタンタケ科', 'カエンタケなどを含む仲間。', null);
  X.def('Cordycipitaceae', 'ノムシタケ科', 'サナギタケなど、虫に寄生する菌の仲間。', null);
  X.def('Ophiocordycipitaceae', 'オフィオコルディセプス科', '冬虫夏草（トウチュウカソウ）の仲間。', null);
  X.def('Clavicipitaceae', 'バッカクキン科', '植物に寄生する、麦角菌などの仲間。', null);
  X.def('Lecanoromycetes', 'チャシブゴケ綱', '地衣類（菌と藻類がいっしょに生活する生き物）の多くが入る綱。', null);
  X.def('Lecanorales', 'チャシブゴケ目', 'ハナゴケやサルオガセなどを含む地衣類の仲間。', null);
  X.def('Cladoniaceae', 'ハナゴケ科', 'ハナゴケなどの地衣類の仲間。', null);
  X.def('Parmeliaceae', 'ウメノキゴケ科', 'ウメノキゴケやサルオガセなどの地衣類の仲間。', null);
  X.def('Mucoromycota', 'ケカビ門', 'ケカビやクモノスカビなどを含む、昔から「カビ」とよばれてきた菌の一群。', null);
  X.def('Mucoromycetes', 'ケカビ綱', 'ケカビの仲間。', null);
  X.def('Mucorales', 'ケカビ目', 'ケカビやクモノスカビなど。', null);
  X.def('Mucoraceae', 'ケカビ科', 'ケカビの仲間。', null);
  X.def('Rhizopodaceae', 'クモノスカビ科', 'クモノスカビの仲間。', null);

  X.add([FU, AS, 'Saccharomycetes', 'Saccharomycetales', 'Saccharomycetaceae'],
    G('サッカロミケス属', 'Saccharomyces', [
      S('ビール酵母', 'Saccharomyces pastorianus', '🍺', 'ラガービールをつくる酵母', '低い温度でビールを発酵させる酵母。二つの酵母が交雑してできたとされる。', 'ビールの工場や醸造所。', 'パン酵母とは別の種類だが、親せきのような関係にある。', 'びーるこうぼ')
    ]));
  X.add([FU, AS, 'Saccharomycetes', 'Saccharomycetales', 'Debaryomycetaceae'],
    G('カンジダ属', 'Candida', [
      S('カンジダ', 'Candida albicans', '🦠', '人の体にもすむ酵母', 'ふつうは口や腸などに少しだけすみ、悪さをしない酵母。体の調子がくずれると、ふえて病気になることもある。', '人の口・腸・皮ふなど。', '手洗いや歯みがきなど、ふだんの衛生や、体の調子をととのえることが大切。')
    ], '酵母の仲間で、人の体にいる種類も知られる。'));
  X.add([FU, AS, 'Schizosaccharomycetes', 'Schizosaccharomycetales', 'Schizosaccharomycetaceae'],
    G('シゾサッカロミケス属', 'Schizosaccharomyces', [
      S('分裂酵母', 'Schizosaccharomyces pombe', '🧫', '真ん中で二つに分かれる酵母', '細長い細胞が、真ん中で二つに分かれてふえる。細胞のしくみを調べる研究によく使われる。', '果物や発酵物など（研究室でも培養される）。', '細胞が分裂する仕組みの研究は、ノーベル賞にもつながった。', 'ぶんれつこうぼ')
    ], '細胞が二つに分かれてふえる酵母の仲間。'));

  X.add([FU, AS, 'Eurotiomycetes', 'Eurotiales', 'Aspergillaceae'],
    G('コウジカビ属', 'Aspergillus', [
      S('クロコウジカビ', 'Aspergillus niger', '🧫', '黒い胞子をつくるカビ', '黒っぽい胞子をつくる。クエン酸をつくるのに使われる。', '土・食品・屋内など、世界中。', '沖縄の泡盛づくりには、この仲間の「黒麹菌」が使われる。')
    ]));
  X.add([FU, AS, 'Eurotiomycetes', 'Eurotiales', 'Aspergillaceae'],
    G('アオカビ属', 'Penicillium', [
      S('カマンベールチーズのカビ', 'Penicillium camemberti', '🧀', '白いチーズの皮をつくるカビ', 'カマンベールチーズの表面に、白くふわふわしたカビの層をつくる。', 'チーズの熟成庫。', 'カビがチーズの味を変え、クリームのようにやわらかくする。'),
      S('ロックフォールチーズのカビ', 'Penicillium roqueforti', '🧀', 'ブルーチーズの青いカビ', 'チーズの中に青緑の筋をつくる。独特の香りと味を生み出す。', 'チーズの熟成庫（洞窟で熟成されるものもある）。', 'ブルーチーズのこの青い筋は、このカビによるもの。')
    ]));

  X.add([FU, AS, 'Dothideomycetes', 'Capnodiales', 'Cladosporiaceae'],
    G('クラドスポリウム属', 'Cladosporium', [
      S('クロカビ', 'Cladosporium cladosporioides', '🧫', '浴室や壁に出る黒いカビ', '湿気の多い場所で、黒っぽい点々になって広がる。空気中にも胞子がたくさんただよう。', '家の壁・お風呂・窓のまわりなど、世界中。', '換気と掃除で、増えにくくできる。')
    ], '黒っぽいカビの仲間。家の中や外で見られる。'));

  X.add([FU, AS, 'Pezizomycetes', 'Pezizales', 'Tuberaceae'],
    G('トリュフ属', 'Tuber', [
      S('クロトリュフ', 'Tuber melanosporum', '🍄', '地面の下にできる高級キノコ', '木の根と助け合って、地中に丸いかたまりをつくる。強い香りがあり、イヌやブタなどで探すことがある。', 'フランスやスペイン、イタリアのカシなどの林の地下。', '「黒いダイヤ」と呼ばれる高級食材。'),
      S('シロトリュフ', 'Tuber magnatum', '🍄', '香りが強い白いトリュフ', '地中にできる白っぽいトリュフ。栽培がむずかしく、とても高価。', 'イタリア北部などの林の地下。', '黒いトリュフとはまた別の香りで、料理の仕上げに薄く削ってかける。')
    ], '地面の下にできる、香りの強いキノコの仲間。'));
  X.add([FU, AS, 'Pezizomycetes', 'Pezizales', 'Sarcoscyphaceae'],
    G('ベニチャワンタケ属', 'Sarcoscypha', [
      S('ベニチャワンタケ', 'Sarcoscypha coccinea', '🍄', '赤い小さな茶碗のキノコ', '真っ赤な茶碗のような形で、落ちた枝などに生える。冬〜春に目立つ。', '湿った林の中の落ち枝（北半球）。', '雪どけのころに見つかることがあり、鮮やかな赤が目に入る。')
    ], '赤い茶碗のような形のキノコの仲間。'));

  X.add([FU, AS, 'Sordariomycetes', 'Hypocreales', 'Hypocreaceae'],
    G('トリコデルマ属', 'Trichoderma', [
      S('カエンタケ', 'Trichoderma cornu-damae', '🔥', '炎のような猛毒キノコ', '赤〜オレンジ色で、指のような形のキノコ。触れただけで、皮ふがただれることがあるといわれる猛毒。', '広葉樹の林（日本など東アジア）。', '見つけても、触らない・食べない。' + WILD)
    ], '多くは土の中にすむカビ。仲間に、猛毒のカエンタケが知られる。'));
  X.add([FU, AS, 'Sordariomycetes', 'Hypocreales', 'Cordycipitaceae'],
    G('サナギタケ属', 'Cordyceps', [
      S('サナギタケ', 'Cordyceps militaris', '🐛', '虫のさなぎから生えるキノコ', 'チョウやガのさなぎなどに寄生して、オレンジ色のこん棒のようなものを伸ばす。', '林の地面や落ち葉の下（世界の温帯）。', '「冬虫夏草」の仲間の一つ。栽培もされている。')
    ], '虫に寄生して、体からキノコを生やす菌の仲間（冬虫夏草）。'));
  X.add([FU, AS, 'Sordariomycetes', 'Hypocreales', 'Cordycipitaceae'],
    G('イサリア属', 'Isaria', [
      S('ハナサナギタケ', 'Isaria japonica', '🐛', '虫のさなぎから白い花が咲くキノコ', 'チョウやガのさなぎなどに寄生し、白い粉をふいたような姿の枝を伸ばす。', '林の地面や落ち葉の下（日本など東アジア）。', '見た目が花のようなので「ハナ」サナギタケの名前がついた。')
    ], '虫に寄生する菌の仲間。'));
  X.add([FU, AS, 'Sordariomycetes', 'Hypocreales', 'Ophiocordycipitaceae'],
    G('オフィオコルディセプス属', 'Ophiocordyceps', [
      S('冬虫夏草', 'Ophiocordyceps sinensis', '🐛', '冬は虫、夏は草と呼ばれたキノコ', 'コウモリガの幼虫に寄生して、体から細長いキノコを伸ばす。中国やチベットで薬として古くから使われた。', 'チベット高原など、標高の高い草原。', '冬は虫の姿で、夏は草のようになる、という名前の由来がある。', 'とうちゅうかそう')
    ], '虫に寄生して育つ、冬虫夏草の仲間。'));
  X.add([FU, AS, 'Sordariomycetes', 'Hypocreales', 'Clavicipitaceae'],
    G('バッカクキン属', 'Claviceps', [
      S('麦角菌', 'Claviceps purpurea', '🌾', 'ライ麦の穂に黒い角をつくる菌', 'ライ麦などの穂に、黒い角のような菌核をつくる。', 'ライ麦・ムギなどの穂（世界の温帯）。', '昔のヨーロッパでは、この菌に汚れた穀物で中毒が起きた。成分は薬の原料にもなった。', 'ばっかくきん')
    ], 'イネ科の植物に寄生する菌の仲間。'));

  X.add([FU, AS, 'Lecanoromycetes', 'Lecanorales', 'Cladoniaceae'],
    G('ハナゴケ属', 'Cladonia', [
      S('ハナゴケ', 'Cladonia rangiferina', '🌿', 'トナカイが食べる地衣類', '白っぽい灰色の、細かく枝分かれする地衣類。地面にもこもこと広がる。', '北極に近い寒い地域や、高い山の地面。', '英語では「トナカイの苔」と呼ばれる。模型の木としても使われる。')
    ], '地面に細かく枝分かれして広がる地衣類の仲間。'));
  X.add([FU, AS, 'Lecanoromycetes', 'Lecanorales', 'Parmeliaceae'],
    G('サルオガセ属', 'Dolichousnea', [
      S('ナガサルオガセ', 'Dolichousnea longissima', '🌿', '木から長く垂れ下がる地衣類', '糸のような体が、木の枝からとても長く垂れ下がる。', '霧の多い山の森（北半球の山地）。', '地衣類は、菌と藻類がいっしょに生活する生き物。')
    ], '木の枝から長く垂れ下がる地衣類の仲間。'));
  X.add([FU, AS, 'Lecanoromycetes', 'Lecanorales', 'Parmeliaceae'],
    G('ウメノキゴケ属', 'Parmotrema', [
      S('ウメノキゴケ', 'Parmotrema tinctorum', '🌿', '街路樹などにはりつく地衣類', '灰緑色で葉のような形をした地衣類。木の幹や岩にはりつく。', '街路樹・庭木・神社の木など（暖かい地域）。', '地衣類は、空気の状態を調べる手がかりに使われることがある。')
    ], '葉のように広がる地衣類の仲間。'));

  X.add([FU, 'Mucoromycota', 'Mucoromycetes', 'Mucorales', 'Mucoraceae'],
    G('ケカビ属', 'Mucor', [
      S('ケカビ', 'Mucor mucedo', '🧫', '白い毛のようなカビ', '白くて長い毛のような菌糸が、のびてふわふわと広がる。', '動物のふん、腐った食べ物、土など。', '菌糸にほとんど仕切りがない、昔ながらのタイプのカビ。')
    ], '白い毛のようなカビの仲間。'));
  X.add([FU, 'Mucoromycota', 'Mucoromycetes', 'Mucorales', 'Rhizopodaceae'],
    G('クモノスカビ属', 'Rhizopus', [
      S('クモノスカビ', 'Rhizopus stolonifer', '🧫', 'クモの巣のように広がるカビ', 'パンや果物の上に、クモの巣のように広がる。黒い点々は、胞子の入ったふくろ。', 'パン・果物・野菜など、世界中。', '名前は、クモの巣のように広がる菌糸から。パンに生える黒いカビの代表。'),
      S('テンペ菌', 'Rhizopus microsporus', '🫘', 'テンペをつくる菌', '大豆などを固めて、白いかたまりにする。', 'インドネシアなど。', 'インドネシアの発酵食品「テンペ」づくりに使われる。', 'てんぺきん')
    ], 'クモの巣のように広がるカビの仲間。'));

  /* ===================== 原生生物界 ===================== */
  var PR = 'Protista';

  /* --- 繊毛虫門・ユーグレノゾア門など（既存の門） --- */
  X.def('Peritrichida', 'ツリガネムシ目', 'ツリガネムシなど、柄でものにくっつく繊毛虫の仲間。', null);
  X.def('Vorticellidae', 'ツリガネムシ科', 'ツリガネムシの仲間。', null);
  X.def('Heterotrichea', 'ヘテロトリケア綱', 'ラッパムシなど、大きな繊毛虫を含む綱。', null);
  X.def('Heterotrichida', 'ヘテロトリケア目', 'ラッパムシなど。', null);
  X.def('Stentoridae', 'ラッパムシ科', 'ラッパムシの仲間。', null);
  X.def('Hymenostomatida', 'ヒメノストマ目', 'テトラヒメナなど、研究によく使われる繊毛虫の仲間。', null);
  X.def('Tetrahymenidae', 'テトラヒメナ科', 'テトラヒメナの仲間。', null);

  X.add([PR, 'Ciliophora', 'Oligohymenophorea', 'Peniculida', 'Parameciidae'],
    G('ゾウリムシ属', 'Paramecium', [
      S('ミドリゾウリムシ', 'Paramecium bursaria', '🦠', '体の中に緑の藻をすまわせる', '体の中に、クロレラの仲間の小さな緑の藻類を飼っている。光を当てると、緑色が目立つ。', '池や沼の水（世界の淡水）。', '緑の藻は光合成で栄養をつくり、ゾウリムシは藻を守る。おたがいに助け合っている。'),
      S('オオゾウリムシ', 'Paramecium multimicronucleatum', '🦠', 'ゾウリムシより大きな仲間', 'ゾウリムシより大きく、体に細かい毛（繊毛）がびっしり生えている。', '池や水たまりの水（世界の淡水）。', '同じゾウリムシの仲間で、顕微鏡で比べると大きさのちがいがわかる。')
    ]));
  X.add([PR, 'Ciliophora', 'Oligohymenophorea', 'Peritrichida', 'Vorticellidae'],
    G('ツリガネムシ属', 'Vorticella', [
      S('ツリガネムシ', 'Vorticella convallaria', '🔔', 'ベルの形をした繊毛虫', 'ベルのような形の体を、長い柄でものにくっつけている。柄はばねのように縮む。', '池や沼、水槽の水草などの表面。', '刺激を受けると、柄がらせん状に縮んで体を引っこめる。')
    ], '柄でものにくっついて、ベルの形の体をもつ繊毛虫の仲間。'));
  X.add([PR, 'Ciliophora', 'Heterotrichea', 'Heterotrichida', 'Stentoridae'],
    G('ラッパムシ属', 'Stentor', [
      S('ラッパムシ', 'Stentor coeruleus', '🎺', 'ラッパの形をした大きな単細胞生物', 'ラッパのような形で、青緑色。大きなものは肉眼でも見えることがある。', '池や水田のよどんだ水（世界の淡水）。', '体を切っても、元に戻る力がとても強いことで知られる。')
    ], 'ラッパの形をした、大きな繊毛虫の仲間。'));
  X.add([PR, 'Ciliophora', 'Oligohymenophorea', 'Hymenostomatida', 'Tetrahymenidae'],
    G('テトラヒメナ属', 'Tetrahymena', [
      S('テトラヒメナ', 'Tetrahymena thermophila', '🦠', '研究で大活躍の繊毛虫', 'ゾウリムシに近い、洋ナシの形をした単細胞生物。育てやすいので研究によく使われる。', '淡水の池や水たまり。', '染色体の端の「テロメア」の研究に使われ、ノーベル賞につながった。')
    ], 'ゾウリムシに近い、小さな繊毛虫の仲間。'));

  /* --- 不等毛植物門（ケイソウ・褐藻・ヒカリモ） --- */
  X.def('Bacillariophyceae', 'ケイソウ綱', 'ガラスの殻をもつ単細胞の藻類、ケイソウの仲間。', null);
  X.def('Fragilariales', 'フラギラリア目', 'ホシガタケイソウなど、細長いケイソウの仲間。', null);
  X.def('Fragilariaceae', 'フラギラリア科', 'ホシガタケイソウなどのケイソウの仲間。', null);
  X.def('Thalassiosirales', 'タラシオシラ目', '丸い形のケイソウを多く含む仲間。', null);
  X.def('Skeletonemaceae', 'スケレトネマ科', 'スケレトネマなど、鎖のようにつながるケイソウの仲間。', null);
  X.def('Chrysophyceae', '黄金色藻綱', '金色にみえる単細胞の藻類の仲間。', 'おうごんしょくそうこう');
  X.def('Hibberdiales', 'ヒカリモ目', 'ヒカリモなど。', null);
  X.def('Hibberdiaceae', 'ヒカリモ科', 'ヒカリモの仲間。', null);
  X.def('Fucales', 'ヒバマタ目', 'ホンダワラやヒジキなど、海の藻場をつくる褐藻の仲間。', null);
  X.def('Sargassaceae', 'ホンダワラ科', 'ヒジキやホンダワラなど。', null);
  X.def('Ectocarpales', 'シオミドロ目', 'モズクなど、細い糸状の褐藻を含む仲間。', null);
  X.def('Chordariaceae', 'ナガマツモ科', 'モズクやイシモズクなど。', null);
  X.def('Laminariales', 'コンブ目', 'コンブ・ワカメなど、大型の褐藻の仲間。', null);
  X.def('Costariaceae', 'スジメ科', 'スジメの仲間。', null);
  X.def('Dictyotales', 'アミジグサ目', 'アミジグサなど。', null);
  X.def('Dictyotaceae', 'アミジグサ科', 'アミジグサやウミウチワなど。', null);
  X.def('Scytosiphonales', 'カヤモノリ目', 'ブクロノリなど。', null);
  X.def('Scytosiphonaceae', 'カヤモノリ科', 'ブクロノリなど。', null);

  X.add([PR, 'Ochrophyta', 'Bacillariophyceae', 'Fragilariales', 'Fragilariaceae'],
    G('ホシガタケイソウ属', 'Asterionella', [
      S('ホシガタケイソウ', 'Asterionella formosa', '⭐', '星の形に並ぶケイソウ', '細長い細胞が中心でくっついて、星のような形になる。', '湖や池のプランクトン。', 'ケイソウは、ガラスと同じ成分の殻をもつ。')
    ], '細長い細胞が星の形につながるケイソウの仲間。'));
  X.add([PR, 'Ochrophyta', 'Bacillariophyceae', 'Thalassiosirales', 'Skeletonemaceae'],
    G('スケレトネマ属', 'Skeletonema', [
      S('スケレトネマ', 'Skeletonema costatum', '🌊', '鎖のようにつながる海のケイソウ', '丸い細胞が細い糸でつながり、鎖のようになる。', '沿岸の海水（世界の海）。', '海の食物連鎖のもとになる植物プランクトン。大発生すると赤潮のように見えることもある。')
    ], '丸い細胞が鎖のようにつながるケイソウの仲間。'));
  X.add([PR, 'Ochrophyta', 'Chrysophyceae', 'Hibberdiales', 'Hibberdiaceae'],
    G('ヒカリモ属', 'Chromophyton', [
      S('ヒカリモ', 'Chromophyton rosanoffii', '✨', '水面を金色に光らせる藻', '光を当てると、水面が金色に光って見える単細胞の藻類。', '日かげの池や水たまり、湧き水など（世界の温帯）。', '金色に光るのは、細胞が水面に集まって光を反射するから。')
    ], '金色に光って見える単細胞の藻類の仲間。'));

  X.add([PR, 'Ochrophyta', 'Phaeophyceae', 'Fucales', 'Sargassaceae'],
    G('ホンダワラ属', 'Sargassum', [
      S('ヒジキ', 'Sargassum fusiforme', '🌿', '煮物でおなじみの海藻', '細い枝分かれした海藻で、乾燥させると黒くなる。ゆでて干して売られる。', '日本各地の海岸の岩場の潮間帯。', '「ひじきの煮物」でおなじみ。ホンダワラの仲間。'),
      S('ホンダワラ', 'Sargassum fulvellum', '🌿', '浮き袋がある海藻', '枝に小さな丸い気胞（浮き袋）がつき、海の中で立ち上がる。', '日本各地の浅い海の岩場。', 'ホンダワラの仲間は藻場をつくり、小さな魚の隠れ家になる。'),
      S('アカモク', 'Sargassum horneri', '🌿', 'ねばねばの食べられる海藻', '長く伸びる海藻。ゆでると緑色になり、ねばねばした食感がある。', '日本各地の海の岩場。', '東北などの地域では、食用にされている。'),
      S('ウミトラノオ', 'Sargassum thunbergii', '🌿', '潮だまりでよく見る海藻', '岩場の潮だまりなどで見られる、短くて茶色いホンダワラの仲間。', '日本各地の海岸の潮間帯の岩場。', '名前は、枝の形がトラのしっぽに似ていることから。')
    ], 'ヒジキやホンダワラなど、気胞（浮き袋）をもつ褐藻の仲間。'));
  X.add([PR, 'Ochrophyta', 'Phaeophyceae', 'Ectocarpales', 'Chordariaceae'],
    G('オキナワモズク属', 'Cladosiphon', [
      S('オキナワモズク', 'Cladosiphon okamuranus', '🌿', '沖縄で養殖されるモズク', 'ぬるぬるした細い糸のような海藻で、茶色〜黄緑色。酢の物や天ぷらなどで食べられる。', '沖縄などの暖かい海。養殖が盛ん。', '国内で売られているモズクの多くは沖縄県産。')
    ], 'ぬめりのある糸状の褐藻の仲間。'));
  X.add([PR, 'Ochrophyta', 'Phaeophyceae', 'Ectocarpales', 'Chordariaceae'],
    G('イシモズク属', 'Sphaerotrichia', [
      S('イシモズク', 'Sphaerotrichia divaricata', '🌿', 'しっかりした歯ごたえのモズク', '枝分かれした糸状の褐藻で、ぬめりと歯ごたえがある。', '日本の暖かい海の岩場。', '沖縄などでは、食用にされている。')
    ], '糸状の枝分かれした褐藻の仲間。'));
  X.add([PR, 'Ochrophyta', 'Phaeophyceae', 'Laminariales', 'Costariaceae'],
    G('スジメ属', 'Costaria', [
      S('スジメ', 'Costaria costata', '🌿', '縦のすじがある褐藻', '長い葉に縦のすじ（盛り上がり）が並ぶ海藻。', '北日本を中心とした、冷たい海の岩場。', 'コンブの仲間と同じ、コンブ目の褐藻。')
    ], '葉に縦のすじがある褐藻の仲間。'));
  X.add([PR, 'Ochrophyta', 'Phaeophyceae', 'Dictyotales', 'Dictyotaceae'],
    G('アミジグサ属', 'Dictyota', [
      S('アミジグサ', 'Dictyota dichotoma', '🌿', '二つに分かれていく海藻', 'リボンのような平たい体が、Y字に二股に分かれていく。', '日本各地の海岸の岩場。', '潮だまりでもよく見る海藻。')
    ], '二股に分かれる平たい褐藻の仲間。'));
  X.add([PR, 'Ochrophyta', 'Phaeophyceae', 'Dictyotales', 'Dictyotaceae'],
    G('ウミウチワ属', 'Padina', [
      S('ウミウチワ', 'Padina arborescens', '🌿', 'うちわの形をした海藻', '扇のような形で、表面に同心円のすじがある。', '日本の暖かい海の岩場。', '名前のとおり、うちわのような形をしている。')
    ], 'うちわのような形の褐藻の仲間。'));
  X.add([PR, 'Ochrophyta', 'Phaeophyceae', 'Scytosiphonales', 'Scytosiphonaceae'],
    G('ブクロノリ属', 'Colpomenia', [
      S('ブクロノリ', 'Colpomenia sinuosa', '🌿', '空気で膨らむ袋のような海藻', '中が空洞で、ふくろのように膨らんだ形の褐藻。', '日本各地の海岸の岩場。', '中の空気で、岩からはがれて浮くこともある。')
    ], 'ふくろ状の褐藻の仲間。'));

  /* --- 紅藻植物門 --- */
  X.def('Rhodophyta', '紅藻植物門', '赤っぽい色素をもつ藻類。ノリ、テングサ、オゴノリなどを含む。', 'こうそうしょくぶつもん');
  X.def('Bangiophyceae', 'ウシケノリ綱', 'ノリの仲間を含む紅藻の綱。', null);
  X.def('Bangiales', 'ウシケノリ目', 'ノリ（アマノリ）の仲間。', null);
  X.def('Bangiaceae', 'ウシケノリ科', 'ノリの仲間。', null);
  X.def('Florideophyceae', '真正紅藻綱', '紅藻の中で、体のつくりが複雑なものが入る綱。', 'しんせいこうそうこう');
  X.def('Gelidiales', 'テングサ目', 'テングサの仲間。', null);
  X.def('Gelidiaceae', 'テングサ科', 'テングサの仲間。', null);
  X.def('Gracilariales', 'オゴノリ目', 'オゴノリの仲間。', null);
  X.def('Gracilariaceae', 'オゴノリ科', 'オゴノリの仲間。', null);
  X.def('Gigartinales', 'スギノリ目', 'ツノマタやスギノリなど。', null);
  X.def('Gigartinaceae', 'スギノリ科', 'ツノマタなど。', null);

  X.add([PR, 'Rhodophyta', 'Bangiophyceae', 'Bangiales', 'Bangiaceae'],
    G('アマノリ属', 'Pyropia', [
      S('スサビノリ', 'Pyropia yezoensis', '🍙', '海苔の養殖で使われる主役', '養殖されるノリの大部分を占める種類。薄い葉のような体をもつ。', '日本の沿岸（養殖が盛ん）。', '紅藻だが、赤くは見えない。乾燥させると黒緑色に。'),
      S('アサクサノリ', 'Pyropia tenera', '🍙', '江戸時代から親しまれたノリ', '薄い葉のような体をもつ。江戸前の海苔として有名だった。', '内湾の河口の近く（日本の沿岸）。', '養殖には、より育てやすいスサビノリが使われるようになり、天然のものは少なくなっている。')
    ], '海苔の原料になる、薄い葉のような紅藻の仲間。'));
  X.add([PR, 'Rhodophyta', 'Florideophyceae', 'Gelidiales', 'Gelidiaceae'],
    G('テングサ属', 'Gelidium', [
      S('マクサ', 'Gelidium elegans', '🌿', '「テングサ」の代表で寒天の原料', '細かく枝分かれした、赤紫色の海藻。ところてんや寒天の原料になる。', '日本各地の海の岩場。', '寒天は、この海藻などを煮て固めてつくる。')
    ], '寒天の原料になる、細かく枝分かれした紅藻の仲間。'));
  X.add([PR, 'Rhodophyta', 'Florideophyceae', 'Gracilariales', 'Gracilariaceae'],
    G('オゴノリ属', 'Gracilaria', [
      S('オゴノリ', 'Gracilaria vermiculophylla', '🌿', 'お刺身のつまにもなる海藻', 'ひも状の紅藻。お刺身のつまに使われ、ゆでると色が変わる。', '日本各地の内湾の砂泥底など。', '寒天の原料にもなる。')
    ], 'ひも状の紅藻の仲間。'));
  X.add([PR, 'Rhodophyta', 'Florideophyceae', 'Gigartinales', 'Gigartinaceae'],
    G('ツノマタ属', 'Chondrus', [
      S('ツノマタ', 'Chondrus ocellatus', '🌿', '角のように分かれる紅藻', '先が角のように分かれる、平たい紅藻。ぬのり（のりづけ）の材料や食用にされた。', '日本各地の海岸の岩場。', '昔は、布のりづけに使われた。'),
      S('アイリッシュモス', 'Chondrus crispus', '🌿', 'ヨーロッパの海で採れる紅藻', '同じ属の仲間で、ヨーロッパの大西洋の海岸に生える。食品の増粘剤（ゲルをつくる成分）の原料にされる。', '北大西洋の岩場の海岸。', 'ゲルをつくる成分「カラギーナン」の原料の一つ。')
    ], '先が角のように分かれる紅藻の仲間。'));

  /* --- 緑藻植物門 --- */
  X.def('Chlamydomonadaceae', 'クラミドモナス科', 'クラミドモナスなど。', null);
  X.def('Sphaeropleales', 'ヨコワミドロ目', 'アミミドロなどを含む緑藻の仲間。', null);
  X.def('Hydrodictyaceae', 'アミミドロ科', 'アミミドロの仲間。', null);
  X.def('Trebouxiophyceae', 'トレボウクシア藻綱', 'クロレラなど、単細胞の緑藻を含む綱。', 'とれぼうくしあそうこう');
  X.def('Chlorellales', 'クロレラ目', 'クロレラの仲間。', null);
  X.def('Chlorellaceae', 'クロレラ科', 'クロレラの仲間。', null);
  X.def('Ulvophyceae', 'アオサ藻綱', 'アオサやアオノリなど、主に海にすむ緑藻の綱。', 'あおさそうこう');
  X.def('Ulvales', 'アオサ目', 'アオサやアオノリなど。', null);
  X.def('Ulvaceae', 'アオサ科', 'アオサやアオノリの仲間。', null);
  X.def('Bryopsidales', 'ミドリゲ目', 'ウミブドウやミルなど、大きな細胞でできた緑藻の仲間。', null);
  X.def('Caulerpaceae', 'イワヅタ科', 'ウミブドウなどの仲間。', null);
  X.def('Codiaceae', 'ミル科', 'ミルの仲間。', null);
  X.def('Cladophorales', 'シオグサ目', 'マリモなど、糸のような緑藻の仲間。', null);
  X.def('Cladophoraceae', 'シオグサ科', 'マリモなどの仲間。', null);

  X.add([PR, 'Chlorophyta', 'Chlorophyceae', 'Volvocales', 'Volvocaceae'],
    G('ボルボックス属', 'Volvox', [
      S('ボルボックス・アウレウス', 'Volvox aureus', '🟢', 'ボルボックスの近縁種', '数百〜数千の細胞が集まって、緑の丸い球になって泳ぐ。', '池や水田（世界の淡水）。', '同じ属のボルボックスとくらべると、細胞の数や並び方がちがう。', 'ぼるぼっくすあうれうす')
    ]));
  X.add([PR, 'Chlorophyta', 'Chlorophyceae', 'Volvocales', 'Chlamydomonadaceae'],
    G('クラミドモナス属', 'Chlamydomonas', [
      S('クラミドモナス', 'Chlamydomonas reinhardtii', '🟢', '二本のむちで泳ぐ緑の藻', '1個の細胞で、2本のむち（鞭毛）で泳ぐ。眼点で光を感じて動く。', '土や池などの水（世界各地）。', '研究室でよく育てられる、実験用の生き物。')
    ], '2本のむちで泳ぐ、単細胞の緑藻の仲間。'));
  X.add([PR, 'Chlorophyta', 'Chlorophyceae', 'Sphaeropleales', 'Hydrodictyaceae'],
    G('アミミドロ属', 'Hydrodictyon', [
      S('アミミドロ', 'Hydrodictyon reticulatum', '🕸️', '水の中で網になる緑藻', '多くの細胞がつながって、網のような袋になる。', '田んぼや池の水（世界各地）。', '田んぼや池にたまに大発生して、緑色の網が水面にただよう。')
    ], '細胞がつながって網のような形になる緑藻の仲間。'));
  X.add([PR, 'Chlorophyta', 'Trebouxiophyceae', 'Chlorellales', 'Chlorellaceae'],
    G('クロレラ属', 'Chlorella', [
      S('クロレラ', 'Chlorella vulgaris', '🟢', '小さな球の緑藻', '1個の細胞でできた、小さな丸い緑藻。光合成をする。', '池・水田・土の表面など。', '栄養食品の原料として培養されている。ミドリゾウリムシなどの体に共生する仲間もいる。')
    ], '小さな丸い単細胞の緑藻の仲間。'));
  X.add([PR, 'Chlorophyta', 'Ulvophyceae', 'Ulvales', 'Ulvaceae'],
    G('アオサ属', 'Ulva', [
      S('アナアオサ', 'Ulva australis', '🥬', 'うすくて緑色の海藻', '薄い緑色の膜のような海藻で、葉に小さな穴があくことがある。', '日本各地の海岸・内湾の岩場。', '栄養が多い海で、大量に増えることがある。食用にもなる。'),
      S('スジアオノリ', 'Ulva prolifera', '🌿', '青のりとして使われる', '細長い、緑色の管のような形の海藻。乾燥させて、青のりとして使われる。', '河口や内湾（日本各地）。', 'お好み焼きなどにかける「あおのり」の原料になる。'),
      S('ボウアオノリ', 'Ulva intestinalis', '🌿', '管のような形をした緑藻', '細長く、中が空洞になった管のような緑色の海藻。', '河口や内湾の岩場（世界各地）。', '同じアオサ属で、塩分の薄い場所でも育つ。')
    ], 'アオサやアオノリなど、薄い膜や管の形の緑藻の仲間。'));
  X.add([PR, 'Chlorophyta', 'Ulvophyceae', 'Bryopsidales', 'Caulerpaceae'],
    G('イワヅタ属', 'Caulerpa', [
      S('ウミブドウ', 'Caulerpa lentillifera', '🍇', 'ぷちぷち食感の「海のぶどう」', '緑色の小さな粒がたくさんついた海藻。ぷちぷちとした食感で食べられる。', '沖縄などの暖かい海（養殖もされる）。', '体は仕切りのない、大きな1つの細胞でできている。')
    ], '大きな1つの細胞でできた緑藻の仲間。'));
  X.add([PR, 'Chlorophyta', 'Ulvophyceae', 'Bryopsidales', 'Codiaceae'],
    G('ミル属', 'Codium', [
      S('ミル', 'Codium fragile', '🌿', 'シカの角のような海藻', '緑色で、シカの角のように二股に分かれる、ふかふかした海藻。', '日本各地の海岸の岩場。', '食用にされる地域もある。')
    ], '二股に分かれた、スポンジのような緑藻の仲間。'));
  X.add([PR, 'Chlorophyta', 'Ulvophyceae', 'Cladophorales', 'Cladophoraceae'],
    G('マリモ属', 'Aegagropila', [
      S('マリモ', 'Aegagropila linnaei', '🟢', '丸くなる緑藻', '糸のような緑藻が、丸いかたまりになる。波にころがされて、球の形をたもつ。', '北海道の阿寒湖など、寒い地方の湖。', '阿寒湖のマリモは、国の特別天然記念物。')
    ], '糸のような緑藻が丸くなる仲間。'));

  /* --- 車軸藻植物門 --- */
  X.def('Charophyta', '車軸藻植物門', '陸上植物に近い淡水の藻類。ミカヅキモやアオミドロ、シャジクモなど。', 'しゃじくもしょくぶつもん');
  X.def('Zygnematophyceae', '接合藻綱', '接合という方法でふえる、淡水の藻類。', 'せつごうそうこう');
  X.def('Zygnematales', 'ホシミドロ目', 'アオミドロやミカヅキモを含む仲間。', null);
  X.def('Closteriaceae', 'ミカヅキモ科', 'ミカヅキモの仲間。', null);
  X.def('Zygnemataceae', 'ホシミドロ科', 'アオミドロの仲間。', null);
  X.def('Charophyceae', 'シャジクモ綱', 'シャジクモの仲間。', null);
  X.def('Charales', 'シャジクモ目', 'シャジクモなど。', null);
  X.def('Characeae', 'シャジクモ科', 'シャジクモの仲間。', null);

  X.add([PR, 'Charophyta', 'Zygnematophyceae', 'Zygnematales', 'Closteriaceae'],
    G('ミカヅキモ属', 'Closterium', [
      S('ミカヅキモ', 'Closterium ehrenbergii', '🌙', '三日月の形の単細胞生物', '三日月の形をした緑色の単細胞生物。顕微鏡で見られる。', '池や水田（世界の淡水）。', '理科の観察でもおなじみ。')
    ], '三日月の形をした単細胞の藻類の仲間。'));
  X.add([PR, 'Charophyta', 'Zygnematophyceae', 'Zygnematales', 'Zygnemataceae'],
    G('アオミドロ属', 'Spirogyra', [
      S('アオミドロ', 'Spirogyra communis', '🌿', 'らせん形の葉緑体をもつ糸状の藻', '細胞が一列につながって糸のようになる。細胞の中に、らせん状の葉緑体がある。', '池・水田・小川（世界の淡水）。', '水面に緑のぬるぬるした糸のかたまりとして見える。')
    ], '細胞が糸のようにつながる、淡水の藻類の仲間。'));
  X.add([PR, 'Charophyta', 'Charophyceae', 'Charales', 'Characeae'],
    G('シャジクモ属', 'Chara', [
      S('シャジクモ', 'Chara braunii', '🌿', '車輪のような枝が出る藻', '節から、車輪の輻（スポーク）のような細い枝が出る。', '水田や池など（東アジアなど）。', '陸上植物に近い仲間とされ、水田の生き物として知られる。')
    ], '節から車輪のように枝が出る淡水の藻類の仲間。'));

  /* --- ミゾゾア門（渦鞭毛藻・アピコンプレクサ類） --- */
  X.def('Myzozoa', 'ミゾゾア門', '渦鞭毛藻（夜光虫など）や、マラリア原虫・トキソプラズマなど寄生性の単細胞生物を含む門。', null);
  X.def('Dinophyceae', '渦鞭毛藻綱', '2本のむちをもち、海や湖で大発生して赤潮の原因にもなる単細胞生物の仲間。', 'うずべんもうそうこう');
  X.def('Noctilucales', 'ヤコウチュウ目', '夜光虫の仲間。', null);
  X.def('Noctilucaceae', 'ヤコウチュウ科', '夜光虫の仲間。', null);
  X.def('Aconoidasida', 'アコノイダシダ綱', 'マラリア原虫などを含む寄生性の単細胞生物の綱。', null);
  X.def('Haemospororida', 'ヘモスポロリダ目', 'マラリア原虫などの仲間。', null);
  X.def('Plasmodiidae', 'マラリア原虫科', 'マラリア原虫の仲間。', 'まらりあげんちゅうか');
  X.def('Conoidasida', 'コノイダシダ綱', 'トキソプラズマなど、寄生性の単細胞生物を含む綱。', null);
  X.def('Eucoccidiorida', 'ユーコクシジウム目', 'トキソプラズマなどの仲間。', null);
  X.def('Sarcocystidae', 'サルコシスティス科', 'トキソプラズマの仲間。', null);

  X.add([PR, 'Myzozoa', 'Dinophyceae', 'Noctilucales', 'Noctilucaceae'],
    G('ヤコウチュウ属', 'Noctiluca', [
      S('夜光虫', 'Noctiluca scintillans', '🌊', '刺激されると青く光る海のプランクトン', '刺激を受けると青白く光る単細胞の生物。肉眼で見える大きさのものもいる。', '世界各地の沿岸の海。', '大量に増えると赤潮になり、昼は赤く、夜は青白く光ることがある。', 'やこうちゅう')
    ], '刺激されると青白く光る、海の単細胞生物の仲間。'));
  X.add([PR, 'Myzozoa', 'Aconoidasida', 'Haemospororida', 'Plasmodiidae'],
    G('マラリア原虫属', 'Plasmodium', [
      S('熱帯熱マラリア原虫', 'Plasmodium falciparum', '🦟', '蚊が運ぶマラリアの原因となる原虫', '蚊（ハマダラカ）に刺されたときに、体の中に入る単細胞の寄生生物。', '熱帯・亜熱帯の地域、特にアフリカ。', '蚊を防ぐ蚊帳や薬の研究が進められ、2015年にはマラリアの治療薬の研究にノーベル賞が贈られた。', 'ねったいねつまらりあげんちゅう')
    ], '蚊が運ぶ、寄生性の単細胞生物の仲間。', 'まらりあげんちゅうぞく'));
  X.add([PR, 'Myzozoa', 'Conoidasida', 'Eucoccidiorida', 'Sarcocystidae'],
    G('トキソプラズマ属', 'Toxoplasma', [
      S('トキソプラズマ', 'Toxoplasma gondii', '🦠', 'ネコを最終的な宿主とする寄生生物', '人を含むさまざまな動物に感染する単細胞の寄生生物。ネコ科の動物の腸で、卵のようなものをつくる。', '世界各地。', '肉は中までよく加熱し、ネコのトイレの掃除や土いじりのあとは手をよく洗うと予防できる。')
    ], '動物に寄生する単細胞生物の仲間。'));

  /* --- アメーバ動物門・粘菌類 --- */
  X.def('Amoebozoa', 'アメーバ動物門', 'アメーバのように形を変えて動く単細胞生物の仲間。', 'あめーばどうぶつもん');
  X.def('Lobosa', 'ロボサ綱', 'ふつうのアメーバの仲間を含む綱。', null);
  X.def('Amoebida', 'アメーバ目', 'アメーバ・プロテウスなど。', null);
  X.def('Amoebidae', 'アメーバ科', 'アメーバの仲間。', null);
  X.def('Mycetozoa', 'ミセトゾア門', '粘菌（変形菌・細胞性粘菌）の仲間。', null);
  X.def('Myxomycetes', '変形菌綱', '変形菌（真正粘菌）の仲間。', 'へんけいきんこう');
  X.def('Physarales', 'モジホコリ目', 'モジホコリなど。', null);
  X.def('Physaraceae', 'モジホコリ科', 'モジホコリなど。', null);
  X.def('Stemonitidales', 'ムラサキホコリ目', 'ムラサキホコリなど。', null);
  X.def('Stemonitidaceae', 'ムラサキホコリ科', 'ムラサキホコリの仲間。', null);
  X.def('Cribrariales', 'クリバリア目', 'マメホコリなど。', null);
  X.def('Tubiferaceae', 'マメホコリ科', 'マメホコリの仲間。', null);
  X.def('Dictyosteliomycetes', 'タマホコリカビ綱', '細胞性粘菌の仲間。', null);
  X.def('Dictyosteliales', 'タマホコリカビ目', 'タマホコリカビの仲間。', null);
  X.def('Dictyosteliaceae', 'タマホコリカビ科', 'タマホコリカビの仲間。', null);

  X.add([PR, 'Amoebozoa', 'Lobosa', 'Amoebida', 'Amoebidae'],
    G('アメーバ属', 'Amoeba', [
      S('アメーバ・プロテウス', 'Amoeba proteus', '🦠', '形を変えながら動くアメーバ', '体から「偽足」というものを出して、形を変えながら動き、食べ物を包みこんで食べる。', '池の底の泥や水草のまわり。', 'プロテウスは、姿を自由に変えるギリシャ神話の海の神の名前。', 'あめーばぷろてうす')
    ], '偽足という足のようなものを出して動く単細胞生物の仲間。'));
  X.add([PR, 'Mycetozoa', 'Myxomycetes', 'Physarales', 'Physaraceae'],
    G('モジホコリ属', 'Physarum', [
      S('モジホコリ', 'Physarum polycephalum', '🟡', '迷路を解く黄色い粘菌', '黄色いアメーバ状のかたまり（変形体）が、ぬるぬると広がる。1つの細胞に核がたくさんある。', '森の中の落ち葉や朽ち木（研究室でも培養される）。', '迷路の中を動きまわって、最短の道を見つける実験が有名。')
    ], '黄色い変形体で知られる粘菌の仲間。'));
  X.add([PR, 'Mycetozoa', 'Myxomycetes', 'Stemonitidales', 'Stemonitidaceae'],
    G('ムラサキホコリ属', 'Stemonitis', [
      S('ムラサキホコリ', 'Stemonitis fusca', '🟤', '紫褐色の毛のような粘菌', '朽ち木の上に、細長い紫褐色の胞子のうが、毛のように集まって立つ。', '湿った朽ち木（世界各地）。', '動き回る時期と、胞子をつくる時期で姿が全くちがう。')
    ], '朽ち木の上に立つ粘菌の仲間。'));
  X.add([PR, 'Mycetozoa', 'Myxomycetes', 'Cribrariales', 'Tubiferaceae'],
    G('マメホコリ属', 'Lycogala', [
      S('マメホコリ', 'Lycogala epidendrum', '🟠', '朽ち木に並ぶ小さな豆のような粘菌', '朽ち木の表面に、直径1センチ前後の小さな丸い粒が集まって生える。', '湿った林の朽ち木（世界各地）。', '粘菌は、動物でも植物でも菌類でもない、ふしぎな生き物。')
    ], '朽ち木に小さな丸い粒をつくる粘菌の仲間。'));
  X.add([PR, 'Mycetozoa', 'Dictyosteliomycetes', 'Dictyosteliales', 'Dictyosteliaceae'],
    G('タマホコリカビ属', 'Dictyostelium', [
      S('キイロタマホコリカビ', 'Dictyostelium discoideum', '🟡', '集まって一つの体になるアメーバ', 'ふだんは単独のアメーバだが、食べ物が少なくなると集まって一つの体になり、胞子をつくる。', '林の土や落ち葉の中。', '細胞のコミュニケーションの研究に使われる。')
    ], '食べ物が少なくなるとアメーバが集まる細胞性粘菌の仲間。'));

  /* --- 有孔虫門・ハプト植物門・卵菌門 --- */
  X.def('Foraminifera', '有孔虫門', '石灰質の殻をもつ、海の単細胞生物。', 'ゆうこうちゅうもん');
  X.def('Globothalamea', 'グロボタラメア綱', '石灰質の殻をもつ有孔虫の綱。', null);
  X.def('Rotaliida', 'ロタリア目', '星の砂など、石灰質の殻をもつ有孔虫の仲間。', null);
  X.def('Calcarinidae', 'ホシズナ科', 'ホシズナなど、星形の殻をもつ有孔虫の仲間。', null);
  X.def('Haptophyta', 'ハプト植物門', 'コッコリスという石灰の板をまとった藻類などを含む門。', 'はぷとしょくぶつもん');
  X.def('Prymnesiophyceae', 'ハプト藻綱', 'ハプト植物の綱。', 'はぷとそうこう');
  X.def('Isochrysidales', 'イソクリシス目', 'ハプト藻の仲間。', null);
  X.def('Noelaerhabdaceae', 'ノエラエラブダ科', 'コッコリソフォアの仲間。', null);
  X.def('Oomycota', '卵菌門', 'カビのような姿だが、菌類とは別のグループ。', 'らんきんもん');
  X.def('Peronosporea', 'ペロノスポラ綱', '植物の病気の原因になる卵菌の綱。', null);
  X.def('Peronosporales', 'ペロノスポラ目', '植物の疫病などの原因になる卵菌の仲間。', null);
  X.def('Peronosporaceae', 'ペロノスポラ科', '疫病菌などの仲間。', null);

  X.add([PR, 'Foraminifera', 'Globothalamea', 'Rotaliida', 'Calcarinidae'],
    G('ホシズナ属', 'Baculogypsina', [
      S('ホシズナ', 'Baculogypsina sphaerulata', '⭐', '沖縄の「星の砂」の正体', '小さな星の形の石灰質の殻をもつ単細胞生物。', '沖縄・奄美などの暖かい海の砂浜。', '浜辺で見つかる「星の砂」は、この生き物の殻。')
    ], '石灰質の殻をもつ有孔虫の仲間。'));
  X.add([PR, 'Haptophyta', 'Prymnesiophyceae', 'Isochrysidales', 'Noelaerhabdaceae'],
    G('エミリアニア属', 'Emiliania', [
      S('エミリアニア・ハクスレイ', 'Emiliania huxleyi', '🌊', '白い石灰の板をまとった藻', '体の表面に、コッコリスという石灰の小さな板をまとった単細胞の藻類。', '世界の海。', '大発生すると海が乳白色に見える。コッコリスは、白亜（チョーク）の材料になった。', 'えみりあにあはくすれい')
    ], '石灰の板（コッコリス）をまとった単細胞の藻類の仲間。'));
  X.add([PR, 'Oomycota', 'Peronosporea', 'Peronosporales', 'Peronosporaceae'],
    G('フィトフトラ属', 'Phytophthora', [
      S('ジャガイモ疫病菌', 'Phytophthora infestans', '🥔', 'ジャガイモの病気の原因となる卵菌', 'ジャガイモの葉やいもを腐らせる、カビのような姿の生き物。菌類ではなく卵菌の仲間。', '世界のジャガイモ畑。', '19世紀のアイルランドで、この病気でジャガイモが不作になり、大きな飢饉が起きた。', 'じゃがいもえきびょうきん')
    ], '植物の病気（疫病）の原因になる卵菌の仲間。'));

  /* ===================== 細菌界 ===================== */
  var BC = 'Bacteria';

  X.def('Staphylococcales', 'スタフィロコッカス目', '黄色ブドウ球菌などを含む、球形の細菌の仲間。', null);
  X.def('Staphylococcaceae', 'スタフィロコッカス科', '黄色ブドウ球菌などの仲間。', null);
  X.def('Streptococcaceae', 'ストレプトコッカス科', 'ヨーグルトに使われるサーモフィルス菌や、乳酸菌の一部などの仲間。', null);
  X.def('Actinobacteriota', '放線菌門', 'ビフィズス菌、放線菌、結核菌などを含む細菌の門。', 'ほうせんきんもん');
  X.def('Actinomycetia', 'アクチノミセス綱', 'ビフィズス菌や放線菌、結核菌などを含む綱。', null);
  X.def('Bifidobacteriales', 'ビフィドバクテリウム目', 'ビフィズス菌の仲間。', null);
  X.def('Bifidobacteriaceae', 'ビフィドバクテリウム科', 'ビフィズス菌の仲間。', null);
  X.def('Streptomycetales', 'ストレプトミセス目', '土の中にすむ放線菌の仲間。', null);
  X.def('Streptomycetaceae', 'ストレプトミセス科', '放線菌の仲間。', null);
  X.def('Mycobacteriales', 'マイコバクテリウム目', '結核菌などを含む細菌の仲間。', null);
  X.def('Mycobacteriaceae', 'マイコバクテリウム科', '結核菌などの仲間。', null);
  X.def('Vibrionaceae', 'ビブリオ科', 'コレラ菌や腸炎ビブリオなど、水や海にすむ細菌の仲間。', null);
  X.def('Pseudomonadales', 'シュードモナス目', '緑膿菌などを含む細菌の仲間。', null);
  X.def('Pseudomonadaceae', 'シュードモナス科', '緑膿菌などの仲間。', null);
  X.def('Alphaproteobacteria', 'アルファプロテオバクテリア綱', '根粒菌や酢酸菌などを含む、プロテオバクテリア門の綱。', null);
  X.def('Rhizobiales', 'リゾビウム目', '根粒菌の仲間。', null);
  X.def('Rhizobiaceae', 'リゾビウム科', '根粒菌の仲間。', null);
  X.def('Xanthobacteraceae', 'キサントバクター科', 'ダイズの根粒菌などの仲間。', null);
  X.def('Acetobacterales', 'アセトバクター目', '酢酸菌の仲間。', null);
  X.def('Acetobacteraceae', 'アセトバクター科', '酢酸菌の仲間。', null);
  X.def('Campylobacterota', 'カンピロバクター門', 'ピロリ菌やカンピロバクターなど、らせん形の細菌を含む門。', 'かんぴろばくたーもん');
  X.def('Campylobacteria', 'カンピロバクター綱', 'ピロリ菌などの仲間。', null);
  X.def('Campylobacterales', 'カンピロバクター目', 'ピロリ菌などの仲間。', null);
  X.def('Helicobacteraceae', 'ヘリコバクター科', 'ピロリ菌の仲間。', null);
  X.def('Campylobacteraceae', 'カンピロバクター科', 'カンピロバクターの仲間。', null);
  X.def('Cyanobacteriales', 'シアノバクテリア目', 'スピルリナやアオコの仲間などを含む目。', null);
  X.def('Microcoleaceae', 'ミクロコレウス科', 'スピルリナの仲間。', null);
  X.def('Microcystaceae', 'ミクロキスティス科', 'アオコの原因になるミクロキスティスの仲間。', null);

  /* --- 乳酸菌など（ファーミキューテス門） --- */
  X.add([BC, 'Firmicutes', 'Bacilli', 'Lactobacillales', 'Lactobacillaceae'],
    G('ラクトバシラス属', 'Lactobacillus', [
      S('ガセリ菌', 'Lactobacillus gasseri', '🥛', 'ヨーグルトなどに使われる乳酸菌', 'ヒトの腸などからみつかる乳酸菌。ヨーグルトに使われる。', 'ヒトの腸や、ヨーグルトなどの発酵食品。', '乳酸菌は糖を食べて乳酸をつくる。', 'がせりきん'),
      S('アシドフィルス菌', 'Lactobacillus acidophilus', '🥛', '酸に強い乳酸菌', '酸性の中でもよく育つ乳酸菌で、ヨーグルトなどに使われる。', 'ヒトの腸や、発酵乳。', '名前の acidophilus は「酸が好き」という意味。', 'あしどふぃるすきん'),
      S('ヘルベティカス菌', 'Lactobacillus helveticus', '🧀', 'チーズや発酵乳に使われる乳酸菌', '乳を発酵させる乳酸菌で、チーズや発酵乳の製造に使われる。', '発酵乳・チーズの熟成。', '種小名の helveticus は「スイスの」という意味。', 'へるべてぃかすきん')
    ]));
  X.add([BC, 'Firmicutes', 'Bacilli', 'Lactobacillales', 'Lactobacillaceae'],
    G('ラクティプランチバシラス属', 'Lactiplantibacillus', [
      S('プランタルム菌', 'Lactiplantibacillus plantarum', '🥒', '漬物にいる植物性乳酸菌', '野菜の漬物やぬか漬けなどにいる乳酸菌。', '漬物・キムチ・ぬか漬けなどの発酵食品。', '以前は「ラクトバシラス・プランタルム」と呼ばれていたが、2020年に新しい属に移された。', 'ぷらんたるむきん')
    ], 'かつてラクトバシラス属に入れられていた乳酸菌の一部。'));
  X.add([BC, 'Firmicutes', 'Bacilli', 'Lactobacillales', 'Lactobacillaceae'],
    G('ラクティカゼイバシラス属', 'Lacticaseibacillus', [
      S('パラカゼイ菌', 'Lacticaseibacillus paracasei', '🥛', '乳酸菌飲料に使われる乳酸菌', '乳酸菌飲料や発酵乳に使われる。', '発酵乳・乳酸菌飲料、チーズなど。', '以前は「ラクトバシラス・パラカゼイ」と呼ばれていた。', 'ぱらかぜいきん')
    ], 'かつてラクトバシラス属に入れられていた乳酸菌の一部。'));
  X.add([BC, 'Firmicutes', 'Bacilli', 'Lactobacillales', 'Streptococcaceae'],
    G('ストレプトコッカス属', 'Streptococcus', [
      S('サーモフィルス菌', 'Streptococcus thermophilus', '🥛', 'ヨーグルトを作る球形の乳酸菌', '丸い形をした乳酸菌で、ヨーグルトの製造に使われる。', 'ヨーグルトなど。', 'ブルガリア乳酸菌と一緒に使うと、よく発酵が進むとされる。', 'さーもふぃるすきん')
    ], '球形の細菌が鎖のようにつながる仲間。ヨーグルトに使われる乳酸菌もいる。'));
  X.add([BC, 'Firmicutes', 'Bacilli', 'Lactobacillales', 'Streptococcaceae'],
    G('ラクトコッカス属', 'Lactococcus', [
      S('ラクチス菌', 'Lactococcus lactis', '🧀', 'チーズ作りに使われる乳酸菌', 'チーズやバターなどの製造に使われる球形の乳酸菌。', '発酵乳・チーズ・バターなどの製造。', '種小名の lactis は「乳の」という意味。', 'らくちすきん')
    ], 'チーズなどの製造に使われる乳酸菌の仲間。'));
  X.add([BC, 'Firmicutes', 'Bacilli', 'Staphylococcales', 'Staphylococcaceae'],
    G('スタフィロコッカス属', 'Staphylococcus', [
      S('黄色ブドウ球菌', 'Staphylococcus aureus', '🧼', '皮ふにもいる細菌', 'ブドウの房のような形に集まる細菌。ヒトの皮ふや鼻に、ふつうに住んでいる。', 'ヒトの皮ふ・鼻の中、動物など。', '手洗いや、傷口を清潔にすることが大切。食品を触る前は手をよく洗う。', 'おうしょくぶどうきゅうきん')
    ], 'ブドウの房のような形に集まる細菌の仲間。'));
  X.add([BC, 'Firmicutes', 'Bacilli', 'Bacillales', 'Bacillaceae'],
    G('バシラス属', 'Bacillus', [
      S('セレウス菌', 'Bacillus cereus', '🍚', '土の中にいて、ごはんにもつく細菌', '土の中などにふつうにいる細菌。熱に強い「芽胞」というカプセル状のものをつくる。', '土・穀物・米など、世界中。', 'ごはんやパスタを常温で放置せず、冷蔵・冷凍することが予防になる。', 'せれうすきん'),
      S('BT菌', 'Bacillus thuringiensis', '🐛', '虫にだけ効くたんぱく質をつくる', '特定の昆虫の幼虫にだけ効くたんぱく質をつくる細菌。', '土や植物の表面。', '農薬（BT剤）として使われている。', 'びーてぃーきん')
    ]));

  /* --- 放線菌門 --- */
  X.add([BC, 'Actinobacteriota', 'Actinomycetia', 'Bifidobacteriales', 'Bifidobacteriaceae'],
    G('ビフィドバクテリウム属', 'Bifidobacterium', [
      S('ビフィズス菌', 'Bifidobacterium longum', '🥛', '腸にすむ有名な善玉菌', 'ヒトの大腸にすむ細菌。酸素が苦手で、Y字のような形になることもある。', 'ヒトの大腸、ヨーグルトなどの発酵食品。', '赤ちゃんの腸に多いことが知られる。', 'びふぃずすきん'),
      S('ブレーベ菌', 'Bifidobacterium breve', '🥛', '赤ちゃんの腸に多いビフィズス菌', 'ヒトの腸にすむビフィズス菌の仲間。', 'ヒトの大腸。', '母乳で育つ赤ちゃんの腸に多いとされる。', 'ぶれーべきん')
    ], '腸にすむ、Y字の形になることもある細菌の仲間。'));
  X.add([BC, 'Actinobacteriota', 'Actinomycetia', 'Streptomycetales', 'Streptomycetaceae'],
    G('ストレプトミセス属', 'Streptomyces', [
      S('ストレプトマイセス・グリセウス', 'Streptomyces griseus', '🧪', '結核の薬、ストレプトマイシンをつくる', '土の中にいて、糸のように伸びる細菌。', '土の中（世界各地）。', 'この細菌から、結核の薬（ストレプトマイシン）が見つかった。', 'すとれぷとまいせすぐりせうす'),
      S('ストレプトマイセス・アベルミチリス', 'Streptomyces avermitilis', '🧪', '日本で見つかった薬の元をつくる', '土の中にいる放線菌で、薬の原料になる物質をつくる。', '日本の土壌（静岡県の土から見つかった）。', '見つけた大村智さんは2015年にノーベル賞を受賞した。', 'すとれぷとまいせすあべるみちりす')
    ], '土の中にいる細菌で、糸のように伸び、薬の元になる物質をつくるものが多い仲間（放線菌）。'));
  X.add([BC, 'Actinobacteriota', 'Actinomycetia', 'Mycobacteriales', 'Mycobacteriaceae'],
    G('マイコバクテリウム属', 'Mycobacterium', [
      S('結核菌', 'Mycobacterium tuberculosis', '🧼', '肺の病気、結核の原因となる細菌', 'ゆっくり増える細菌。人から人へ空気を通してうつることがある。', '世界各地。', '予防にはBCGワクチンがあり、治療には複数の抗生物質をきちんと飲み続けることが大切。', 'けっかくきん')
    ], '細胞の壁がろうのようなもので守られた細菌の仲間。'));

  /* --- プロテオバクテリア門 --- */
  X.add([BC, 'Proteobacteria', 'Gammaproteobacteria', 'Enterobacterales', 'Enterobacteriaceae'],
    G('サルモネラ属', 'Salmonella', [
      S('サルモネラ菌', 'Salmonella enterica', '🥚', '卵や肉につくことがある食中毒菌', '動物の腸にいる細菌。卵や肉などから、食中毒の原因になることがある。', '動物の腸、食品（世界各地）。', '食材は中まで加熱し、手と調理器具をよく洗うことで防げる。', 'さるもねらきん')
    ], '動物の腸にいる細菌で、食中毒の原因になるものがある仲間。'));
  X.add([BC, 'Proteobacteria', 'Gammaproteobacteria', 'Enterobacterales', 'Vibrionaceae'],
    G('ビブリオ属', 'Vibrio', [
      S('コレラ菌', 'Vibrio cholerae', '💧', 'きれいな水と衛生で防げる細菌', 'コンマ（、）のような形をした細菌。きれいでない水を飲むことで感染する。', '河口や海水（熱帯を中心に）。', '1854年、ロンドンで井戸の調査から、水が原因だとわかった。', 'これらきん'),
      S('腸炎ビブリオ', 'Vibrio parahaemolyticus', '🐟', '海にすむ、夏の食中毒の細菌', '海水や魚介類にいる細菌。', '沿岸の海水（日本を含む世界各地）。', 'とても速く増える。魚介類は真水で洗い、冷蔵することが大切。', 'ちょうえんびぶりお')
    ], 'コンマのような形をした、水にすむ細菌の仲間。'));
  X.add([BC, 'Proteobacteria', 'Gammaproteobacteria', 'Enterobacterales', 'Vibrionaceae'],
    G('アリイビブリオ属', 'Aliivibrio', [
      S('フィシェリ菌', 'Aliivibrio fischeri', '✨', 'イカの体で光る発光細菌', '海にすむ細菌で、発光する。', '海水や、ハワイのイカ（ダンゴイカの仲間）の体内。', 'イカの発光器官に住み、イカが夜に敵から身を隠すのを助けているとされる。', 'ふぃしぇりきん')
    ], '光る細菌の仲間。'));
  X.add([BC, 'Proteobacteria', 'Gammaproteobacteria', 'Pseudomonadales', 'Pseudomonadaceae'],
    G('シュードモナス属', 'Pseudomonas', [
      S('緑膿菌', 'Pseudomonas aeruginosa', '🧼', '水まわりにいる、抗生物質が効きにくい細菌', '水まわりや土などにふつうにいる細菌。', '水まわり・土・病院の湿った場所。', '抗生物質を正しく使うことの大切さを教えてくれる。', 'りょくのうきん'),
      S('シュードモナス・シリンガエ', 'Pseudomonas syringae', '❄️', '氷の核になる細菌', '植物につく細菌で、氷のできるきっかけになる物質をもつ。', '植物の葉の表面など。', '人工雪づくりにも使われたことがある。', 'しゅーどもなすしりんがえ')
    ], '水や土にいる細菌の仲間。'));
  X.add([BC, 'Proteobacteria', 'Alphaproteobacteria', 'Rhizobiales', 'Rhizobiaceae'],
    G('リゾビウム属', 'Rhizobium', [
      S('根粒菌', 'Rhizobium leguminosarum', '🌱', 'マメ科の根にこぶをつくる', 'マメ科の植物の根に入り、こぶ（根粒）をつくる。', 'マメ科植物の根と、その周囲の土。', '空気中の窒素を植物が使える肥料分に変えてくれる。', 'こんりゅうきん')
    ], 'マメ科植物の根に根粒（こぶ）をつくる細菌の仲間。'));
  X.add([BC, 'Proteobacteria', 'Alphaproteobacteria', 'Rhizobiales', 'Xanthobacteraceae'],
    G('ブラディリゾビウム属', 'Bradyrhizobium', [
      S('ダイズ根粒菌', 'Bradyrhizobium japonicum', '🌱', 'ダイズの根にすむ根粒菌', 'ダイズの根にこぶ（根粒）をつくって、土の中の窒素を植物の栄養に変える。', 'ダイズ畑の土、根の中。', '大豆は、豆腐・納豆・みそなどの原料。', 'だいずこんりゅうきん')
    ], 'ダイズなどの根に根粒をつくる細菌の仲間。'));
  X.add([BC, 'Proteobacteria', 'Alphaproteobacteria', 'Acetobacterales', 'Acetobacteraceae'],
    G('アセトバクター属', 'Acetobacter', [
      S('酢酸菌', 'Acetobacter aceti', '🍶', 'お酢をつくる細菌', 'お酒（アルコール）を、酢酸（お酢の主成分）に変える細菌。', 'お酢の醸造所、果物、発酵した食べ物。', '酸素を使って働く。', 'さくさんきん')
    ], 'お酢をつくる細菌の仲間。'));
  X.add([BC, 'Proteobacteria', 'Alphaproteobacteria', 'Acetobacterales', 'Acetobacteraceae'],
    G('コマガタイバクター属', 'Komagataeibacter', [
      S('ナタデココ菌', 'Komagataeibacter xylinus', '🥥', 'ナタデココをつくる細菌', 'セルロースの膜をつくる細菌。ココナッツ水に入れると、ゼリー状の食感のナタデココができる。', 'ココナッツ水などの発酵液。', '属名は、日本の細菌学者・駒形和男さんの名にちなんでいる。', 'なたでここきん')
    ], 'セルロースの膜をつくる酢酸菌の仲間。'));

  /* --- カンピロバクター門 --- */
  X.add([BC, 'Campylobacterota', 'Campylobacteria', 'Campylobacterales', 'Helicobacteraceae'],
    G('ヘリコバクター属', 'Helicobacter', [
      S('ピロリ菌', 'Helicobacter pylori', '🧪', '胃にすむらせん形の細菌', 'らせん形をした細菌。胃酸の強い胃の中で生きることができる。', 'ヒトの胃。', '発見した研究者は2005年にノーベル賞を受賞した。除菌の治療方法もある。', 'ぴろりきん')
    ], 'らせん形をした細菌の仲間。'));
  X.add([BC, 'Campylobacterota', 'Campylobacteria', 'Campylobacterales', 'Campylobacteraceae'],
    G('カンピロバクター属', 'Campylobacter', [
      S('カンピロバクター', 'Campylobacter jejuni', '🍗', '鶏肉などから食中毒になることがある細菌', 'らせん形をした細菌。ニワトリなどの腸にいて、食中毒の原因になることがある。', '鳥や家畜の腸。', '鶏肉は中まで十分に加熱し、生の肉に触れた手や調理器具はよく洗うことが予防になる。')
    ], 'らせん形をした細菌の仲間。'));

  /* --- シアノバクテリア門 --- */
  X.add([BC, 'Cyanobacteria', 'Cyanophyceae', 'Cyanobacteriales', 'Microcoleaceae'],
    G('アルスロスピラ属', 'Arthrospira', [
      S('スピルリナ', 'Arthrospira platensis', '🌿', 'らせん形のシアノバクテリア', '細長い細胞がらせん状につながった糸のような形をしたシアノバクテリア。光合成をする。', '塩分を含む湖など（アフリカ・アメリカ大陸）。', 'アフリカのチャド湖のほとりでは、昔から食べ物にされてきた。栄養食品としても販売されている。')
    ], 'らせん形のシアノバクテリアの仲間。'));
  X.add([BC, 'Cyanobacteria', 'Cyanophyceae', 'Cyanobacteriales', 'Microcystaceae'],
    G('ミクロキスティス属', 'Microcystis', [
      S('ミクロキスティス', 'Microcystis aeruginosa', '🟩', 'アオコの原因になる', '小さな丸い細胞が集まって、湖面に緑の層をつくる。毒をつくる種類もある。', '栄養分の多い湖や池。', '湖が緑色の「アオコ」になったら、近づいたり水を飲んだりしないほうがよい。')
    ], '湖で「アオコ」をつくるシアノバクテリアの仲間。'));
});
