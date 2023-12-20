import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { UserProps } from "../../../interfaces/auth";
import { EntryProps, ExpenseProps } from "../../../interfaces/entities";

import { auth } from "../../../services/firebaseConfig";

import UserRegistrationModal from "../../../components/UserRegistrationModal";
import Header from "../../../components/Header";

import "./style.scss";
import Session from "../../../components/Session/inde";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const entries = [
    { id: 1, name: "Rifa Festa Junina", amount: 300 },
    { id: 2, name: "Rifa Dia das Mães", amount: 500 },
  ] as EntryProps[];

  const expenses = [
    { id: 1, name: "Formatura", value: 1200 },
    { id: 2, name: "Passeio", value: 1200 },
  ] as ExpenseProps[];

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRegisterUser = (userData: UserProps) => {
    try {
      const { email, password } = userData;
      createUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log("Error registering user", error);
      alert(`Error registering user: ${error}`);
    }
  };

  const renderEntries = () => {
    return (
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.name}</li>
        ))}
      </ul>
    );
  };

  const renderExpenses = () => {
    return (
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>{expense.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <div id="page-manager-dashboard">
      <div className="container">
        <Header onClick={handleOpenModal} />

        <main className="animate-up delay-2">
          <Session title="Arrecadações" children={renderEntries()} />
          <Session title="Eventos" children={renderExpenses()} />
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
