import styled from "styled-components";
import Logo from "../../images/Schneider-Electric-logo-jpg-.png";
export const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fefefe;
  align-items: center;
`;
export const ContainerLogo = styled.div`
  background-image: url(${Logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 10vw;
  height: 100%;
  right: 10%;
`;

export const MenuOption = styled.div`
  color: #9fa0a4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 190px;
  background-color: #fefefe;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 1rem 0;
  :hover {
    color: #04b600;
  }
`;

export const Line = styled.div`
  background: #d3d3d3;
  width: 2px;
  height: 80%;
`;
