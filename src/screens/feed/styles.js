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

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const ContainerPage = styled.div`
  background: #f1f5f9;
  width: 100%;
  min-height: 90vh;
`;
export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  margin-right: 50px;
  @media (max-width: 600px) {
    margin-right: 0px;
    width: 95%;
  }
`;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 600px) {
    display: none;
    height: 0px;
  }
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
export const SubTitle = styled.p`
  font-size: 21px;
  color: #515151;
  font-weight: 500;
`;
