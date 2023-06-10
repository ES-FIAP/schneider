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
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

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
        "Conversa com Especialista.",
    },
    {
      title: "A sustentabilidade e a digitalização ",
      videoUrl: "https://www.youtube.com/embed/ml6ADoI03js",
      description:
        "Conversa com Especialista.",
    },
    {
      title: "Serviços e projetos de sustentabilidade",
      videoUrl: "https://www.youtube.com/embed/6YRGA-I6-Mk",
      description:
        "Conversa com Especialista.",
    },
  ];
  const sustainabilityTopics2row = [
    {
      title: "Norma ABNT NBR IEC 61439",
      videoUrl: "https://www.youtube.com/embed/Jnh4T13wJxc",
      description:
        "Normas relativas à Sustentabilidade",
    },
    {
      title: "Norma IEC 62271-200 ",
      videoUrl: "https://www.youtube.com/embed/rRylTkwaL3Q",
      description:
        "Normas relativas à Sustentabilidade",
    },
    {
      title: "Norma ABNT NBR 14039 ",
      videoUrl: "https://www.youtube.com/embed/r3qeaw4VqJY",
      description:
        "Normas relativas à Sustentabilidade",
    },
    // Add more topics as desired
    
  ];
  const sustainabilityTopics3row = [
    {
      title: "Dicas de Sustentabilidade e Economia",
      videoUrl: "https://www.youtube.com/embed/snGqMnvZ5KM",
      description:
        "Dicas de como você pode trazer economia e sustentabilidade para sua rotina.",
    },
    {
      title: "10 hábitos sustentáveis que mudaram a minha vida",
      videoUrl: "https://www.youtube.com/embed/EVb8xKCYgpo",
      description:
        "10 dicas para tornar sua vida mais prazerosa e mais sustentável.",
    },
    {
      title: "Redução do Desperdício de Alimentos",
      videoUrl: "https://www.youtube.com/embed/RPPF3LxzgYA",
      description:
        "Aprenda sobre como desperdiçar menos os alimentos da sua casa.",
    },
    // Add more topics as desired
    
  ];

  const sustainabilityTopics4row = [
    {
      title: "Sustainability in everyday life",
      videoUrl: "https://www.youtube.com/embed/kZIrIQDf1nQ",
      description:
        "In our day to day life we face small actions that can make a big difference for the environment and for our pockets. ",
    },
    {
      title: "50 dicas de sustentabilidade",
      videoUrl: "https://www.youtube.com/embed/Uq-oQl5uJKI",
      description:
        "For teens & people living with parents/roommates",
    },
    {
      title: "Sustainable Life Hacks",
      videoUrl: "https://www.youtube.com/embed/RyvBhC7MT84",
      description:
        "Life hacks for an sustainable everyday life",
    },
    // Add more topics as desired
    
  ];
  return (
    <Container>
     
      <Header />
      <br />
      
      <Title style={{ fontSize: "2.5vw" }}>Aprendendo Sustentabilidade</Title>
      
      <br />
      <br />
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

          <br />
          <br />

      <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', minWidth:'80vw'}}>
        {sustainabilityTopics2row.map((topic, index) => (
          <Card
            key={index}
            title={topic.title}
            videoUrl={topic.videoUrl}
            description={topic.description}
          />
        ))}

      </div>
        <br />
        <h2>Conteúdo Sugerido</h2>

        <br />
        <br />

        <Carousel>
        <Carousel.Item>
        
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', minWidth:'80vw'}}>
          {sustainabilityTopics3row.map((topic, index) => (
            <Card
              key={index}
              title={topic.title}
              videoUrl={topic.videoUrl}
              description={topic.description}
            />
          ))}
        </div>
        </Carousel.Item>

        <Carousel.Item>
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', minWidth:'80vw'}}>
          {sustainabilityTopics4row.map((topic, index) => (
            <Card
              key={index}
              title={topic.title}
              videoUrl={topic.videoUrl}
              description={topic.description}
            />
          ))}
        </div>
        </Carousel.Item>
      </Carousel>
        <br />
        <br />
      
      
    </Container>
  );
};
export default Learn;
