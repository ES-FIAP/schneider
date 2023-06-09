import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  background-color: #fefefe;
  box-shadow: 0 12px 30px -12px rgba(51, 51, 51, 0.36);
  justify-content: space-between;

  border-radius: 10px;
  width: 500px;
  padding: 10px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  position: relative;
  padding: 20px;
  justify-content: space-around;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
`;

export const ContainerText = styled.div`
  width: 90%;
  height: 20%;
  padding-left: 25px;
`;

export const ButtonAction = styled.div`
  color: #9fa0a4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  position: relative;
  width: 115px;
  background-color: #fefefe;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.95rem;
  padding: 0.3rem 0;
  :hover {
    color: #04b600;
  }
`;
