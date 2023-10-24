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
    cellphone: yup.number().positive().integer().min(8),
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Aqui você pode processar os dados do formulário, se necessário
    console.log(data);

    // Marque o usuário como logado
    setLoggedIn(true);

    // Redirecione para a página de feed após o login bem-sucedido
    navigate("/feed");
  };

  if (loggedIn) {
    return navigate("/feed");
  }
  return (
    <Container>
      <img src={Logo} width={300} height={80} />
      <LoginWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <LoginTitle>Seja bem-vindo(a)</LoginTitle>
          <Input
            placeholder="Nome Completo"
            id="nome"
            name="nome"
            ref={register}
          />
          <Input
            placeholder="Celular"
            id="cellphone"
            name="cellphone"
            ref={register}
          />
          <Input placeholder="E-mail" id="email" name="email" ref={register} />
          <Input
            placeholder="Senha"
            id="password"
            name="password"
            ref={register}
          />

          <Button
            type="submit"
            text={"Criar Conta"}
            click={() => setLoggedIn(true)}
          />
        </Form>
      </LoginWrapper>
      <Footer />
    </Container>
  );
};

export default LoginPage;
