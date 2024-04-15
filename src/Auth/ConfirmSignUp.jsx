import { useState } from "react";
import { confirmSignUp } from "./auth";

export default function ConfirmSignUp() {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await confirmSignUp(username, code);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (success) {
    return (
      <div className="container">
        <h2>Confirmación exitosa!</h2>
        <p>Ahora puedes hacer Login <a href="/login"> Aqui !! </a></p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Confirm Sign Up</h2>
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
            type="text"
            className="input-field"
            placeholder="Confirmation code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Confirm</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
