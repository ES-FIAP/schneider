import styled from "styled-components";
import grad from "../../images/gradient.jpg";
import image from "../../images/imageLogin.png";
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;

  overflow: hidden !important;
`;

export const ContainerImage = styled.div`
  height: 100vh;
  width: 60vw;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  position: relative;
  opacity: 0.5;
`;

export const Backdrop = styled.div`
  position: absolute;

  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 2;
  height: 100vh;
  width: 60vw;
  background: #19272ecc;
  opacity: 0.4;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 30vw;
  overflow: hidden !important;
  background-color: #fefefe;
  position: relative;
  align-items: flex-start;
`;

export const LoginTitle = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  letter-spacing: 0.5px;
  line-height: 27px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  color: #00b332;
`;

export const Form = styled.form`
  align-items: start;
  justify-content: center;
  padding: 5vw;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
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
  font-size: 16px;
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
