import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthContext";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import ConfirmSignUp from "./Auth/ConfirmSignUp";
import Profile from "./Auth/UserProfile";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";
import RouteGuard from "./RouteGuard";
import Products from "./Componentes/Products";



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <nav>
  <ul>
    <li>
      <a href="/signup">Registrar User</a>
    </li>
    <li>
      <a href="/confirm-sign-up">Confirmar User</a>
    </li>
    <li>
      <a href="/login">Login</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
    <li>
      <a href="/profile">Profile</a>
    </li>
    <li>
      <a href="/products">Productos</a>
    </li>
  </ul>
</nav>
<br/>
<hr/>
        <main>
          <Routes>
      
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/confirm-sign-up" element={<ConfirmSignUp />} />

            <Route
              path="/profile"
              element={
                <RouteGuard>
                  <Profile />
                </RouteGuard>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
