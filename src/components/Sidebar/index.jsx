import "./style.css";

function Sidebar({ setConteudo }) {
  return (
    <aside className="sidebar-container">
      <div className="topico-sidebar">
        <h3 className="topico-titulo">Linguagens</h3>
        <ul className="itens-topico">
          <li>
            <button className="item-topico">Java</button>
          </li>
          <li>
            <button className="item-topico">Python</button>
          </li>
          <li>
            <button className="item-topico">SQL</button>
          </li>
          <li>
            <button className="item-topico">Html</button>
          </li>
          <li>
            <button className="item-topico">Css</button>
          </li>
          <li>
            <button className="item-topico">JavaScript</button>
          </li>
        </ul>
      </div>
      <div className="topico-sidebar">
        <h3 className="topico-titulo">Publicações</h3>
        <ul className="itens-topico">
          <li>
            <button className="item-topico">Dicas</button>
          </li>
          <li>
            <button className="item-topico">Dúvidas</button>
          </li>
          <li>
            <button className="item-topico">Respostas</button>
          </li>
        </ul>
      </div>
      <div className="topico-sidebar">
        <h3 className="topico-titulo">Áreas</h3>
        <ul className="itens-topico">
          <li>
            <button className="item-topico">Front-end</button>
          </li>
          <li>
            <button className="item-topico">Back-end</button>
          </li>
          <li>
            <button className="item-topico">Banco de dados</button>
          </li>
          <li>
            <button className="item-topico">CyberSecurity</button>
          </li>
          <li>
            <button className="item-topico">Jogos</button>
          </li>
          <li>
            <button className="item-topico">IA</button>
          </li>
        </ul>
      </div>
      <div className="topico-sidebar">
        <h3 className="topico-titulo">Recursos</h3>
        <ul className="itens-topico">
          <li>
            <button className="item-topico">Sobre o Orbis</button>
          </li>
          <li>
            <button className="item-topico">Ajuda</button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
