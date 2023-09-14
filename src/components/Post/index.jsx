import React, { useState } from "react";
import {
  ContainerText,
  Footer,
  PostContainer,
  HeaderContainer,
  ButtonAction,
  NameText
} from "./styles";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Post = ({ perfilImage, ImagePost, Text, Name }) => {
  const PerfilImage = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 80px;
    background-image: url(${perfilImage});
    background-size: cover;
    background-position: center;
    margin-right: 10px;
  `;
  const ContainerImage = styled.div`
    width: 450px;
    height: 300px;
    margin-left: 5%;
    border-radius: 4px;
    background-image: url(${ImagePost});
    background-size: cover;
    background-position: center;

  `;
  return (
    <PostContainer>
      <HeaderContainer>
        <PerfilImage />
        <NameText>{Name}</NameText>
      </HeaderContainer>
      <ContainerText>{Text}</ContainerText>

      <ContainerImage />
      <Footer>
        <ButtonAction>
          <i class="bi bi-hand-thumbs-up"></i> Gostei
        </ButtonAction>
        <ButtonAction>
          <i class="bi bi-chat-text"></i> Comentar
        </ButtonAction>

        <ButtonAction>
          <i class="bi bi-share"></i> Compartilhar
        </ButtonAction>
      </Footer>
    </PostContainer>
  );
};

export default Post;
