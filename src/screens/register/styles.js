import styled from "styled-components";
import image from "../../images/walpapermaos.png";
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  overflow: hidden !important;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ContainerImage = styled.div`
  height: 40vh;
  width: 100vw;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 0;
  top: 12vh;
  @media (max-width: 600px) {
    top: 18vh;
    height: 80%;
    max-height: 70%;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5vw;
  margin-top: 5vh;
  width: 100%;
  overflow: hidden !important;
  position: relative;
  text-align: center;
  align-items: flex-start;

  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 20vh;
  }
`;

export const LoginTitle = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 1.8vw;
  letter-spacing: 0.5px;
  line-height: 27px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffff;
  text-shadow: black 0.1em 0.1em 0.2em;

  @media (max-width: 600px) {
    font-size: 6vw;
    width: 100%;
    margin-right: 100px;
  }
`;

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  padding: 5vw;
  background-color: aliceblue;
  height: 55%;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #dddd;
  border-radius: 20px;
  text-align: center;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 90%;
  }
`;

export const Label = styled.label`
  color: #333333;
  font-size: 16px;
  margin-bottom: 8px;
  outline: none;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #3dcd58;
  color: #ffffff;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Footer = styled.div`
  width: 100vw;
  height: 13vh;
  background-color: #00b332;
  position: absolute;
  top: 95%;
`;
