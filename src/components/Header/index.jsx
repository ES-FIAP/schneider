import { Container, ContainerMenu, ContainerName, Line, MenuOption } from "./styles";

const Header = () => {
  return (
    <Container>
      <ContainerName>Schenider Social</ContainerName>
      <ContainerMenu>
        <MenuOption> Schenider</MenuOption>
        <Line/>
        <MenuOption> Schenider</MenuOption>
        <Line/>
        <MenuOption> Schenider</MenuOption>
        <Line/>
        <MenuOption> Sobre o projeto</MenuOption>
        <Line/>
      </ContainerMenu>
    </Container>
  );
};

export default Header;
