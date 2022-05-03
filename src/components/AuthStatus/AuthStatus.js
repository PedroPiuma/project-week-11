import React from "react";
import './AuthStatus.css'
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import logo from '../../img/petpage-logo.png'

const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  // console.log(auth);

  if (!auth.user) {
    return <div className="navbar">
      <img src={logo} alt='Logo' height={80} />
      <p className="navbar-info">Olá, faça login!</p>
    </div>
  }
  return (
    <div className="navbar">
      <img src={logo} alt='Logo' height={80} />
      <p className="navbar-info">Bem vindo {auth.user.name}!</p>
      <button onClick={() => auth.logout(() => navigate("/"))}>Sair</button>
    </div >
  );
};

export default AuthStatus;
