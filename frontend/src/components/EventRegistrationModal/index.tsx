import { useState } from "react";
import { EventRegistrationModalProps } from "../../interfaces/auth";
import "./style.scss";

const EventRegistrationModal = ({
  isOpen,
  onClose,
  addEvent,
}: EventRegistrationModalProps) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEvent({ name, value, type });
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal animate-pop back">
          <h2>Modal de Registro de Evento</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nome do Evento:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Valor do Evento:
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </label>
            <label>
              Tipo de Evento:
              <select value={type}
                onChange={(e) => setType(e.target.value)}  required >
                <option value="graduation">Formatua</option>
                <option value="trip">Passeio</option>
                <option value="tshirt">Camiseta</option>
                <option value="gathering">Confraternização</option>
                <option value="outing">Saída</option>
                <option value="entry">Entrada</option>
              </select>
            </label>
            <button type="submit">Registrar Evento</button>
          </form>
        </div>
      </div>
    )
  );
};

export default EventRegistrationModal;
