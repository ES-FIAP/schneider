import React, { useState } from "react";
import { Footer, PostContainer } from "./styles";
import styled from "styled-components"
import { Modal, Button } from "react-bootstrap";

const Post = ({img}) => {

  const ImgContainer = styled.div`
  width: 70px;
  height: 60px;
  border-radius: 50px;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
`;

  return (
    <PostContainer>
      <Button
        style={{
          backgroundColor: "#3dcd58",
          color: "#fff",
          fontWeight: "500",
          fontSize: "20px",
          marginTop: "20px",
          width: "330px",
          border: "none",
        }}
      >
        Publicar
      </Button>
      <Footer>
        <i class="bi bi-hand-thumbs-up"></i> Gostei
        <i class="bi bi-chat-text"></i> Comentar
        <i class="bi bi-share"></i> Compartilhar
      </Footer>
    </PostContainer>
  );
};

export default Post;
