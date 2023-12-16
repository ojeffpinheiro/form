import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth } from "../../services/firebaseConfig";

import "./styles.scss";
import imgIllustration from "../../assets/img1.png";

export function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validação de usuário e senha
      if (email.trim() === "" || password.trim() === "") {
        setErrorMessage("Preencha todos os campos.");
        return;
      }

      // Feedback de sucesso ou erro
      signInWithEmailAndPassword(email, password);

      { user && navigate("/dashboard"); }

      { error && setErrorMessage(error.message || "Usuário ou senha inválidos") }
    } catch (error) {
      setErrorMessage("Oops, algo deu errado.");
      console.log(error);
    }
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
              <label htmlFor="email">Usuário</label>
              <input
                id="email"
                type="text"
                placeholder="Usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              {loading ? "Carregando..." : "Entrar"}
            </button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </main>
    </div>
  );
}
