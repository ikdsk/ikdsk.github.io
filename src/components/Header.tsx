import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <span className="header-logo-icon">📚</span>
          <div>
            <h1 className="header-title">文学賞の本棚</h1>
            <p className="header-subtitle">日本の文学賞受賞作ガイド</p>
          </div>
        </Link>
        <nav className="header-nav">
          <Link to="/">ホーム</Link>
          <Link to="/awards">賞一覧</Link>
          <Link to="/recommendations">AI選書家</Link>
        </nav>
      </div>
    </header>
  );
}
