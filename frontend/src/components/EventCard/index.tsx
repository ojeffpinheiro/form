import { FaUserGraduate, FaSuitcaseRolling, FaTshirt, FaGlassCheers, FaBus, FaTicketAlt } from "react-icons/fa";

import { EventProps } from "../../interfaces/auth";

import "./style.scss";

const EventCard = ({ name, value, type }: EventProps) => {
  const getEventIcon = () => {
    switch (type) {
      case "graduation":
        return <FaUserGraduate size={60} />;
      case "trip":
        return <FaSuitcaseRolling size={60} />;
      case "tshirt":
        return <FaTshirt size={60} />;
      case "gathering":
        return <FaGlassCheers size={60} />;
      case "outing":
        return <FaBus size={60} />;
      case "entry":
        return <FaTicketAlt size={60} />;
      default:
        return null;
    }
  };

  return (
    <div className="event-card">
      <div className="event-details">
        <h2>{name}</h2>
        <p>R$ {value}</p>
      </div>
      <div className="event-icon">{ getEventIcon() }</div>
    </div>
  );
};

export default EventCard;
