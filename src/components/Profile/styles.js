import styled from "styled-components";
import StarImg from "../../images/star.png";
import AvatarImg from "../../images/avatar.png";
export const Container = styled.div`
  width: 13vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  align-items: center;
  border: 0.5px solid #d3d3d3;
  justify-content: center;
`;

export const Star = styled.div`
  height: 35px;
  width: 35px;
  background-image: url(${StarImg});
  background-size: cover;
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
