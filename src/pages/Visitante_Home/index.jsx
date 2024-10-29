import "./style.css";
import Post from "../../components/Post";
import Tag from "../../components/Tag";

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

  //? lista de tags ilustrativos
  const tagsInformacoes = [
    {
      titulo: "Python",
      qtde: 4366,
    },
    {
      titulo: "Java",
      qtde: 6893,
    },
    {
      titulo: "Golang",
      qtde: 1002,
    },
    {
      titulo: "React JS",
      qtde: 5622,
    },
    {
      titulo: "SQL",
      qtde: 2702,
    },
    {
      titulo: "JavaScript",
      qtde: 7453,
    },
    {
      titulo: "SpringBoot",
      qtde: 3202,
    },
    {
      titulo: "JavaFX",
      qtde: 3202,
    },
  ];

  return (
    <>
      <section className="section-container">
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
      <section className="section-container">
        <h1 className="section-title">Tags mais usadas</h1>
        <div className="cards">
          {tagsInformacoes.map((tag, index) => (
            <Tag key={index} titulo={tag.titulo} qtde={tag.qtde} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Visitante_Home;
