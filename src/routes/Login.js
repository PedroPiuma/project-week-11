import React from "react";
import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Div, Form, Img, Input, Label } from "./styled";
import logo from '../img/petpage-logo.png'

function Login() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const data = {
      email,
      password,
    };
    auth.login(data, () => {
      navigate(from);
    });
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Label>
          E-mail: <Input type="email" name="email" />
        </Label>
        <Label>
          Senha: <Input type="password" name="password" />
        </Label>
        <Button type="submit">Entrar</Button>
      </Form>
      <Img src={logo} alt='Logo' height={200} />
    </Div>
  );
}

export default Login;
