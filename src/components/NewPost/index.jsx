import React, { useState } from "react";
import {
  ContainerTextArea,
  ImgContainer,
  PostCreation,
  PostOptionButton,
  PostOptions,
  FlexDiv,
} from "./styles";
import FotoSvg from "../../icons/foto";
import VideoSvg from "../../icons/video";
import { Modal, Button } from "react-bootstrap";

const NewPost = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);
  return (
    <PostCreation>
      <FlexDiv>
        <ImgContainer />
        <ContainerTextArea onClick={openModal}>
          <textLeft>Começar publicação</textLeft>
        </ContainerTextArea>
      </FlexDiv>

      <PostOptions>
        <PostOptionButton>
          <i class="bi bi-plus" style={{ fontSize: "25px" }} />
          Novo Post
        </PostOptionButton>
        <PostOptionButton>
          <FotoSvg /> Foto
        </PostOptionButton>
        <PostOptionButton>
          <VideoSvg />
          Vídeo
        </PostOptionButton>
      </PostOptions>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nova Publicação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <FlexDiv>
            <ImgContainer />
            <ContainerTextArea onClick={openModal} style={{ cursor: "text" }}>
              <textLeft>Compartilhe suas ideias...</textLeft>
            </ContainerTextArea>
          </FlexDiv>
          <FlexDiv>
            <PostOptionButton>
              <FotoSvg /> Foto
            </PostOptionButton>
            <PostOptionButton>
              <VideoSvg />
              Vídeo
            </PostOptionButton>
          </FlexDiv>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
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
              onClick={closeModal}
            >
              Publicar
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </PostCreation>
  );
};

export default NewPost;
