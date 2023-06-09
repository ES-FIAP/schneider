import Header from "../../components/Header";
import Tour from "../../components/Tour/index";
import NewPost from "../../components/NewPost";
import Profile from "../../components/Profile";
import { Container, ContainerPage, ContainerPosts, Card } from "./styles";
import Post from "../../components/Post";
import Homem from "../../images/homem1.jpg";
import Post1 from "../../images/custa1kgcarne.jpg";
import { useNavigate } from "react-router-dom";
import gameIMG from "../../images/backgroundGamer.jpg";
const Home = () => {
  const Navigate = useNavigate();
  const tutorialSteps = [
    <div>
      <h2>Passo 1</h2>
      <p>Esta é a primeira etapa do tutorial.</p>
    </div>,
    <div>
      <h2>Passo 2</h2>
      <p>Esta é a segunda etapa do tutorial.</p>
    </div>,
    <div>
      <h2>Passo 3</h2>
      <p>Esta é a terceira etapa do tutorial.</p>
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
            perfilImage={Homem}
            Text={
              "Olá amigos, recentemente comecei a me preocupar com minha dieta e como ela impacta o mundo em que vivemos, achei essa imagem bem legal :)"
            }
            ImagePost={Post1}
            Name={"Thiago Santos"}
          />
        </ContainerPosts>
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
        <Tour steps={tutorialSteps} />
      </Container>
    </ContainerPage>
  );
};
export default Home;
