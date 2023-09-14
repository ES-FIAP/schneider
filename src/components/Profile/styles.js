import styled from "styled-components";
import StarImg from "../../images/starBlue.svg";
import AvatarImg from "../../images/homem2.jpg";
export const Container = styled.div`
  width: 16vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  align-items: center;
  box-shadow: 0 12px 30px -12px rgba(51, 51, 51, 0.36);
  justify-content: center;
  margin-bottom: 2vh;
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
  font-size: 21px;
  color: #515151;
  text-align: center;
  padding-top: 5px;
  font-weight: 500;
`;
export const SubTitle = styled.p`
  font-size: 21px;
  color: #515151;
  font-weight: 500;
  text-align: center;
  justify-content: center;
  align-items: center;
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
  width: 130px;
  height: 130px;
  border-radius: 70px;
  background-image: url("https://media.istockphoto.com/id/1367421610/pt/foto/view-of-young-man-using-a-smartphone-at-night-time-with-city-view-landscape-in-the-background.jpg?s=612x612&w=0&k=20&c=8LBMiPA1n2ycEUXUr_UVUSBPAppf5Y5UXJuybHb62DU=");
  background-size: cover;
  background-position: center;
  margin-top: 15px;
`;

export const Line = styled.div`
  background-color: #d3d3d3;
  width: 80%;
  height: 1px;
  margin-top: 5px;
`;
