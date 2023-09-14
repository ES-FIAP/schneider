import Header from "../../components/Header";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Info ,Video, BoxPerfil, Fundo} from "./styles";
const About = () => {
  return (
    <Container>
      <Header />
      <Info>
        <h1>Video Pitch</h1>
        <h4>
          Home / <strong>Video Pitch</strong>
        </h4>
        <Video>
          <iframe
            width="760"
            height="515"
            src="https://www.youtube.com/embed/GTvCsnlweag"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Video>
      </Info>
        <Info>
            <h1>Integrantes</h1>
                <h4>Home / <strong>Integrantes</strong></h4>
                <div style={{ display:'flex'}}>
                    <BoxPerfil class="box-perfil">
                        <div class="fundo">
                            <img class="fundo" src="./img/fundo-perfil-1.jpg" alt=""/>
                        </div>
                        <div class="perfil">
                            <img class="perfil" src="./img/Israel.JPG" alt=""/>
                        </div>
                        <div class="texto-perfil">
                            <h3>Israel Antunes Neto - RM 97067</h3>
                            <p>Gestor de CSS, Desenvolvimento</p>
                        </div>
                    </BoxPerfil>
    
                    <BoxPerfil class="box-perfil">
                        <div class="fundo">
                            <img class="fundo" src="./img/fundo-perfil-2.jpg" alt=""/>
                        </div>
                        <div class="perfil">
                            <img class="perfil" src="./img/pedro-menezes.jpg" alt=""/>
                        </div>
                        <div class="texto-perfil">
                            <h3>Pedro Menezes - RM 97432</h3>
                            <p>Degin Criativo, Desenvolvimento</p>
                        </div>
                    </BoxPerfil>

                    <BoxPerfil class="box-perfil">
                        <div class="fundo">
                            <img class="fundo" src="./img/fundo-perfil-3.jpg" alt=""/>
                        </div>
                        <div class="perfil">
                            <img class="perfil" src="./img/Nalanda.jpg" alt=""/>
                        </div>
                        <div class="texto-perfil">
                            <h3>Nalanda Silva  - RM 97365</h3>
                            <p>Gestora de CSS, Desenvolvimento Criativo</p>
                        </div>
                    </BoxPerfil>

                    <BoxPerfil class="box-perfil">
                        <div class="fundo">
                            <img class="fundo" src="./img/fundo-perfil-4.jpg" alt=""/>
                        </div>
                        <div class="perfil">
                            <img class="perfil" src="./img/pedro-scardua.jpeg" alt=""/>
                        </div>
                        <div class="texto-perfil">
                            <h3>Pedro Scardua - RM 97175</h3>
                            <p>Construção HTML, Edição PITCH</p>
                        </div>
                    </BoxPerfil>
                </div>
                
                
          </Info>
    </Container>
  );
};

export default About;
