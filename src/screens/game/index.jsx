import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import {
  Background,
  ButtonInstructions,
  ButtonStart,
  Item,
  Options,
  Title,
  Food,
  TrashBlue,
  TrashGreen,
  TrashRed,
  TrashYellow,
} from "./styles";
import { Modal } from "react-bootstrap";

const Game = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [gameItem, setGameItem] = useState(0);

  const closeInstructions = () => setShowInstructions(false);
  const openInstructions = () => setShowInstructions(true);
  const closeGame = () => setShowGame(false);
  const openGame = () => setShowGame(true);

  const trashs = [
    {
      title: "Resto de Alimento",
      img: Food,
    },
  ];

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
          conscientizá-las sobre a importância da reciclagem. 1.Objetivo do Jogo
          Você deve colocar cada item no local correto para marcar pontos e
          avançar nos níveis
        </Modal.Body>
      </Modal>
      <Modal show={showGame} onHide={closeGame}>
        <Modal.Header closeButton>
          <Modal.Title>Selecione a lixeira correta Score:0</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ alignItems:'center', display:'flex', flexDirection:'column', padding:'20px'}}>
          <Food />
          <div style={{ display: "flex" , justifyContent:'space-around', width:"450px"}}>
            <TrashBlue />
            <TrashGreen />
            <TrashRed />
            <TrashYellow />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Game;
