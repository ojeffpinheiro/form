import { useState } from "react";
import { FaArrowDown, FaArrowUp, FaPlus } from "react-icons/fa";

import EventCard from "../EventCard";

import { SessionProps } from "../../interfaces/auth";

import "./style.scss"

const Session: React.FC<SessionProps> = ({ title, data, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={`session ${isExpanded ? "expanded" : ""}`}>
      <div className="session-header" onClick={handleToggle}>
        <h2>{title}</h2>
        <button>
          {isExpanded ? (
            <FaArrowUp color="var(--primary)" size={25} />
          ) : (
            <FaArrowDown color="var(--primary)" size={25} />
          )}
        </button>
      </div>
      {isExpanded && (
        <div className="session-content">
          {data.map((event, i) => (
            <EventCard key={i} {...event} />
          ))}
          <button onClick={onClick}>
            <span><FaPlus size={25} /></span>
            <p>Adiconar Evento</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default Session