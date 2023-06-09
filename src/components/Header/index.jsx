import {
  Container,
  ContainerMenu,
  ContainerLogo,
  Line,
  MenuOption,
} from "./styles";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const Navigate = useNavigate();
  return (
    <Container>
      <ContainerLogo />
       <MenuOption onClick={() => Navigate("/home")}>
        <i class="bi bi-house" style={{ fontSize:"25px"}} /> Home
      </MenuOption>
      <MenuOption onClick={() => Navigate("/game")}>
        <i class="bi bi-controller" style={{ fontSize:"25px"}} /> Game
      </MenuOption>

      <MenuOption onClick={() => Navigate("/learn")}>
        <i class="bi bi-book"style={{ fontSize:"25px"}}  /> Aprender
      </MenuOption>

      <MenuOption onClick={() => Navigate("/profile")}> <i class="bi bi-person-circle" style={{ fontSize:"25px"}} />  Perfil </MenuOption>

      <MenuOption onClick={() => Navigate("/about")}>
        <i class="bi bi-card-text" style={{ fontSize:"25px"}} /> Sobre o projeto
      </MenuOption>
       <MenuOption onClick={() => Navigate("/")}>
        <i class="bi bi-door-open" style={{ fontSize:"25px"}} /> Sair
      </MenuOption>
    </Container>
  );
};

export default Header;
