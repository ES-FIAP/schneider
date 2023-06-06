import React from "react";
import styled from "styled-components";

const SustainabilityBadge = styled.div`
  display: inline-block;
  background-color: ${(props) => props.color};
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
  margin-right: 5px;
`;

const SustainabilityRanks = {
  "Aprendiz 1": "#4CAF50", // Verde
  "Aprendiz 2": "#00B8FF", // Azul
  "Aprendiz 3": "#FFC107", // Amarelo
  "Aprendiz 4": "#FF5722", // Laranja
  "Aprendiz 5": "#FF4081", // Rosa
};

const UserRank = ({ rank }) => {
  const color = SustainabilityRanks[rank] || "#000000"; // Preto como padrão

  return <SustainabilityBadge color={color}>{rank}</SustainabilityBadge>;
};

export default UserRank;
