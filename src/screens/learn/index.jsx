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
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Articles,
  sustainabilityTopics,
  sustainabilityTopics2row,
  sustainabilityTopics3row,
  sustainabilityTopics4row,
} from "./content";

const Learn = () => {
  const CardVideo = ({ title, videoUrl, description }) => {
    return (
      <CardContainer style={{ cursor: "pointer" }}>
        <Title>{title}</Title>
        <VideoWrapper>
          <Video src={videoUrl} frameborder="0" allowfullscreen />
        </VideoWrapper>
        <Description>{description}</Description>
      </CardContainer>
    );
  };

  const CardArticle = ({ title, imageUrl, description }) => {
    return (
      <CardContainer style={{ cursor: "pointer", marginLeft:'5px', marginRight:'5px'}}>
        <Title>{title}</Title>
        <VideoWrapper>
          <img src={imageUrl} frameborder="0" allowfullscreen />
        </VideoWrapper>
        <Description>{description}</Description>
        <strong>Ver Mais</strong>
      </CardContainer>
    );
  };

  const [value, setValue] = React.useState("articles");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Header />
      <br />

      <Title style={{ fontSize: "2.5vw" }}>Aprendendo com a Schneider</Title>

      <br />
      <br />

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        defaultValue={"articles"}
        style={{ marginBottom: "20px" }}
      >
        <Tab value="articles" label="Artigos" style={{ fontSize: "1.4vw" }} />
        <Tab value="videos" label="Videos" style={{ fontSize: "1.4vw" }} />
      </Tabs>

      {value === "articles" ? (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              maxWidth: "80vw",
              flexWrap:'wrap'
            }}
          >
            {Articles.map((topic, index) => (
              <CardArticle
                title={topic.title}
                description={topic.description}
                imageUrl={topic.imageUrl}
                key={index}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              minWidth: "80vw",
            }}
          >
            {sustainabilityTopics.map((topic, index) => (
              <CardVideo
                key={index}
                title={topic.title}
                videoUrl={topic.videoUrl}
                description={topic.description}
              />
            ))}
          </div>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              minWidth: "80vw",
            }}
          >
            {sustainabilityTopics2row.map((topic, index) => (
              <CardVideo
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  minWidth: "80vw",
                }}
              >
                {sustainabilityTopics3row.map((topic, index) => (
                  <CardVideo
                    key={index}
                    title={topic.title}
                    videoUrl={topic.videoUrl}
                    description={topic.description}
                  />
                ))}
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  minWidth: "80vw",
                }}
              >
                {sustainabilityTopics4row.map((topic, index) => (
                  <CardVideo
                    key={index}
                    title={topic.title}
                    videoUrl={topic.videoUrl}
                    description={topic.description}
                  />
                ))}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      )}

      <br />
      <br />
    </Container>
  );
};
export default Learn;
