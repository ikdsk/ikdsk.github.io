import { Link } from 'react-router-dom';
import { Award, Winner, amazonSearchUrl } from '../types/award';
import { Persona } from '../types/persona';
import BookCover from './BookCover';
import './RecommendationCard.css';

interface Props {
  award: Award;
  winner: Winner;
  comment: string;
  persona: Persona;
}

export default function RecommendationCard({ award, winner, comment, persona }: Props) {
  const amazonUrl = amazonSearchUrl(winner.title, winner.author);

  return (
    <article className="rec-card">
      <Link to={`/award/${award.id}`} className="rec-card-link">
        <div className="rec-card-header">
          <span className="rec-card-award">{award.name}</span>
          <span className="rec-card-year">{winner.year}</span>
        </div>
        <div className="rec-card-content">
          <BookCover title={winner.title} author={winner.author} size="sm" />
          <div className="rec-card-info">
            <h3 className="rec-card-title">{winner.title}</h3>
            <p className="rec-card-author">{winner.author}</p>
            {winner.announcedMonth && (
              <p className="rec-card-announced">{winner.announcedMonth} 発表</p>
            )}
          </div>
        </div>
      </Link>

      <div className="rec-card-comment">
        <div className="rec-card-comment-header">
          <img className="rec-card-comment-icon" src={persona.icon} alt={persona.name} />
          <span className="rec-card-comment-name">{persona.name}</span>
        </div>
        <p className="rec-card-comment-text">{comment}</p>
      </div>

      <div className="rec-card-actions">
        {amazonUrl && (
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rec-card-amazon"
          >
            Amazonで探す
          </a>
        )}
        <Link to={`/award/${award.id}`} className="rec-card-detail">
          賞の詳細を見る
        </Link>
      </div>
    </article>
  );
}
