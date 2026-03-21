import { useState } from 'react';
import { awards } from '../data/awards';
import { AwardCategory, categoryLabels } from '../types/award';
import AwardCard from '../components/AwardCard';
import './AwardsListPage.css';

const categories: (AwardCategory | 'all')[] = [
  'all',
  'literary',
  'entertainment',
  'mystery',
  'sf',
  'nonfiction',
  'reader',
  'newcomer',
];

export default function AwardsListPage() {
  const [filter, setFilter] = useState<AwardCategory | 'all'>('all');

  const filtered =
    filter === 'all' ? awards : awards.filter((a) => a.category === filter);

  return (
    <div className="awards-list">
      <h1 className="awards-list-title">文学賞一覧</h1>

      <div className="awards-list-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'filter-btn--active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' ? 'すべて' : categoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filtered.map((award) => (
          <AwardCard key={award.id} award={award} />
        ))}
      </div>
    </div>
  );
}
