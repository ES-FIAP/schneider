import Header from "../../components/Header";
import {
  ProfileBio,
  ProfileContainer,
  ProfileImage,
  ProfileName,
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
      <div style={{ display: "flex", flexDirection: "row", alignItems:'center'}}>
        <ProfileImage src={profile.image} alt={profile.name} />
        <ProfileName>{profile.name}</ProfileName>
      </div>

      <ProfileBio>{profile.bio}</ProfileBio>
    </ProfileContainer>
  );
};

export default Profile;
