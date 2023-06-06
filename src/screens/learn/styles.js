import styled from "styled-components";
import Gradient from "../../images/Hydrogen.jpg";
export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-image: url(${Gradient});
  background-size: cover;
  background-position: center;
  width: 100vw;
  min-height: 100vh;
`;

export const Video = styled.div`
  width: 50%;
  padding: 10px;
`;

export const Image = styled.div`
  width: 25%;
  padding: 10px;
`;
