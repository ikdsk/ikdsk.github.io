import { Persona } from '../types/persona';
import './PersonaCard.css';

interface Props {
  persona: Persona;
  isSelected: boolean;
  onClick: () => void;
}

export default function PersonaCard({ persona, isSelected, onClick }: Props) {
  return (
    <button
      className={`persona-card ${isSelected ? 'persona-card--active' : ''}`}
      onClick={onClick}
    >
      <img className="persona-card-icon" src={persona.icon} alt={persona.name} />
      <span className="persona-card-name">{persona.name}</span>
      <span className="persona-card-style">{persona.readingStyle}</span>
    </button>
  );
}
