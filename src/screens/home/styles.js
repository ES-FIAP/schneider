import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
  min-height: 90vh;
`;
export const ContainerPage = styled.div`
  background: #fafafa;
  width: 100%;
  min-height: 90vh;
`;
export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-right: 50px;
`;
export const Card = styled.div`
  width: 300px;
  height: 250px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
  align-items: center;
  &:hover {
    transform: translateY(-5px);
  }
`;
