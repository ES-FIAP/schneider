import { Container, ContainerMenu, ContainerLogo, Line, MenuOption } from "./styles";

const Header = () => {
  return (
    <Container>

        <ContainerLogo/>
        <MenuOption> Game </MenuOption>
      
        <MenuOption> Aprender </MenuOption>
       
        <MenuOption> Schenider</MenuOption>
        
        <MenuOption> Sobre o projeto</MenuOption>
    </Container>
  );
};

export default Header;
