import { amazonSearchUrl, Winner } from '../types/award';
import './BookLink.css';

interface Props {
  winner: Winner;
}

export default function BookLink({ winner }: Props) {
  const url = amazonSearchUrl(winner.title, winner.author);
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="book-link"
      title="Amazonで探す"
    >
      <span className="book-link-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </span>
      Amazonで探す
    </a>
  );
}
