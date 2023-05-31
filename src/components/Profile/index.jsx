import { Container, DescriptionContainer, ImgContainer, Line, NameContainer } from "./styles"
import Star from '../../images/star.png'
const Profile = () => {
return(
    <Container>
        <ImgContainer/>
        <NameContainer>Julia Castro Nóbrega</NameContainer>
        <DescriptionContainer> Desenvolvedora Full-stack</DescriptionContainer>
    <Line/>
    <div style={{ display:"flex"
}}>
 <img src={Star}width={35} height={35}/>
     <img src={Star}width={35} height={35}/>
      <img src={Star}width={35} height={35}/>
    </div>
   
    </Container>
)
}

export default Profile 