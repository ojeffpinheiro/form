import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth } from "../../../services/firebaseConfig";

import UserRegistrationModal from "../../../components/UserRegistrationModal";
import Header from "../../../components/Header";
import Session from "../../../components/Session";

import { EventProps, UserProps } from "../../../interfaces/auth";

import "./style.scss";
import EventRegistrationModal from "../../../components/EventRegistrationModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEventOpen, setIsModalEventOpen] = useState(false);

  const entries: EventProps[] = [
    { type: "entry", name: "Rifa Dia das Mães", value: 300 },
    { type: "entry", name: "Rifa Festa Junina", value: 500 },
    { type: "entry", name: "Rifa Dia das Crianças", value: 500 },
    { type: "entry", name: "Rifa Dia dos Pais", value: 500 },
    { type: "entry", name: "Rifa Natal", value: 500 },
  ];

  const expenses: EventProps[] = [
    { type: "tshirt", name: "Camiseta", value: 1200 },
    { type: "graduation", name: "Formatura", value: 1200 },
    { type: "trip", name: "Passeio", value: 1200 },
    { type: "outing", name: "Cinema", value: 1200 },
    { type: "gathering", name: "Confra", value: 1200 },
  ];

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModalEvent = () => {
    setIsModalEventOpen(true);
  }

  const handleCloseModalEvent = () => {
    setIsModalEventOpen(false);
  }

  const handleRegisterUser = async (userData: UserProps) => {
    try {
      const { email, password } = userData;
      await createUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log("Error registering user", error);
      alert(`Error registering user: ${error}`);
    }
  };

  const handleRegisterEvent = (eventData: EventProps) => {
    console.log(eventData);
  };

  return (
    <div id="page-manager-dashboard">
      <div className="container">
        <Header onClick={handleOpenModal} />

        <main className="animate-up delay-2">
          <Session
            title="Arrecadações"
            data={entries}
            onClickEventCard={handleOpenModalEvent} />
          <Session
            title="Eventos"
            data={expenses}
            onClickEventCard={handleOpenModalEvent} />
        </main>

        <EventRegistrationModal
          isOpen={isModalEventOpen}
          onClose={handleCloseModalEvent}
          addEvent={handleRegisterEvent} />

        <UserRegistrationModal
          isOpen={isModalOpen}
          isLoading={loading || false}
          onClose={handleCloseModal}
          onRegister={handleRegisterUser}
        />
      </div>
    </div>
  );
}
