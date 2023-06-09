import styled from "styled-components";
import StarImg from "../../images/starBlue.svg";
import AvatarImg from "../../images/mulher1.jpg";
export const Container = styled.div`
  width: 13vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  align-items: center;
  box-shadow: 0 12px 30px -12px rgba(51, 51, 51, 0.36);
  justify-content: center;
`;

export const Star = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${StarImg});
  background-size: contain;
  background-position: center;
  margin: 10px;
`;
export const NameContainer = styled.div`
  width: 100%;
  font-size: 16px;
  color: #000;
  text-align: center;
  padding-top: 5px;
`;
export const XPContainer = styled.div`
  font-family: "Arial", sans-serif;
  font-size: 35px;
  font-weight: bold;
  color: #42b4e6;

  text-shadow: 0px 1px 0px rgba(0, 59, 172, 0.76);
`;
export const DescriptionContainer = styled.div`
  width: 100%;
  font-size: 16px;
  color: #00000099;
  text-align: center;
  padding-top: 5px;
`;
export const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-image: url(${AvatarImg});
  background-size: cover;
  background-position: center;
`;

export const Line = styled.div`
  background-color: #d3d3d3;
  width: 80%;
  height: 1px;
  margin-top: 5px;
`;
