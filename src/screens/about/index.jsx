import Header from "../../components/Header";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Info ,Video, BoxPerfil, Fundo, Perfil} from "./styles";
import Nalanda from '../../images/Nalanda.jpg';
import Julia from '../../images/Julia.jpeg';
import Israel from '../../images/Israel.jpg';
import PedroScardua from '../../images/pedro-scardua.jpeg';
import fundo1 from '../../images/fundo-perfil-1.jpg';
import fundo2 from '../../images/fundo-perfil-2.jpg';
import fundo3 from '../../images/fundo-perfil-3.jpg';
import fundo4 from '../../images/fundo-perfil-4.jpg';
const About = () => {
  return (
    <Container>
      <Header />
      <Info style={{textAlign:'justify'}}>
        <h1>Video Pitch</h1>
        <h4>
          Feed / <strong>Video Pitch</strong>
        </h4>
        <Video>
          <iframe
            width="760"
            height="515"
            src="https://www.youtube.com/embed/YvhKTAwE2-w?si=v9Ub2VQHiAp_zth4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Video>
      </Info>
        <Info style={{ textAlign:'justify'}}>
            <h1>Integrantes</h1>
                <h4>Feed / <strong>Integrantes</strong></h4>
                <div style={{ display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
                    <BoxPerfil className="box-perfil">
                        <Fundo>
                            <img className="fundo" src={fundo1}alt=""/>
                        </Fundo>
                        <Perfil>
                            <img className="perfil" src={Israel} alt=""/>
                        </Perfil>
                        <div className="texto-perfil">
                            <h3>Israel Antunes Neto - RM 97067</h3>
                            <p>Gestor de CSS, Desenvolvimento</p>
                        </div>
                    </BoxPerfil>
    
                    <BoxPerfil className="box-perfil">
                        <Fundo>
                            <img className="fundo" src={fundo2}alt=""/>
                        </Fundo>
                        <Perfil>
                            <img className="perfil" src={Julia} alt=""/>
                        </Perfil>
                        <div className="texto-perfil">
                            <h3>Julia castro - RM 96828</h3>
                            <p>Desenvolvimento do portal, Design, UX</p>
                        </div>
                    </BoxPerfil>

                    <BoxPerfil className="box-perfil">
                        <Fundo>
                            <img className="fundo" src={fundo3} alt=""/>
                        </Fundo>
                        <Perfil>
                            <img className="perfil" src={Nalanda} alt=""/>
                        </Perfil>
                        <div className="texto-perfil">
                            <h3>Nalanda Silva  - RM 97365</h3>
                            <p>Desenvolvimento de Ideias, UX </p>
                        </div>
                    </BoxPerfil>

                    <BoxPerfil className="box-perfil">
                        <Fundo>
                            <img className="fundo" src={fundo4} alt=""/>
                        </Fundo>
                        <Perfil>
                            <img className="perfil" src={PedroScardua} alt=""/>
                        </Perfil>
                        <div className="texto-perfil">
                            <h3>Pedro Scardua - RM 97175</h3>
                            <p>Criação e Edição PITCH</p>
                        </div>
                    </BoxPerfil>
                    <BoxPerfil className="box-perfil">
                        <Fundo>
                            <img className="fundo" src={fundo1} alt=""/>
                        </Fundo>
                        <Perfil>
                            <img className="perfil" src={"https://media.licdn.com/dms/image/C4D03AQH8c9bZyKjp-w/profile-displayphoto-shrink_200_200/0/1655269972981?e=1700697600&v=beta&t=mXgDU2UOFVlo7_k8OyqB3bRmUmhGIHTXoKjskNhdSio"} alt=""/>
                        </Perfil>
                        <div className="texto-perfil">
                            <h3>João Victor - RM 97175</h3>
                            <p>Gestor de CSS, Desenvolvimento</p>
                        </div>
                    </BoxPerfil>
                </div>
                 <div classNameName="info" style={{ marginTop:'20px', textAlign:'justify'}}>
              <h1>Sobre o Projeto</h1>
              <h4>Home / <strong>Sobre o Projeto</strong></h4>
              <div classNameName="paragrafo">
                <h1 classNameName="sobre-titulo">Promovendo a Sustentabilidade com a Inovação Digital na Schneider</h1>
                <h2 classNameName="sub-titulo">Introdução:</h2>
                <p classNameName="texto-paragrafo">
                  Nosso compromisso contínuo com o meio ambiente e os padrões sustentáveis tem sido o cerne da nossa missão na Schneider. Nesse sentido, apresentamos uma 
                  iniciativa revolucionária que visa não apenas reforçar a nossa posição como defensores do meio ambiente, mas também envolver todos os membros da nossa 
                  organização nesta causa vital. Esta inovação é a nossa nova plataforma interna de desafios de sustentabilidade.
                </p>
              </div>
              <div classNameName="paragrafo">
                <h2 classNameName="sub-titulo">Sobre Nos:</h2>
                <p classNameName="texto-paragrafo">
                  Sabemos o quanto informações e boas práticas sustentáveis são importantes para tornarmos o mundo um lugar melhor.
                  Mudar o mundo inteiro talvez esteja fora do nosso alcance, mas mudarmos a nossa bolha e o lugar no qual estamos inseridos é mais que possível. Pensando nisso, queremos estourar a bolha da schneider e começar a mudança pelos funcionários.
                  Desenvolvemos o Green Hub, um lugar repleto de informações que além de educar através de artigos, dicas e podcast permite a interação e desafios entre os colaboradores.
                </p><p classNameName="texto-paragrafo">
                  Uma comunidade praticando a sustentabilidade de uma forma leve e descontraída. Os usuários poderão informar suas preferências de assunto para que em seu feed tenha apenas o que interesse, seguir os colegas de trabalho, postar e interagir em posts.
                  Além disso, a competição não podia faltar para incentivar a sustentabilidade no dia a dia. A plataforma conta com uma área de desafios semanais disponibilizados pelo ADM, onde a cada semana será gerado um ranking e pontuações.
                  A mudança começa em nós e o futuro implora por ela. 
                  <strong>Green Hub</strong>    
                </p></div>
              <div classNameName="paragrafo">
                <h2 classNameName="sub-titulo">Desenvolvimento:</h2>
                <p classNameName="texto-paragrafo">
                  Esse projeto foi concebido e desenvolvido por uma equipe dedicada de cinco integrantes, cada um trazendo suas habilidades e talentos únicos para a mesa. <br/> 
                  <strong>Nalanda Silva</strong>, desempenha um papel fundamental na concepção e desenvolvimento das ideias. Sua experiência é a força motriz por trás do design de experiência do usuário (UX), garantindo que a plataforma seja não apenas funcional, mas também altamente amigável.</p>
                <p classNameName="texto-paragrafo">    
                  <strong>Pedro Scardua</strong>  é responsável por dar vida ao projeto por meio da criação de um vídeo de apresentação envolvente e eficaz. Sua habilidade em transmitir a visão do projeto é essencial para o sucesso da plataforma.</p>
                <p classNameName="texto-paragrafo">
                 <strong>Julia Castro</strong> é a desenvolvedora responsável pela construção da plataforma. Seu conhecimento técnico e habilidades de desenvolvimento garantem que a plataforma seja robusta e eficiente.</p>
                <p classNameName="texto-paragrafo">
                  <strong>Israel Antunes Neto</strong>,esempenhou um papel valioso, contribuindo tanto para o desenvolvimento técnico quanto para a melhoria da experiência do usuário. Sua experiência em ambas as áreas foi fundamental para o projeto.</p>
                  <p classNameName="texto-paragrafo">
                    Finalmente, <strong>João Victor Fraga</strong>  é o visionário por trás das ideias do projeto e é um dos principais desenvolvedores. Sua criatividade e habilidades técnicas se combinam para dar vida às inovações conceituais e à funcionalidade da plataforma.
                  </p>
              </div>
            </div>
                
                
          </Info>
    </Container>
  );
};

export default About;
