import { useState } from 'react';
import { personas, recommendations } from '../data/personas';
import { awards } from '../data/awards';
import PersonaCard from '../components/PersonaCard';
import RecommendationCard from '../components/RecommendationCard';
import './RecommendationsPage.css';

export default function RecommendationsPage() {
  const [selectedId, setSelectedId] = useState(personas[0].id);

  const persona = personas.find((p) => p.id === selectedId)!;
  const recs = recommendations
    .filter((r) => r.personaId === selectedId)
    .map((r) => {
      const award = awards.find((a) => a.id === r.awardId);
      const winner = award?.winners[r.winnerIndex];
      return { ...r, award: award!, winner: winner! };
    })
    .filter((r) => r.award && r.winner);

  return (
    <div className="recommendations">
      <section className="rec-hero">
        <h1 className="rec-hero-title">AI選書家のおすすめ</h1>
        <p className="rec-hero-desc">
          5人のAI選書家が、それぞれの視点で文学賞受賞作を語ります。
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
        {recs.map((r) => (
          <RecommendationCard
            key={`${r.awardId}-${r.winnerIndex}`}
            award={r.award}
            winner={r.winner}
            comment={r.comment}
            persona={persona}
          />
        ))}
      </section>
    </div>
  );
}
