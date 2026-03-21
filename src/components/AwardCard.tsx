import { Link } from 'react-router-dom';
import { Award, categoryLabels, amazonSearchUrl } from '../types/award';
import BookCover from './BookCover';
import './AwardCard.css';

interface Props {
  award: Award;
}

export default function AwardCard({ award }: Props) {
  const latest = award.winners[0];
  if (!latest || latest.author === '-') return null;

  const amazonUrl = amazonSearchUrl(latest.title, latest.author);

  return (
    <div className="award-card">
      <Link to={`/award/${award.id}`} className="award-card-link">
        <div className="award-card-header">
          <span className="award-card-category">{categoryLabels[award.category]}</span>
          {latest.announcedMonth && (
            <span className="award-card-announced">{latest.announcedMonth}</span>
          )}
        </div>
        <h3 className="award-card-name">{award.name}</h3>
        <div className="award-card-content">
          <BookCover title={latest.title} author={latest.author} size="sm" />
          <div className="award-card-info">
            <p className="award-card-title">{latest.title}</p>
            <p className="award-card-author">{latest.author}</p>
            <p className="award-card-synopsis">{latest.synopsis}</p>
          </div>
        </div>
      </Link>
      {amazonUrl && (
        <div className="award-card-actions">
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="award-card-amazon"
            onClick={(e) => e.stopPropagation()}
          >
            Amazonで探す
          </a>
        </div>
      )}
    </div>
  );
}
