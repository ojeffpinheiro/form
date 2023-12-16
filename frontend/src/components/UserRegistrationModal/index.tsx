import { useState } from "react";

import { UserRegistrationModalProps } from "../../interfaces/auth";

import "./style.scss";

const UserRegistrationModal = ({
  isOpen,
  isLoading,
  onClose,
  onRegister,
}: UserRegistrationModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("123456");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    // Adicionar validação dos campos
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      password.trim() === "" ||
      age.trim() === ""
    ) {
      setErrorMessage("Preencha todos os campos.");
      return;
    }

    // Lógica de cadastro aqui
    // Chame a função onRegister com os dados do usuário
    onRegister({ name, email, phone, age, password });

    // Limpar os campos e fechar o modal
    setName("");
    setEmail("");
    setPhone("");
    setAge("");
    setPassword("");
    setErrorMessage("");
    onClose();
  };

  return (
    // Renderizar o modal apenas se isOpen for true
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Cadastro de Usuário</h2>
          <form onSubmit={handleRegister} >
            <div className="input-group">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Celular</label>
              <input
                id="phone"
                type="tel"
                placeholder="Digite seu celular"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="age">Idade</label>
              <input
                id="age"
                type="number"
                placeholder="Digite sua idade"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="button-group">
              <button className="close-button" onClick={onClose}>
                Fechar
              </button>
              <button type="submit" onClick={handleRegister}>
                { isLoading ? "Cadastrando..." : "Cadastrar" }
              </button>
            </div>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    )
  );
};

export default UserRegistrationModal;
