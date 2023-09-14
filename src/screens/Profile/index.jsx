import Header from "../../components/Header";
import {
  Card,
  SubTitle,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  Bio,
  Data,
  Value,
  Wallpaper
} from "./styles";
import foto from "../../images/homem2.jpg";

const Profile = () => {
  const profile = {
    name: "John Doe",
    city:"São Paulo, SP",
    bio: "Sou Lucas Martins, um engenheiro ambiental de São Paulo com 35 anos de idade. Desde muito jovem, minha paixão pelos animais e pelo meio ambiente moldou meu caminho na vida. Hoje, sou um defensor da natureza e um dedicado protetor dos animais.",
    image: foto, // Replace with the actual image URL
  };
  return (
    <ProfileContainer>
      <Header/>
      <Card>
        <Wallpaper/>
        <ProfileImage src={"https://media.istockphoto.com/id/1367421610/pt/foto/view-of-young-man-using-a-smartphone-at-night-time-with-city-view-landscape-in-the-background.jpg?s=612x612&w=0&k=20&c=8LBMiPA1n2ycEUXUr_UVUSBPAppf5Y5UXJuybHb62DU="} alt={profile.name} />
        <Value style={{ fontSize:'24px'}}>{profile.name}</Value>
        <Value style={{fontWeight:400}}>São Paulo, São Paulo, Brasil</Value>
        <Data>
          <SubTitle> E-mail</SubTitle>
          <Value>John.doe@schneider.com.br</Value>
          <SubTitle>Departamento</SubTitle>
          <Value>Marketing Digital</Value>
          <SubTitle>Polo</SubTitle>
          <Value>Schneider São Paulo</Value>
          <SubTitle>Celular</SubTitle>
          <Value>(11) 99944-9944</Value>
        </Data>
        <Value>Sobre mim</Value>
        <Bio>{profile.bio}</Bio>
      </Card>
    </ProfileContainer>
  );
};

export default Profile;
