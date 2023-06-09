import Header from "../../components/Header"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  return (
    
  <div className="centered">
    
    <Header/>
    
    <h1>Máximo aproveitamento
      de nossa energia e de
nossos recursos</h1>
    <img src="https://s2.glbimg.com/51ae4szwegOBfhz70irESACnqxg=/smart/e.glbimg.com/og/ed/f/original/2021/02/12/noruega-tera-fabrica-de-moveis-mais-sustentavel-do-mundo_5.jpg" alt="" />
    <h4>Nosso propósito é possibilitar o máximo
aproveitamento de nossa energia e de
nossos recursos, garantindo progresso e
sustentabilidade para todos</h4>
<img src="https://s5.static.brasilescola.uol.com.br/be/2022/10/vista-floresta-amazonica.jpg" alt="" />
    <p>Na Schneider, chamamos isto de  
      <img src="\src\images\LifeIsOn.png" alt="Life Is On"/>
    </p>

    <p>A eletricidade é o melhor e mais eficiente vetor de descarbonização. Junto com a abordagem da economia circular, alcançaremos (enfase)| um impacto positivo no clima como parte dos Objetivos de Desenvolvimento Sustentável das Nações Unidas \ </p>

    <h4>Nossa missão é ser o seu parceiro digital para a sustentabilidade e a eficiência</h4>
  

    <div>
      <h2>A Nossa História.</h2>
      <h5>O Seculo 19</h5>
      <span>Os irmãos Schneider investem nas fundições em Le Creusot e tornam-se participantes importantes no setor de aço e máquinas. Em breve, a Schneider & Cie. entra no mercado emergente de eletricidade</span>
      <h4>Nossa Grande aventura</h4>
      <span>Nossa empresa nasceu durante a primeira Revolução Industrial. Praticamente 180 anos depois e por meio de uma dedicação duradoura, expertise e força combinada das empresas adquiridas, continuamos a fornecer inovação em todos níveis.</span>
    </div>
    

    <div>
    <div>
      <h4>Schneider Electric</h4>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://static8.depositphotos.com/1030334/1045/i/600/depositphotos_10457072-stock-photo-forest.jpg"
            alt="Primeira "
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://ogimg.infoglobo.com.br/economia/23269599-013-da9/FT1086A/66042903.jpg"
            alt="Segunda Imagem"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  </div>)
  }
  
export default About