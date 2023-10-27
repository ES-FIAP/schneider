import styled from "styled-components";
import grad from "../../images/gradient.jpg";
import pvw from "../../utils/pixels";
import image from "../../images/fotomenina.png";
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  overflow: hidden !important;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContainerImage = styled.div`
  height: 70vh;
  width: 30vw;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  position: absolute;
  margin-top: 10%;
  opacity: 0.95;

  left: 190px;

  @media (max-width: 600px) {
    display: none;
    width: 0;
    height: 0;
  }
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
  margin-left: 30vw;
  text-align: center;

  @media (max-width: 600px) {
    margin-left: 0;
    width: 100vw;
  }
`;

export const LoginTitle = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 0.5px;
  line-height: 30px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  color: #00b332;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  padding: 5vw;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 600px) {
    margin: 0;
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
