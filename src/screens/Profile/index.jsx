import Header from "../../components/Header";
import {
  CardBio,
  ProfileBio,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  Wallpaper,
} from "./styles";
import foto from "../../images/homem2.jpg";

const Profile = () => {
  const profile = {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor lorem sit amet velit dictum efficitur. Cras euismod vestibulum lobortis. Vestibulum posuere dolor lacus, a finibus purus tempor eu. Curabitur sollicitudin mi at magna euismod, vel laoreet sapien cursus. Nulla bibendum orci at quam venenatis lacinia. Vivamus nec ipsum at nisl convallis ullamcorper. Proin quis venenatis lorem.",
    image: foto, // Replace with the actual image URL
  };
  return (
    <ProfileContainer>
      <Header />
      <Wallpaper
        src={
          "https://img.freepik.com/fotos-gratis/fundo-gradiente-de-grade-digital-futurista-azul-escuro_53876-129728.jpg?w=1380&t=st=1686351210~exp=1686351810~hmac=72d5eb1348f5f1a1680041b444f74b93d0a23a77f9a0907c5508b24d8f10105a"
        }
        alt="Imagem de rio com mata com o nome schneider"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          left: "8vw",
          width: "100%",
          marginTop: "27vh",
        }}
      >
        <ProfileImage src={profile.image} alt={profile.name} />
        <ProfileName>{profile.name}</ProfileName>
      </div>

      <CardBio>
        <strong> E-mail:</strong> John.doe@schneider.com.br
        <strong> Departamento:</strong> Marketing Digital
        <strong> Celular:</strong> (11) 99944-9944
      </CardBio>
    </ProfileContainer>
  );
};

export default Profile;
