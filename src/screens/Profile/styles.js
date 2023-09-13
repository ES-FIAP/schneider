import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f5f9;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 190px;
  border-radius: 50%;
  z-index: 2;
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
export const Wallpaper = styled.div`
  background-image: url(https://4.bp.blogspot.com/-7_7Xk44sL28/Un0I7-PQ40I/AAAAAAAAiuM/VcAudz39qcE/s1600/Building-arco-pedra-arquitetura-hdr-485x728.jpg); /* Set the wallpaper image as background */
  background-size: cover; /* Ensure the image covers the entire container */
  background-position: center; /* Center the image */
`;
export const Card = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: #ffffff;

  border-radius: 20px;
  padding: 20px;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  box-shadow: 4px 5px 15px 0px #606090;
`;
export const Data = styled.div`
  width: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 30%;
`;
export const SubTitle = styled.p`
  background-color: #009530;
  font-size: 0.7vw;
  color: #ffffff;
  font-weight: 600;
  padding: 5px;
  width: 120px;
  position: relative;
  text-align: center;
  border-radius: 7px;
`;
export const Value = styled.p`
  font-size: 1rem;
  color: #717171;
  position: relative;
  font-weight: 600;
`;
export const Bio = styled.cite`
  width: 60%;
`;
