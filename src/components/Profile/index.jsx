import {
  Container,
  DescriptionContainer,
  ImgContainer,
  Line,
  NameContainer,
  Star,
  XPContainer,
} from "./styles";

const Profile = () => {
  return (
    <Container>
      <ImgContainer />
      <NameContainer>Julia Castro Nóbrega</NameContainer>
      <DescriptionContainer> Desenvolvedora Full-stack</DescriptionContainer>
      <Line />
      <div style={{ display: "flex" }}>
        <Star />
        <Star />
        <Star />
      </div>
      <XPContainer>
        30 XP
      </XPContainer>
    </Container>
  );
};

export default Profile;
