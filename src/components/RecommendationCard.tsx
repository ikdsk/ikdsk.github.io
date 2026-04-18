import { Link } from 'react-router-dom';
import { Award, Winner, amazonSearchUrl } from '../types/award';
import { OwnPickBook, Persona } from '../types/persona';
import BookCover from './BookCover';
import './RecommendationCard.css';

type AwardCardProps = {
  kind: 'award';
  persona: Persona;
  comment: string;
  postedDate: string;
  award: Award;
  winner: Winner;
};

type OwnCardProps = {
  kind: 'own';
  persona: Persona;
  comment: string;
  postedDate: string;
  book: OwnPickBook;
};

export type RecommendationCardProps = AwardCardProps | OwnCardProps;

function formatPostedDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const dow = ['日', '月', '火', '水', '木', '金', '土'][d.getDay()];
  return `${y}年${m}月${day}日（${dow}）`;
}

export default function RecommendationCard(props: RecommendationCardProps) {
  const { persona, comment, postedDate } = props;
  const title = props.kind === 'award' ? props.winner.title : props.book.title;
  const author = props.kind === 'award' ? props.winner.author : props.book.author;
  const amazonUrl = amazonSearchUrl(title, author);

  return (
    <article className="rec-card">
      <div className="rec-card-posted">
        <time dateTime={postedDate}>{formatPostedDate(postedDate)}</time>
        <span className="rec-card-posted-by">by {persona.name}</span>
      </div>

      {props.kind === 'award' ? (
        <Link to={`/award/${props.award.id}`} className="rec-card-link">
          <div className="rec-card-header">
            <span className="rec-card-award">{props.award.name}</span>
            <span className="rec-card-year">{props.winner.year}</span>
          </div>
          <div className="rec-card-content">
            <BookCover title={title} author={author} size="sm" />
            <div className="rec-card-info">
              <h3 className="rec-card-title">{title}</h3>
              <p className="rec-card-author">{author}</p>
              {props.winner.announcedMonth && (
                <p className="rec-card-announced">{props.winner.announcedMonth} 発表</p>
              )}
            </div>
          </div>
        </Link>
      ) : (
        <div className="rec-card-link rec-card-link-static">
          <div className="rec-card-content">
            <BookCover title={title} author={author} size="sm" />
            <div className="rec-card-info">
              <h3 className="rec-card-title">{title}</h3>
              <p className="rec-card-author">{author}</p>
              {(props.book.publisher || props.book.publishDate) && (
                <p className="rec-card-announced">
                  {[props.book.publisher, props.book.publishDate].filter(Boolean).join(' / ')}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

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
        {props.kind === 'award' && (
          <Link to={`/award/${props.award.id}`} className="rec-card-detail">
            賞の詳細を見る
          </Link>
        )}
      </div>
    </article>
  );
}
