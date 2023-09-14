import styled from "styled-components";
export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 60px;

  font-family: fantasy;
  color: #f1f5f9;
  letter-spacing: 2px;
  margin-top: 5vh;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 20px 0;
`;

export const Subtitle = styled.h4`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const HistoryContainer = styled.div`
  margin-top: 40px;

  text-align: justify;
  width: 1000px;
  background-color: #ffffff;
  border-radius: 8px;
  opacity: 0.8;
  left: 20%;
  position: relative;
  align-self: center;
  padding-bottom: 15px;
`;

export const HistoryTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: justify;
`;

export const HistorySubtitle = styled.h5`
  font-size: 20px;
  margin-top: 10px;
  text-align: justify;
`;

export const HistoryText = styled.span`
  font-size: 20px;
  padding-bottom: 50px;
  text-align: justify;
`;

export const CarouselContainer = styled.div`
  margin-top: 40px;
  text-align: center;

  .carousel-item img {
    max-height: 300px;
    object-fit: cover;
  }
`;

export const TeamContainer = styled.div`
  margin-top: 40px;
`;

export const TeamTitle = styled.h2`
  font-size: 1.8vw;
  font-family: fantasy, "Arial Narrow Bold", sans-serif;
  color: #42b4e6;
  letter-spacing: 1px;
`;

export const TeamMember = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ResourcesContainer = styled.div`
  margin-top: 40px;
`;

export const ResourcesTitle = styled.h2`
  font-size: 1.8vw;
  font-family: Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #3f964f;
  letter-spacing: 1px;
`;

export const ResourceItem = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
export const CardContainer = styled.div`
  width: 500px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;
export const Info = styled.div`
  margin: 20px;
  color: #717171;
  line-height: 25px;
`;

export const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxPerfil = styled.div`
  height: 300px;
  width: 25%;
  background-color: #fff;
  margin: 10px 10px 10px 10px;
  border-radius: 25px;
  box-shadow: 10px 10px 10px;
`;

export const Fundo = styled.div`
  width: 100%;
  height: 150px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  object-fit: cover;
`;
