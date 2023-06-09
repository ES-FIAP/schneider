import ProgressbarComponent from "../Progressbar/index";
import UserRank from "../Rank";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
            width: "100%",
            justifyContent: "start",
          }}
        >
          <Star /> Pontuação
        </div>
        <ProgressbarComponent percentage={60} />
        <div style={{ display: "flex", flexDirection: "column" , width:'100%', padding:"5px"}}>
          <div style={{ display: "flex", flexDirection: "row" , justifyContent:'start'}}>
            <span style={{ fontWeight: "bold", marginRight:"10px"}}>2</span>
            Postagens
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span style={{ fontWeight: "bold" , marginRight:"10px"}}>5</span>
            Compartilhamentos
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
