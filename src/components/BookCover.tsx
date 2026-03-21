import { useBookCover } from '../hooks/useBookCover';
import './BookCover.css';

interface Props {
  title: string;
  author: string;
  size?: 'sm' | 'md';
}

export default function BookCover({ title, author, size = 'md' }: Props) {
  const coverUrl = useBookCover(title, author);

  if (author === '-' || author === '発表済') return null;

  return (
    <div className={`book-cover book-cover--${size}`}>
      {coverUrl ? (
        <img src={coverUrl} alt={`${title} 表紙`} loading="lazy" />
      ) : (
        <div className="book-cover-placeholder">
          <span className="book-cover-placeholder-title">{title.split('/')[0].trim()}</span>
          <span className="book-cover-placeholder-author">{author.split('/')[0].split('、')[0].trim()}</span>
        </div>
      )}
    </div>
  );
}
