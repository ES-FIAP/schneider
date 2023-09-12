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
        Bem vindo à Schneider Social! Estamos contentes com sua visita e
        esperamos que seja uma plataforma muito proveitosa para seu cotidiano.{" "}
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
        <Profile></Profile>
        <ContainerPosts>
          <NewPost />
          <Post
            perfilImage={senhora}
            Text={
              "Mostrei o jogo coleta seletiva para meu filho, ele amou e conseguiu acerta 2. em breve ele acertará todos. Muito Orgulho"
            }
            ImagePost={gameFail}
            Name={"Nilza Almeida"}
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
            <p
              style={{
                fontFamily: "fantasy",
                letterSpacing: "2px",
                fontSize: "25px",
                color: "#42b4e6",
              }}
            >
              Teste seus conhecimentos
            </p>
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
            Calculadora
          </Card>
        </ContainerRight>
        <Tour steps={tutorialSteps} />
      </Container>
    </ContainerPage>
  );
};
export default Home;
