import { awards } from '../data/awards';
import AwardCard from '../components/AwardCard';
import './HomePage.css';

/** "2025年4月" → 202504, "2024年12月" → 202412 のように数値化してソート用に使う */
function parseAnnouncedMonth(s?: string): number {
  if (!s) return 0;
  const m = s.match(/(\d{4})年(\d{1,2})月?/);
  if (!m) return 0;
  return Number(m[1]) * 100 + Number(m[2] ?? '0');
}

export default function HomePage() {
  // 各賞の最新受賞作(author確定済み)を announcedMonth 降順でソートし、上位8件を表示
  const latestAwards = [...awards]
    .filter((a) => {
      const w = a.winners[0];
      return w && w.author !== '-' && w.author !== '発表済';
    })
    .sort((a, b) => {
      const da = parseAnnouncedMonth(a.winners[0].announcedMonth);
      const db = parseAnnouncedMonth(b.winners[0].announcedMonth);
      return db - da;
    })
    .slice(0, 8);

  return (
    <div className="home">
      <section className="hero">
        <h2 className="hero-title">日本の文学賞受賞作を、もっと身近に</h2>
        <p className="hero-desc">
          本屋大賞、直木賞、芥川賞、このミステリーがすごい！など、
          日本の主要な文学賞の最新受賞作品を紹介します。
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">最新の受賞作品</h2>
        <div className="card-grid">
          {latestAwards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">文学賞一覧</h2>
        <div className="card-grid">
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </section>
    </div>
  );
}
