import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  backgroundcolor: #d3d3d3;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 190px;
  border-radius: 50%;
`;

export const ProfileName = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #fafafa;
  margin-left: 20px;
`;

export const ProfileBio = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

export const Wallpaper = styled.img`
  width: 100vw;
  height: 49vh;
  position: absolute;
  top: 10vh;
  left: 0;
  z-index: -1;
  display: flex;
`;
export const CardBio = styled.div`
  width: 900px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
  margin-left: 20vw;
  display: flex;
  flex-direction: column;
`;
