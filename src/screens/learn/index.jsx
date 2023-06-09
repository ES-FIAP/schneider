import {
  Container,
  Image,
  Title,
  Video,
  CardContainer,
  VideoWrapper,
  Description,
} from "./styles";
import Header from "../../components/Header";
const Learn = () => {
  const Card = ({ title, videoUrl, description }) => {
    return (
      <CardContainer>
        <Title>{title}</Title>
        <VideoWrapper>
          <Video src={videoUrl} frameborder="0" allowfullscreen />
        </VideoWrapper>
        <Description>{description}</Description>
      </CardContainer>
    );
  };

  const sustainabilityTopics = [
    {
      title: "Oque é sustentabilidade",
      videoUrl: "https://www.youtube.com/embed/vG4WThkdliI",
      description:
        "Learn about the importance of renewable energy sources and their positive impact on the environment.",
    },
    {
      title: "A sustentabilidade e a digitalização ",
      videoUrl: "https://www.youtube.com/embed/ml6ADoI03js",
      description:
        "Discover how recycling and proper waste management can help reduce pollution and conserve resources.",
    },
    {
      title: "Serviços e projetos de sustentabilidade",
      videoUrl: "https://www.youtube.com/embed/6YRGA-I6-Mk",
      description:
        "Understand the significance of water conservation and tips for reducing water consumption in daily life.",
    },
    // Add more topics as desired
  ];

  return (
    <Container>
      <Header />
      <Title style={{ fontSize: "2.5vw" }}>Aprendendo Sustentabilidade</Title>
      <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', minWidth:'80vw'}}>
        {sustainabilityTopics.map((topic, index) => (
          <Card
            key={index}
            title={topic.title}
            videoUrl={topic.videoUrl}
            description={topic.description}
          />
        ))}


      </div>
    </Container>
  );
};
export default Learn;
