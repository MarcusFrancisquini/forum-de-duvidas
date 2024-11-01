import "./style.css";

function Tag({ titulo, qtde }) {
  return (
    <div class="card">
      <h3 class="tag__titulo">{titulo}</h3>
      <p class="qtde__posts">
        {qtde} {qtde === 1 ? "post" : "posts"}
      </p>
    </div>
  );
}

export default Tag;
