import { useState } from "react";

import { SessionProps } from "../../interfaces/auth";

import "./style.scss"
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const Session = ({ title, children }: SessionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={`session ${isExpanded ? 'expanded' : ''}`}>
      <div className="session-header">
        <h2>{title}</h2>
        <button onClick={handleToggle}>
          {isExpanded 
            ? <FaArrowCircleUp color="var(--primary)" size={40} />
            : <FaArrowCircleDown color="var(--primary)" size={40} /> }
        </button>
      </div>
      {isExpanded && <div className="session-content">{children}</div>}
    </div>
  );
}

export default Session