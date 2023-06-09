import styled from "styled-components";
import ImageBackground from "../../images/backgroundGamer.jpg";
import GlassIMG from "../../images/glass.png";
import PlasticIMG from "../../images/plastic.jpg";
import PaperIMG from "../../images/journal.png";
import BlueTrash from "../../images/trashblue.jpg";
import RedTrash from "../../images/trashred.jpg";
import YellowTrash from "../../images/trashyellow.jpg";
import GreenTrash from "../../images/trashgreen.jpg";
export const Background = styled.div`
  background-image: url(${ImageBackground});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 90vh;
  align-self: center;
  display: flex;
  flex-direction: column;
  z-index: -1;
  align-items: center;
`;

export const ButtonStart = styled.div`
  width: 15vw;
  height: 7vh;
  border-radius: 40px;
  background-color: green;
  text-align: center;
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;
  font-weight: 600;
  cursor: pointer;
`;

export const ButtonInstructions = styled.div`
  width: 15vw;
  height: 7vh;
  border-radius: 40px;
  background-color: #fa942e;
  text-align: center;
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;
  font-weight: 600;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 4vw;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #3f964f;
  letter-spacing: 2px;
  margin-top: 10vh;
`;

export const TitleModal = styled.div`
  font-size: 1.5vw;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #3f964f;
  letter-spacing: 2px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40vh;
  justify-content: space-between;
  width: 35%;
`;

export const Glass = styled.div`
  width: 430px;
  height: 390px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${GlassIMG});
`;

export const Plastic = styled.div`
  width: 430px;
  height: 390px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${PlasticIMG});
`;

export const Paper = styled.div`
  width: 430px;
  height: 390px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${PaperIMG});
`;

export const TrashRed = styled.div`
  width: 85px;
  height: 85px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${RedTrash});
  cursor: pointer;
`;

export const TrashGreen = styled.div`
  width: 85px;
  height: 85px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${GreenTrash});
  cursor: pointer;
`;

export const TrashYellow = styled.div`
  width: 85px;
  height: 85px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${YellowTrash});
  cursor: pointer;
`;

export const TrashBlue = styled.div`
  width: 85px;
  height: 85px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${BlueTrash});
  cursor: pointer;
`;
