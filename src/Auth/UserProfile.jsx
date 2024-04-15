import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import './UserProfile.css'; // Importa tu archivo de estilos CSS

export default function UserProfile() {
  const { user, signOut } = useContext(AuthContext);

 
  const token = localStorage.getItem('CognitoIdentityServiceProvider.2cmlccm2odhdtvnjumgrpabp5l.lramirez@3htp.com.idToken');

if (token) {
  console.log('Token JWT:', token);
} else {
  console.log('Token JWT no encontrado en el almacenamiento local');
}



  return (
    <div className="container">
      {user && (
        <div className="user-profile">
          <h2>User Profile</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Mostrar cualquier otro dato del usuario aquí */}
        </div>
      )}
      <button className="btn" onClick={signOut}>Sign Out</button>
    </div>
  );
}
