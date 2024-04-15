import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, signIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
    const a =  await signIn(username, password);
    console.log("aa: " + a);
    } catch (err) {
      setError(err.message);
    }
  };

  // Si el usuario está logueado, no mostrar el formulario de login
  if (user) {
    // Redirigir a la página de perfil
    return <Navigate to="/profile" />;
  }

  return (
    <div className="container">
      <h2>Login</h2>
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
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <Link to="/forgot-password" className="forgot-password-link">Forgot Password</Link>
    </div>
  );
}
