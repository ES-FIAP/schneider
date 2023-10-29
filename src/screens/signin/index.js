import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  LoginWrapper,
  ContainerImage,
  LoginTitle,
  Form,
  Footer,
} from "./styles";
import Button from "../../components/button";
import Input from "../../components/Input";
import { Link, redirect, useNavigate } from "react-router-dom";
import Logo from "../../images/logo-SE.jpeg";

const LoginPage = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const { handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setLoggedIn(true);
  };

  if (loggedIn) {
    return navigate("/feed");
  }

  return (
    <Container>
      <img
        src={Logo}
        width={300}
        height={80}
        styles="max-width: 50%; max-height: 8vh; height: auto; margin-left: 10vw;"
      />
      <ContainerImage />
      <LoginWrapper>
        <Form>
          <LoginTitle>Seja bem-vindo(a) </LoginTitle>
          <Input placeholder="E-mail" id="email" name="email" />

          <Input placeholder="Senha" id="password" name="password" />
          <div>
            <Button
              type="submit"
              text={"Acessar"}
              click={() => setLoggedIn(true)}
            />
          </div>
        </Form>
      </LoginWrapper>
      <Footer />
    </Container>
  );
};

export default LoginPage;
