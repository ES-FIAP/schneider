import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10px;
  width: 100%;
`;

export const ContainerText = styled.div`
  width: 85%;
  height: 20%;
  padding: 10px;
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
