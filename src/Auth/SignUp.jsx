import { useState } from "react";
import { signUp } from "./auth";
//import './Signup.css'; // Importa tu archivo de estilos CSS

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(username, email, password);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (success) {
    return (
      <div className="container">
        <h2>Registro Exitoso !!</h2>
        <p>Verifica tu e-mail para el codigo de confirmación.</p>
        <p> puedes confirmar <a href="/confirm-sign-up">aqui </a>  </p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Registro de Nuevo Usuario - Cognito</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="input-field"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Signup</button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
