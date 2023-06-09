import Header from "../../components/Header";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  HistoryContainer,
  Title,
  HistoryText,
  HistorySubtitle,
  HistoryTitle,
  ResourceItem,
  ResourcesContainer,
  ResourcesTitle,
  TeamContainer,
  TeamMember,
  TeamTitle,
  CardContainer,
  GifImage,
} from "./styles";
import Carousel  from "react-bootstrap/Carousel";
import gif from '../../images/gifSustentabilidade.gif'
const About = () => {
  return (
    <Container>
      <Header />
      <GifImage src={gif} alt="Looping GIF"/>
      <Title>Máximo aproveitamento de nossa energia e de nossos recursos</Title>
      <div
        style={{
          display: "flex",
          minWidth: "70vw",
          justifyContent: "space-around",
          marginTop:'50vh'
        }}
      >
        <CardContainer>
          <TeamContainer>
            <TeamTitle>Equipe de Desenvolvimento</TeamTitle>
            <TeamMember>
              <strong>Julia Castro Nóbrega </strong> -Desenvolvimento da Ideia e
              Site
            </TeamMember>
            <TeamMember>
              <strong>Thiago </strong> - Criação de slides e pitch
            </TeamMember>
            <TeamMember>
              <strong>Roger</strong> - Desenvolvimento do Site
            </TeamMember>
            <TeamMember>
              <strong>João </strong> - Design e pitch
            </TeamMember>
            <TeamMember>
              <strong>Leandro Freire </strong> - Desenvolvimento da Ideia e Design
            </TeamMember>
          </TeamContainer>
        </CardContainer>
        <CardContainer>
          <ResourcesContainer>
            <ResourcesTitle>Recursos Utilizados no Projeto</ResourcesTitle>
            <ResourceItem>Desenvolvimento Web utilizando React</ResourceItem>
            <ResourceItem>Styled-Components</ResourceItem>
            <ResourceItem>
              Conhecimentos sobre ESG (Environmental, Social, and Governance)
            </ResourceItem>
          </ResourcesContainer>
        </CardContainer>
      </div>
       <HistoryContainer>
        <HistoryTitle>A Nossa História.</HistoryTitle>
        <HistorySubtitle>O Século 19</HistorySubtitle>
        <HistoryText>
          Os irmãos Schneider investem nas fundições em Le Creusot e tornam-se
          participantes importantes no setor de aço e máquinas. Em breve, a
          Schneider & Cie. entra no mercado emergente de eletricidade.
        </HistoryText>
        <HistorySubtitle>Nossa Grande Aventura</HistorySubtitle>
        <HistoryText>
          Nossa empresa nasceu durante a primeira Revolução Industrial.
          Praticamente 180 anos depois e por meio de uma dedicação duradoura,
          expertise e força combinada das empresas adquiridas, continuamos a
          fornecer inovação em todos os níveis.
        </HistoryText>
      </HistoryContainer>
            <Carousel style={{ width:'60%', height:'20%', position:'relative', left:'20%', paddingBottom:'50px'}}>
        <Carousel.Item>
          <img
            src="https://www.se.com/br/pt/assets/custom_logo/Schneider-Electric-Social.png"
            alt="Primeira "
            style={{ width:'100%'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.se.com/ww/en/assets/v2/564/media/244384/Innovation%20Hub%20Main-banner-IC-1920x1080.jpg"
            alt="Segunda Imagem"
            style={{ width:'100%'}}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default About;
