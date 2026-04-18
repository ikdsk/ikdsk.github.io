import { useState } from 'react';
import { personas, recommendations } from '../data/personas';
import { awards } from '../data/awards';
import PersonaCard from '../components/PersonaCard';
import RecommendationCard, { RecommendationCardProps } from '../components/RecommendationCard';
import './RecommendationsPage.css';

export default function RecommendationsPage() {
  const [selectedId, setSelectedId] = useState(personas[0].id);

  const persona = personas.find((p) => p.id === selectedId)!;

  const resolved: (RecommendationCardProps & { key: string })[] = recommendations
    .filter((r) => r.personaId === selectedId)
    .map((r): (RecommendationCardProps & { key: string }) | null => {
      if (r.kind === 'award') {
        const award = awards.find((a) => a.id === r.awardId);
        const winner = award?.winners[r.winnerIndex];
        if (!award || !winner) return null;
        return {
          key: `award-${r.awardId}-${r.winnerIndex}-${r.postedDate}`,
          kind: 'award',
          persona,
          comment: r.comment,
          postedDate: r.postedDate,
          award,
          winner,
        };
      }
      return {
        key: `own-${r.personaId}-${r.book.title}-${r.postedDate}`,
        kind: 'own',
        persona,
        comment: r.comment,
        postedDate: r.postedDate,
        book: r.book,
      };
    })
    .filter((x): x is RecommendationCardProps & { key: string } => x !== null)
    .sort((a, b) => b.postedDate.localeCompare(a.postedDate));

  return (
    <div className="recommendations">
      <section className="rec-hero">
        <h1 className="rec-hero-title">AI選書家のおすすめ</h1>
        <p className="rec-hero-desc">
          5人のAI選書家が、それぞれの視点で文学賞受賞作と新刊を語ります。
          あなたに近い選書家を見つけてみてください。
        </p>
      </section>

      <section className="persona-selector">
        {personas.map((p) => (
          <PersonaCard
            key={p.id}
            persona={p}
            isSelected={p.id === selectedId}
            onClick={() => setSelectedId(p.id)}
          />
        ))}
      </section>

      <section className="persona-profile">
        <div className="persona-profile-inner">
          <img className="persona-profile-icon" src={persona.icon} alt={persona.name} />
          <div className="persona-profile-text">
            <h2 className="persona-profile-name">
              {persona.name}
              <span className="persona-profile-meta">
                {persona.age}歳 / {persona.occupation}
              </span>
            </h2>
            <p className="persona-profile-bio">{persona.bio}</p>
          </div>
        </div>
      </section>

      <section className="rec-list">
        <h2 className="rec-list-title">
          最新のレビュー
          <span className="rec-list-count">{resolved.length}件の投稿</span>
        </h2>
        {resolved.map(({ key, ...props }) => (
          <RecommendationCard key={key} {...props} />
        ))}
      </section>
    </div>
  );
}
