import "./style.css";
import Post from "../../components/Post";

function Visitante_Home() {
  //? lista de posts ilustrativos
  const postsInformacoes = [
    {
      usuario: "usuarioAleatorio66",
      conteudo:
        "Ante tortor senectus urna amet accumsan fermentum volutpat pretium.  Ante tortor senectus urna amet accumsan fermentum volutpat pretium. ",
      tags: ["Java", "Python"],
      respostas: 5,
    },
    {
      usuario: "outroUsuario",
      conteudo:
        "Ante tortor senectus urna amet accumsan fermentum volutpat pretium. ",
      tags: ["Java"],
      respostas: 1,
    },
    {
      usuario: "maisUmUsuario33",
      conteudo:
        "Ante tortor senectus urna amet accumsan fermentum volutpat pretium. Ante tortor senectus urna ",
      tags: ["Dica", "Python"],
      respostas: 1,
    },
    {
      usuario: "testeDeUsuario43:",
      conteudo:
        "Ante tortor senectus urna amet accumsan fermentum volutpat pretium. Ante tortor senectus urna amet accumsan ",
      tags: ["Banco de dados"],
      respostas: 2,
    },
  ];

  return (
    <section className="posts">
      <h1 className="section-title">Últimas postagens</h1>
      {postsInformacoes.map((post, index) => (
        <Post
          key={index}
          usuario={post.usuario}
          conteudo={post.conteudo}
          tags={post.tags}
          respostas={post.respostas}
        />
      ))}
    </section>
  );
}

export default Visitante_Home;
