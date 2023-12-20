import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth } from "../../../services/firebaseConfig";

import UserRegistrationModal from "../../../components/UserRegistrationModal";
import Header from "../../../components/Header";
import Session from "../../../components/Session";

import { EventsProps, UserProps } from "../../../interfaces/auth";

import "./style.scss";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const entries: EventsProps[] = [
    { id: 1, type: "entry", name: "Rifa Dia das Mães", value: 300 },
    { id: 2, type: "entry", name: "Rifa Festa Junina", value: 500 },
    { id: 3, type: "entry", name: "Rifa Dia das Crianças", value: 500 },
    { id: 4, type: "entry", name: "Rifa Dia dos Pais", value: 500 },
    { id: 5, type: "entry", name: "Rifa Natal", value: 500 },
  ];

  const expenses: EventsProps[] = [
    { id: 1, type: "expense", name: "Camiseta", value: 1200 },
    { id: 2, type: "expense", name: "Formatura", value: 1200 },
    { id: 2, type: "expense", name: "Passeio", value: 1200 },
    { id: 2, type: "expense", name: "Cinema", value: 1200 },
    { id: 2, type: "expense", name: "Confra", value: 1200 },
  ];

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  return (
    <div id="page-manager-dashboard">
      <div className="container">
        <Header onClick={handleOpenModal} />

        <main className="animate-up delay-2">
          <Session title="Arrecadações" data={entries} />
          <Session title="Eventos" data={expenses} />
        </main>

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
