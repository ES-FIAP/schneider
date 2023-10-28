import { Container, ContainerLogo, MenuOption } from "./styles";
import { useNavigate } from "react-router-dom";
import { detectar_mobile } from "../../utils/index";

const Header = () => {
  const Navigate = useNavigate();
  const mobile = detectar_mobile();
  return (
    <Container>
      <ContainerLogo />
      <MenuOption onClick={() => Navigate("/feed")}>
        <i class="bi bi-house" style={{ fontSize: "20px" }} /> Feed
      </MenuOption>
      <MenuOption onClick={() => Navigate("/game")}>
        <i class="bi bi-controller" style={{ fontSize: "20px" }} /> Game
      </MenuOption>

      <MenuOption onClick={() => Navigate("/learn")}>
        <i class="bi bi-book" style={{ fontSize: "20px" }} /> Aprender
      </MenuOption>

      <MenuOption onClick={() => Navigate("/profile")}>
        {" "}
        <i
          class="bi bi-person-circle"
          style={{ fontSize: "20px" }}
        /> Perfil{" "}
      </MenuOption>

          {" "}
          <MenuOption onClick={() => Navigate("/about")}>
            <i class="bi bi-card-text" style={{ fontSize: "20px" }} /> Sobre o
            projeto
          </MenuOption>
          <a href="https://www.youtube.com/watch?v=YvhKTAwE2-w" target="_blank">
            {" "}
            <MenuOption>
              <i class="bi bi-play-fill" style={{ fontSize: "20px" }} /> Video
              Pitch
            </MenuOption>
          </a>
          <MenuOption onClick={() => Navigate("/")}>
            <i class="bi bi-door-open" style={{ fontSize: "20px" }} /> Sair
          </MenuOption>
    </Container>
  );
};

export default Header;
