import React from "react";
import styled from "styled-components";
import AvatarImg from "../../images/homem2.jpg";

export const PostCreation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  background-color: #fefefe;
  box-shadow: 0 8px 15px -8px rgba(51, 51, 51, 0.36);
  justify-content: space-between;
  height: 18vh;
  padding-left: 10px;
  padding-right: 10px;
  width: 550px;
  margin-bottom: 2vh;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
`;

export const textLeft = styled.text`
  text-align: left;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 2vw;
  }
`;

export const ContainerTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px;
  background-color: #fefefe;
  border: 2px solid #d3d3d3;
  border-radius: 30px;
  padding: 15px;
  width: 95%;
  text-align: left;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 90%;
    padding: 5px;
    margin: 15px;
  }
`;

export const PostOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const PostOptionButton = styled.button`
  width: 120px;
  height: 40px;
  margin-bottom: 10px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  justify-content: space-around;
  display: flex;
  align-items: center;
  color: #00b8ff;
  background-color: transparent;
  @media (max-width: 600px) {
    width: 30%;
    font-size: 2.5vw;
  }
`;

export const ImgContainer = styled.div`
  width: 70px;
  height: 60px;
  border-radius: 50px;
  background-image: url("https://media.istockphoto.com/id/1367421610/pt/foto/view-of-young-man-using-a-smartphone-at-night-time-with-city-view-landscape-in-the-background.jpg?s=612x612&w=0&k=20&c=8LBMiPA1n2ycEUXUr_UVUSBPAppf5Y5UXJuybHb62DU=");
  background-size: cover;
  background-position: center;
  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
    border-radius: 90px;
  }
`;
