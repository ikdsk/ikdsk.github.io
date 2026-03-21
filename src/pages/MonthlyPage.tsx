import { useState } from 'react';
import { monthlyPicks } from '../data/monthly';
import { genreLabels, MonthlyBook } from '../types/monthly';
import { amazonSearchUrl } from '../types/award';
import BookCover from '../components/BookCover';
import './MonthlyPage.css';

type GenreFilter = MonthlyBook['genre'] | 'all';

const genres: GenreFilter[] = ['all', 'novel', 'nonfiction', 'shinsho', 'business', 'essay', 'other'];

export default function MonthlyPage() {
  const latest = monthlyPicks[0];
  const [filter, setFilter] = useState<GenreFilter>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    filter === 'all' ? latest.books : latest.books.filter((b) => b.genre === filter);

  return (
    <div className="monthly">
      <section className="monthly-hero">
        <h1 className="monthly-hero-title">{latest.month}の話題本</h1>
        <p className="monthly-hero-desc">
          今月話題の新刊・ベストセラーをAIがピックアップ。書評付きでお届けします。
        </p>
      </section>

      <div className="monthly-filters">
        {genres.map((g) => (
          <button
            key={g}
            className={`monthly-filter ${filter === g ? 'monthly-filter--active' : ''}`}
            onClick={() => setFilter(g)}
          >
            {g === 'all' ? 'すべて' : genreLabels[g]}
          </button>
        ))}
      </div>

      <div className="monthly-list">
        {filtered.map((book) => {
          const amazonUrl = amazonSearchUrl(book.title, book.author);
          const isExpanded = expanded === book.title;
          return (
            <article key={book.title} className="monthly-card">
              <div className="monthly-card-top">
                <BookCover title={book.title} author={book.author} size="md" />
                <div className="monthly-card-meta">
                  <div className="monthly-card-tags">
                    <span className="monthly-card-genre">{genreLabels[book.genre]}</span>
                  </div>
                  <h2 className="monthly-card-title">{book.title}</h2>
                  <p className="monthly-card-author">{book.author}（{book.publisher}）</p>
                  {book.publishDate && (
                    <p className="monthly-card-date">{book.publishDate} 発売</p>
                  )}
                  <p className="monthly-card-reason">{book.reason}</p>
                </div>
              </div>

              <div className="monthly-card-section">
                <h3 className="monthly-card-label">内容紹介</h3>
                <p className="monthly-card-text">{book.synopsis}</p>
              </div>

              {book.review && (
                <div className="monthly-card-section monthly-card-review">
                  <button
                    className="monthly-card-review-toggle"
                    onClick={() => setExpanded(isExpanded ? null : book.title)}
                  >
                    <span className="monthly-card-ai-badge">AI</span>
                    書評
                    <span className="monthly-card-chevron">{isExpanded ? '▲' : '▼'}</span>
                  </button>
                  {isExpanded && (
                    <p className="monthly-card-text monthly-card-review-text">{book.review}</p>
                  )}
                </div>
              )}

              <div className="monthly-card-actions">
                {amazonUrl && (
                  <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className="monthly-card-amazon">
                    Amazonで探す
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {monthlyPicks.length > 1 && (
        <section className="monthly-archive">
          <h2 className="monthly-archive-title">過去のピックアップ</h2>
          <ul className="monthly-archive-list">
            {monthlyPicks.slice(1).map((pick) => (
              <li key={pick.month}>{pick.month}（{pick.books.length}冊）</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
