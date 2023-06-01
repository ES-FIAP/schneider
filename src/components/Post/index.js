import {
  PostCreation,
  PostOptionButton,
  PostOptions,
  ProfileLink,
} from "./styles";
import FotoSvg from "../../icons/foto";
import VideoSvg from "../../icons/video";
const Post = () => {
  return (
    <PostCreation>
      <PostOptions>
        <PostOptionButton>
          {" "}
          <FotoSvg /> Foto
        </PostOptionButton>
        <PostOptionButton>
          <VideoSvg />
          Vídeo
        </PostOptionButton>
        <PostOptionButton>Evento</PostOptionButton>
        <PostOptionButton>Escrever artigo</PostOptionButton>
      </PostOptions>
    </PostCreation>
  );
};

export default Post;
