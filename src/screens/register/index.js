import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import Logo from "../../images/logo-SE.jpeg";
import axios from "axios";
import { detectar_mobile } from "../../utils/index";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cell, setCellphone] = useState("");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(detectar_mobile());
  }, []);

  const onSubmit = async () => {
    navigate("/feed");
    try {
      const response = await axios.post(
        "https://pedroscardua.app.n8n.cloud/webhook/fiap-pedro-greenhub",
        cell
      );

      console.log("post", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container>
      {mobile ? (
        <img src={Logo} width={"100%"} height={"12%"} resource="cover" />
      ) : (
        <img
          src={Logo}
          width={300}
          height={80}
          styles="max-width: 50vw; max-height: 10vh;margin-left: 10vw;"
        />
      )}

      <ContainerImage />
      <LoginWrapper>
        <LoginTitle>Registre-se e Começe já</LoginTitle>
        <Form>
          <Input
            placeholder="Nome Completo"
            id="nome"
            name="nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Celular"
            id="cellphone"
            name="cellphone"
            onChange={(e) => setCellphone(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            text={"Criar Conta"}
            width={"17vw"}
            click={() => onSubmit()}
          />
        </Form>
      </LoginWrapper>
      <Footer />
    </Container>
  );
};

export default Register;
