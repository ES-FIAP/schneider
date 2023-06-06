import Header from "../../components/Header";
import Tour from "../../components/Tour/index";
import NewPost from "../../components/NewPost";
import Profile from "../../components/Profile";
import { Container, ContainerPage, ContainerPosts } from "./styles";
import Post from "../../components/Post";

const Home = () => {
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
          <Post />
        </ContainerPosts>
        <Tour steps={tutorialSteps} />
      </Container>
    </ContainerPage>
  );
};
export default Home;
