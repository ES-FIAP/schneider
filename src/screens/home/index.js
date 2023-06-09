import Header from "../../components/Header";
import Tour from "../../components/Tour/index";
import NewPost from "../../components/NewPost";
import Profile from "../../components/Profile";
import { Container, ContainerPage, ContainerPosts } from "./styles";
import Post from "../../components/Post";
import Homem from "../../images/homem1.jpg";
import Post1 from "../../images/custa1kgcarne.jpg";
const Home = () => {
  const tutorialSteps = [
    <div>
      <h2>Passo 1</h2>
      <br />
      <p>Bem vindo à Schneider Social! Estamos contentes com sua visita e esperamos que seja uma plataforma muito proveitosa para seu cotidiano. </p>
    </div>,
    <div>
      <h2>Passo 2</h2>
      <br />
      <p>Aqui temos um jogo educativo para informar sobre qual tipo de lixo utilizar.</p>
    </div>,
    <div>
      <h2>Passo 3</h2>
      <br />
      <p>Também temos uma seleção de conteúdos sobre sustentabilidade! Checa aí!</p>
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
              "Olá amigos, recentemente comecei a me preocupar com minha dieta e como ela impacta o mundo em que vivemos"
            }
            ImagePost={Post1}
            Name={"Thiago Santos"}
          />
        </ContainerPosts>
        <Tour steps={tutorialSteps} />
      </Container>
    </ContainerPage>
  );
};
export default Home;
