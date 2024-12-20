import { useState } from "react";
import "./style.css";
import unliked from "../../images/unliked.svg";
import liked from "../../images/liked.svg";

function Post({ usuario, conteudo, tags, respostas }) {
  //? função para dar like no post
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <p className="post__usuario">{usuario}:</p>
      <p className="post__conteudo">{conteudo}</p>
      <div className="post__tags">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`tag ${tag.toLowerCase().replace(/ /g, "__")}`}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="post__likes-respostas">
        <img
          src={isLiked ? liked : unliked}
          className="heart__icon"
          onClick={toggleLike}
          alt="like icon"
        />
        <p className="respostas">
          {respostas} {respostas === 1 ? "resposta" : "respostas"}
        </p>
      </div>
    </div>
  );
}

export default Post;
