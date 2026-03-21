import { useParams, Link } from 'react-router-dom';
import { awards } from '../data/awards';
import { categoryLabels } from '../types/award';
import BookCover from '../components/BookCover';
import BookLink from '../components/BookLink';
import './AwardDetailPage.css';

export default function AwardDetailPage() {
  const { id } = useParams<{ id: string }>();
  const award = awards.find((a) => a.id === id);

  if (!award) {
    return (
      <div className="detail-not-found">
        <h2>賞が見つかりません</h2>
        <Link to="/">ホームに戻る</Link>
      </div>
    );
  }

  return (
    <div className="detail">
      <Link to="/" className="detail-back">&larr; ホームに戻る</Link>

      <div className="detail-header">
        <span className="detail-category">{categoryLabels[award.category]}</span>
        <h1 className="detail-name">{award.name}</h1>
        <p className="detail-desc">{award.description}</p>
      </div>

      <section className="detail-winners">
        <h2 className="detail-section-title">受賞作品一覧</h2>
        {award.winners.map((winner) => (
          <article
            key={`${winner.year}-${winner.title}`}
            className={`winner-card ${winner.author === '-' ? 'winner-card--empty' : ''}`}
          >
            <div className="winner-card-top">
              <BookCover title={winner.title} author={winner.author} size="md" />
              <div className="winner-card-meta">
                <span className="winner-card-year">{winner.year}</span>
                {winner.announcedMonth && (
                  <span className="winner-card-announced">{winner.announcedMonth} 発表</span>
                )}
                <h3 className="winner-card-title">{winner.title}</h3>
                <p className="winner-card-author">{winner.author}</p>
                <BookLink winner={winner} />
              </div>
            </div>

            <div className="winner-card-body">
              <div className="winner-card-section">
                <h4 className="winner-card-label">あらすじ</h4>
                <p className="winner-card-text">{winner.synopsis}</p>
              </div>

              {winner.review && (
                <div className="winner-card-section winner-card-review">
                  <h4 className="winner-card-label">
                    <span className="winner-card-ai-badge">AI</span>
                    書評
                  </h4>
                  <p className="winner-card-text">{winner.review}</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
