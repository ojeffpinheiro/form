import { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

import EventCard from "../EventCard";

import { SessionProps } from "../../interfaces/auth";

import "./style.scss"

const Session: React.FC<SessionProps> = ({ title, data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={`session ${isExpanded ? "expanded" : ""}`}>
      <div className="session-header">
        <h2>{title}</h2>
        <button onClick={handleToggle}>
          {isExpanded ? (
            <FaArrowCircleUp color="var(--primary)" size={40} />
          ) : (
            <FaArrowCircleDown color="var(--primary)" size={40} />
          )}
        </button>
      </div>
      {isExpanded && (
        <div className="session-content">
          {data.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Session