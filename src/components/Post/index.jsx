import React, { useState } from "react";
import {
  ContainerText,
  Footer,
  PostContainer,
  HeaderContainer,
  ButtonAction,
  NameText,
} from "./styles";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Post = ({ perfilImage, ImagePost, Text, Name }) => {
  const PerfilImage = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 80px;
    background-image: url(${perfilImage});
    background-size: cover;
    background-position: center;
    margin-right: 5px;
    @media (max-width: 600px) {
      width: 45px;
      height: 45px;
    }
  `;
  const ContainerImage = styled.div`
    width: 480px;
    height: 300px;
    margin-left: 5%;
    border-radius: 4px;
    background-image: url(${ImagePost});
    background-size: cover;
    background-position: center;
    @media (max-width: 600px) {
      width: 90%;
    }
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
