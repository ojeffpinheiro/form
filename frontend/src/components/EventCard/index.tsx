import { PiSuitcaseRolling } from "react-icons/pi";

import { EventsProps } from "../../interfaces/auth";

import "./style.scss";

const EventCard = ({ name, value, type }: EventsProps) => {
  return (
    <div className="event-card">
      <div className="event-details">
        <h2>{name}</h2>
        <p>{type}</p>
        <p>R$ {value}</p>
      </div>
      <div className="event-icon">
        <PiSuitcaseRolling size={60} />
      </div>
    </div>
  );
};

export default EventCard;
