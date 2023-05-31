import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
`;
export const ContainerName = styled.div`
  align-items: center;
  justify-content: center;
  background-color: #04b600;
  color: #fff;
  width: 100%;
  height: 45%;
  display: flex;
  font-size: 1.5vw;
  font-weight: 600;
`;
export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 55%;
  align-items: center;
`;

export const MenuOption = styled.div`
  color: #04b600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 180px;
  background-color: #fefefe;
  cursor: pointer;
  font-weight: bold;
`;

export const Line = styled.div`
  background: #d3d3d3;
  width: 2px;
  height: 80%;
`;
