# 文学賞の本棚 / D's slop

`https://ikdsk.github.io/` は個人開発ギャラリー「D's slop」（静的HTML、`site/`）。
文学賞の本棚（Vite + React + TypeScript）は `https://ikdsk.github.io/books/` に配置。

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動 (localhost:5173/books/)
npm run build    # 書影DL → tsc -b → vite build（dist/books/）→ site/ を dist/ へコピー
npm run preview  # ビルド成果物のプレビュー（/books/ 配下。D's slop は dist/ 直下）
```

変更後は必ず `npx tsc -b && npx vite build` でエラーがないことを確認する。

## /books/ 配置と D's slop

- `vite.config.ts`: `base: '/books/'`、`outDir: 'dist/books'`。`BrowserRouter basename="/books"`（`src/main.tsx`）。
- 本棚の public アセット（書影・ペルソナ画像）は `import.meta.env.BASE_URL` 経由で参照する。`/covers/...` のような絶対パスをコードに直書きしない。
- `site/` はルート配信用の静的ファイル。`scripts/build-root.mjs` が build 後に `dist/` 直下へコピーする:
  - `index.html` … D's slop 本体（カードを追加・更新するときはここを編集。HTML/CSS/少量のJSのみ、解析タグなし）
  - `thumbs/*.webp` … カードのサムネイル（1200x750 のスクショを 720x450 の WebP に軽量化）
  - `404.html` … GitHub Pages の 404 フォールバック。`/books/...` の深いリンクを `/books/?/...` に変換し、旧URL（`/awards`, `/award/:id`, `/monthly`, `/recommendations`）を `/books/` 配下へ転送する。本棚に新しいトップレベルのルートを足したら、ここの `legacy` 正規表現も更新するか検討する
  - `sitemap.xml`, `robots.txt`, `favicon.svg`
- ワークフローは `npm run build` → `dist` アップロードのまま。

## プロジェクト構成

```
site/                  ← D's slop（ルート配信用の静的ファイル。上記参照）
scripts/
  download-covers.mjs  ← 書影ダウンロード
  build-root.mjs       ← site/ を dist/ へコピー
src/
  data/
    awards.ts        ← 全賞＋受賞作データ（メインのデータファイル）
    personas.ts      ← AI選書家のペルソナ＋おすすめデータ
  types/
    award.ts         ← Award, Winner, AwardCategory 型定義
    persona.ts       ← Persona, Recommendation 型定義
  pages/
    HomePage.tsx          ← / トップページ
    AwardsListPage.tsx    ← /awards カテゴリフィルター付き一覧
    AwardDetailPage.tsx   ← /award/:id 賞の詳細・受賞作リスト
    RecommendationsPage.tsx ← /recommendations AI選書家ページ
  components/
    AwardCard.tsx         ← 賞カード（書影・Amazonリンク付き）
    BookCover.tsx         ← Google Books API で書影自動取得
    BookLink.tsx          ← Amazonリンクボタン
    PersonaCard.tsx       ← AI選書家の選択カード
    RecommendationCard.tsx ← おすすめ本カード（コメント付き）
  hooks/
    useBookCover.ts      ← Google Books API で書影URLを取得・キャッシュ
```

## データ更新手順

### 1. 最新の受賞作を追加する

スキル `/shogun-literary-award-researcher` を使ってウェブ検索で最新情報を収集し、`src/data/awards.ts` を更新する。

**Winner の型:**
```typescript
{
  year: string;            // '2026年版', '2025年下半期（第174回）' など
  title: string;           // ダブル受賞は 'A / B' 形式
  author: string;          // ダブル受賞は 'X / Y' 形式。該当作なしは '-'
  synopsis: string;        // 2-3文。ネタバレ禁止
  announcedMonth?: string; // '2026年1月' 形式
  review?: string;         // AIによる書評。500文字程度
}
```

**手順:**
1. ウェブ検索で最新の受賞作を調べる
2. `awards.ts` の該当する賞の `winners` 配列の **先頭** に新しいエントリを追加（新しい順）
3. 新しい賞を追加する場合は配列にオブジェクトを追加。id はケバブケース
4. `review` フィールドに500文字程度のAI書評を書く
5. `npx tsc -b` でビルド確認

**カテゴリ一覧:** literary, entertainment, mystery, sf, nonfiction, reader, newcomer, children, other

### 2. AI書評を追加する

`review` フィールドが未設定の受賞作に書評を追加する。

**書評のルール:**
- 500文字程度
- ネタバレ禁止
- 作品の魅力、読みどころ、受賞の意義を含める
- `author` が `-` や `発表済` の作品には書評をつけない

### 3. AI選書家のおすすめを更新する

`src/data/personas.ts` の `recommendations` 配列にエントリを追加する。

**Recommendation の型:**
```typescript
{
  personaId: string;    // personas 配列の id
  awardId: string;      // awards 配列の id
  winnerIndex: number;  // award.winners[index] を指す（0が最新）
  comment: string;      // そのペルソナの口調で100-200文字
}
```

**ペルソナ一覧（口調ガイド）:**
| id | 名前 | 口調 |
|---|---|---|
| business-taro | 石橋太郎 | 丁寧語・論理的。ビジネスとの接点を見出す |
| mystery-mika | 宵町ミカ | やや辛口・断定的。トリックやロジックを評価 |
| bungaku-sensei | 沢木文子 | 穏やか・教養的。文学的価値を語る |
| teen-haruka | 星野ハルカ | タメ口・感嘆符多め。感情全開で推す |
| mama-yuki | 小川ゆき | 親しみやすい話し言葉。生活者目線で語る |

各ペルソナ4冊程度が目安。同じ作品を複数ペルソナが選んでもよい。

### 4. 新しいペルソナを追加する

`personas.ts` の `personas` 配列にオブジェクトを追加するだけ。UIは `personas.map()` で回しているので変更不要。

### 5. 今月の話題本を更新する

スキル `/shogun-monthly-book-reviewer` を使ってウェブ検索で話題本を収集し、`src/data/monthly.ts` を更新する。

**MonthlyBook の型:**
```typescript
{
  title: string;
  author: string;
  publisher: string;
  genre: 'novel' | 'nonfiction' | 'shinsho' | 'business' | 'essay' | 'other';
  reason: string;        // なぜ話題か
  synopsis: string;      // 内容紹介 2-3文
  review: string;        // AI書評 200文字以上（必須）
  publishDate?: string;  // 発売日
}
```

- 新しい月のデータは `monthlyPicks` 配列の **先頭** に追加
- 各ジャンル最低5冊が目安
- **書評は必ず200文字以上**

## 公開

GitHub Pages で `https://ikdsk.github.io/` に公開中。`main` ブランチにpushすると GitHub Actions で自動デプロイ。


## 関連スキル

- `/shogun-literary-award-researcher` — 文学賞の最新受賞作情報をウェブ検索で収集
