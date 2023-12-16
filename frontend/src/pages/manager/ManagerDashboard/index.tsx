import { useState } from "react";

import { 
  useCreateUserWithEmailAndPassword
 } from "react-firebase-hooks/auth";

import { UserProps } from "../../../interfaces/auth";
import { auth } from "../../../services/firebaseConfig";

import UserRegistrationModal from "../../../components/UserRegistrationModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [
    createUserWithEmailAndPassword, user, loading] = 
      useCreateUserWithEmailAndPassword(auth)

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleRegisterUser = (userData: UserProps) => {
    const { email, password } = userData
    createUserWithEmailAndPassword(email, password)
    console.log(user)
  }

  return (
    <div id="page-manager-dashboard">
      <h1>Dashboard Manager</h1>
      <button
        onClick={handleOpenModal}>Adicionar Aluno</button>
      <UserRegistrationModal 
        isOpen= {isModalOpen}
        isLoading={loading || false}
        onClose={handleCloseModal}
        onRegister={handleRegisterUser} />
    </div>
  )
}