import { useState } from "react";

import "./styles.scss";
import imgIllustration from "../../assets/img1.png";

export function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação de usuário e senha
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Preencha todos os campos.");
      return;
    }

    // Lógica de autenticação aqui

    // Feedback de sucesso ou erro
    setErrorMessage("Usuário ou senha incorretos.");
  };

  return (
    <div id="page-auth">
      <aside>
        <img src={imgIllustration} alt="Ilustração com alunos" />
        <strong>Acompanhe seus pagamentos do ano</strong>
      </aside>
      <main>
        <div className="main-content">
          <strong>Login</strong>
          <p>Bem-vindo(a)</p>

          <form onSubmit={handleSignIn}>
            <div className="input-group">
              <label htmlFor="username">Usuário</label>
              <input
                id="username"
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">
              <span>Entrar</span>
            </button>
          </form>
          
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        </div>
      </main>
    </div>
  );
}
