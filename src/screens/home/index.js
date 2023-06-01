import Header from "../../components/Header";
import Post from "../../components/Post";
import Profile from "../../components/Profile";
import { Container } from "./styles";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Profile></Profile>
        <Post />
      </Container>
    </div>
  );
};
export default Home;
