import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import {
  Background,
  ButtonInstructions,
  ButtonStart,
  TitleModal,
  Options,
  Title,
  TrashBlue,
  TrashGreen,
  TrashRed,
  TrashYellow,
  Paper,
  Plastic,
  Glass,
} from "./styles";
import { Modal } from "react-bootstrap";

const Game = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [gameItem, setGameItem] = useState(0);
  const [score, setScore] = useState(0);

  const closeInstructions = () => setShowInstructions(false);
  const openInstructions = () => setShowInstructions(true);
  const closeGame = () => {
    setShowGame(false);
    setScore(0);
    setGameItem(0);
  }
  const openGame = () => setShowGame(true);

  const trashs = [
    {
      title: "Jornal Velho",
      img: <Paper />,
      trash: "Blue",
    },
    {
      title: "Sacola Usada",
      img: <Plastic />,
      trash: "Red",
    },
    {
      title: "Vidro Quebrado",
      img: <Glass />,
      trash: "Green",
    },
  ];

  const handleSelectTrash = (color) => {
    if (trashs[gameItem].trash.toLowerCase() === color.toLowerCase()) {
      setScore(score + 10);
    }
    setGameItem(gameItem + 1);
  };


  return (
    <div>
      <Header />
      <Background>
        <Title>Coleta Seletiva</Title>
        <Options>
          <ButtonStart onClick={openGame}>COMEÇAR JOGO</ButtonStart>
          <ButtonInstructions onClick={openInstructions}>
            Instruções
          </ButtonInstructions>
        </Options>
      </Background>
      <Modal show={showInstructions} onHide={closeInstructions}>
        <Modal.Header closeButton>
          <Modal.Title>Instruções</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bem-vindo(a) ao "Coletiva Seletiva"! Neste jogo, você terá a
          oportunidade de aprender sobre a coleta seletiva enquanto se diverte.
          O objetivo é ensinar as pessoas a separar corretamente os resíduos e
          conscientizá-las sobre a importância da reciclagem.
          <br />
          <br />
          <strong>Objetivo do Jogo:</strong> Você deve colocar cada item no
          local correto para marcar pontos e avançar nos níveis.
        </Modal.Body>
      </Modal>
      <Modal show={showGame} onHide={closeGame}>
        <Modal.Header closeButton>
          <Modal.Title>
            <TitleModal>Selecione a lixeira correta</TitleModal>
          </Modal.Title>
        </Modal.Header>
        {gameItem == 3 ? (
          <Modal.Body
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <TitleModal style={{ color: "#234fff" }}>
              Você chegou ao Final! Parabéns!!
            </TitleModal>
            {score === 30 ? (
              <p>
                {" "}
                Parabéns! Você completou o jogo e acertou todas as lixeiras.
                Você obteve uma pontuação perfeita de {score} pontos! Continue
                praticando a coleta seletiva para ajudar a preservar o meio
                ambiente.
              </p>
            ) : (
              <p>
                {" "}
                Parabéns! Você completou o jogo e infelizmente não acertou todas
                as lixeiras. Você obteve uma pontuação de {score} pontos!
                Continue praticando a coleta seletiva para ajudar a preservar o
                meio ambiente.
              </p>
            )}
            <ButtonStart onClick={closeGame}>Fechar Jogo</ButtonStart>
          </Modal.Body>
        ) : (
          <Modal.Body
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <TitleModal style={{ color: "#234fff" }}>
              {trashs[gameItem].title}
            </TitleModal>
            {trashs[gameItem].img}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "450px",
                marginTop: "20px",
              }}
            >
              <TrashBlue onClick={() => handleSelectTrash("Blue")} />
              <TrashGreen onClick={() => handleSelectTrash("Green")} />
              <TrashRed onClick={() => handleSelectTrash("Red")} />
              <TrashYellow onClick={() => handleSelectTrash("Yellow")} />
            </div>
          </Modal.Body>
        )}
      </Modal>
    </div>
  );
};

export default Game;
