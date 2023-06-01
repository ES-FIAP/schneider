import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  LoginWrapper,
  ContainerImage,
  Backdrop,
  LoginTitle,
  Form,
} from "./styles";
import Button from "../../components/button";
import Input from "../../components/Input";
import { Link, redirect, useNavigate } from "react-router-dom";

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
    console.log("0oi");
    setLoggedIn(true);
  };

  if (loggedIn) {
    return navigate("/home");
  }

  return (
    <Container>
      <LoginWrapper>
        <Form>
          <LoginTitle>Seja bem-vindo(a)!</LoginTitle>
          <Input placeholder="E-mail" id="email" name="email" />

          <Input placeholder="Senha" id="password" name="password" />

          <Button
            type="submit"
            text={"Acessar"}
            click={() => setLoggedIn(true)}
          />
        </Form>
      </LoginWrapper>
      <ContainerImage />
      <Backdrop />
    </Container>
  );
};

export default LoginPage;
