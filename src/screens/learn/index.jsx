import { Container, Image, Title, Video } from "./styles";
import Header from "../../components/Header";
const Learn = () => {
  return (
    <Container>
      <Header />
      <Title>Aprendendo Sustentabilidade</Title>
      <Video>
        {/* Inclua seus vídeos aqui */}
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/M9QoInu8ToU"
          title="Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Video>
      <Image>
        {/* Inclua suas imagens aqui */}
        <img src="path_to_image" alt="Imagem" />
      </Image>
      {/* Adicione mais vídeos e imagens conforme necessário */}
    </Container>
  );
};
export default Learn;
