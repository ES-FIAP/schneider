import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  LoginWrapper,
  ContainerImage,
  Backdrop,
  LoginTitle,
} from "./styles";
import Button from "../../components/button";
import Input from "../../components/Input";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

function LoginPage() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <LoginWrapper>
        <LoginTitle>Seja bem-vindo(a)!</LoginTitle>
        <Input
          placeholder="E-mail"
          id="email"
          name="email"
          {...register("email")}
        />
        {errors?.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
        <Input
          placeholder="Senha"
          {...register("password")}
          id="password"
          name="password"
        />
        {errors?.password && (
          <p className="error-message">{errors?.password?.message}</p>
        )}{" "}
        <Button type="submit" text={"Login"} />
      </LoginWrapper>
      <ContainerImage />
      <Backdrop />
    </Container>
  );
}

export default LoginPage;
