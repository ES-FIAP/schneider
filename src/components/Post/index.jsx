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
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-image: url(${perfilImage});
    background-size: cover;
    background-position: center;
  `;
  const ContainerImage = styled.div`
    width: 350px;
    height: 250px;
    margin-left: 10%;
    border-radius: 20px;
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
