import Header from "../../components/Header";
import Tour from "../../components/Tour/index";
import NewPost from "../../components/NewPost";
import Profile from "../../components/Profile";
import {
  Container,
  ContainerPage,
  ContainerPosts,
  Card,
  ContainerRight,
  SubTitle,
} from "./styles";
import Post from "../../components/Post";
import Homem from "../../images/homem1.jpg";
import mulher1 from "../../images/mulher1.jpg";
import senhora from "../../images/senhora.jpg";
import videoImg from "../../images/videoOque.png";
import Post1 from "../../images/custa1kgcarne.jpg";
import { useNavigate } from "react-router-dom";
import gameIMG from "../../images/backgroundGamer.jpg";
import AprendaImg from "../../images/aprenda.png";
import gameFail from "../../images/gamefail.png";

const Home = () => {
  const Navigate = useNavigate();
  const tutorialSteps = [
    <div>
      <h2>Sobre</h2>
      <br />
      <p>
        Bem vindo à GreenHub! Estamos contentes com sua visita e esperamos que
        seja uma plataforma muito proveitosa para seu cotidiano.{" "}
      </p>
    </div>,
    <div>
      <h2>Game</h2>
      <br />
      <p>
        Aqui temos um jogo educativo para informar sobre qual tipo de lixo
        utilizar.
      </p>
      <img
        src={gameIMG}
        style={{ borderRadius: "10px", width: "100%", height: "60%" }}
      />
    </div>,
    <div>
      <h2>Aprenda com a Schneider</h2>
      <br />
      <p>
        Também temos uma seleção de conteúdos sobre sustentabilidade! Checa aí!
      </p>
      <img
        src={AprendaImg}
        style={{ borderRadius: "10px", width: "100%", height: "60%" }}
      />
    </div>,
  ];
  return (
    <ContainerPage>
      <Header></Header>
      <Container>
        <ContainerRight>
          <Profile></Profile>
          <Card style={{ height: "600px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => Navigate("/calendar")}
            >
              <SubTitle>Eventos</SubTitle>{" "}
              <p style={{ color: "#007bff" }}>Ver mais</p>
            </div>

            <p>
              <strong>Innovation Summit South America</strong> - 30/10/2023
            </p>
            <img
              style={{ borderRadius: "4px", width: "100%", height: "30%" }}
              src="https://eu.eventscloud.com/file_uploads/23b7e5f0846c9d0f8ac57c1985e15a95_998-21519431_Innovation-Summit-2021_GMA_KV_480x280_event-name.jpg"
            />
            <p style={{ marginTop: "5px" }}>
              <strong> Innovation Talk </strong> - 30/09/2023
            </p>
            <img
              style={{ borderRadius: "4px", width: "100%", height: "30%" }}
              src="https://www.se.com/br/pt/assets/v2/547/media/14476/1200/2018_SchneiderElectric_HannoverMesse__1511-IC-490x280.jpg"
            />
          </Card>
        </ContainerRight>
        <ContainerPosts>
          <NewPost />
          <Post
            perfilImage={
              "https://media.istockphoto.com/id/1289220545/pt/foto/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=J8IOft88XNXaMMjGBZUbbUVPPiDkxXO2uX5lxuWFRbM="
            }
            Text={
              "Mostrei o jogo coleta seletiva para meu filho, ele amou e conseguiu acerta 2. em breve ele acertará todos. Muito Orgulho"
            }
            ImagePost={
              "https://media.istockphoto.com/id/1139306352/pt/foto/volunteers-collecting-garbage.jpg?s=612x612&w=0&k=20&c=YHM954ZpufTy8BIZDEhiUWA_m1fjmtu1BLbcuFMogHs="
            }
            Name={"Manuela Guimaraês"}
          />
          <Post
            perfilImage={Homem}
            Text={
              "Olá amigos, recentemente comecei a me preocupar com minha dieta e como ela impacta o mundo em que vivemos, achei essa imagem bem legal :)"
            }
            ImagePost={Post1}
            Name={"Thiago Santos"}
          />
          <Post
            perfilImage={mulher1}
            Text={
              "Aprendendo sobre os pilares da sustentabilidade com o Especialista. Video Muito bom Recomendo!!"
            }
            ImagePost={videoImg}
            Name={"Verônica Lima"}
          />
        </ContainerPosts>
        <ContainerRight>
          <Card
            onClick={() => Navigate("/game")}
            style={{ textAlign: "center", height: "350px", cursor: "pointer" }}
          >
            <SubTitle
              style={{
                fontSize: "25px",
                color: "#42b4e6",
              }}
            >
              Teste seus conhecimentos
            </SubTitle>
            <p
              style={{
                fontFamily: "fantasy",
                letterSpacing: "2px",
                fontSize: "20px",
                color: "#fa942e",
              }}
            >
              Game Coleta Seletiva
            </p>
            <img
              src={gameIMG}
              style={{ borderRadius: "10px", width: "100%", height: "60%" }}
            />
          </Card>

          <Card
            onClick={() => Navigate("/calculator")}
            style={{ textAlign: "center", height: "350px", cursor: "pointer" }}
          >
            <SubTitle style={{ color: "#3dcd58" }}>EcoVeg Calculadora</SubTitle>
            <img
              src={
                "https://media.istockphoto.com/id/1370669875/pt/vetorial/calculator-math-device-financial-analytics-bookkeeping-budget-debit-credit-calculations.jpg?s=612x612&w=0&k=20&c=dItxLAc2jiD6vBNbESmIRidLcXLupHedttNco80z3HA="
              }
              style={{ borderRadius: "10px", width: "100%", height: "85%" }}
            />
          </Card>
        </ContainerRight>
        <Tour steps={tutorialSteps} />
      </Container>
    </ContainerPage>
  );
};
export default Home;
