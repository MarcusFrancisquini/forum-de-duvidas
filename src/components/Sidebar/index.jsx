/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <div className="topico-sidebar">
        <h3 className="topico-titulo">Linguagens</h3>
        <ul className="itens-topico">
          <li>
            <a href="#" className="item-topico">
              Java
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              Python
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              SQL
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              Html
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              Css
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              JavaScript
            </a>
          </li>
        </ul>
      </div>
      <div className="topico-sidebar">
        <h3 className="topico-titulo">Publicações</h3>
        <ul className="itens-topico">
          <li>
            <a href="#" className="item-topico">
              Dicas
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              Dúvidas
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              Respostas
            </a>
          </li>
        </ul>
      </div>
      <div className="topico-sidebar">
        <h3 className="topico-titulo">Áreas</h3>
        <ul className="itens-topico">
          <li>
            <a href="#" className="item-topico">
              Front-end
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              Back-end
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              Banco de dados
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              CyberSecurity
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              Jogos
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              IA
            </a>
          </li>
        </ul>
      </div>
      <div className="topico-sidebar">
        <h3 className="topico-titulo">Recursos</h3>
        <ul className="itens-topico">
          <li>
            <a href="#" className="item-topico">
              Sobre o Orbis
            </a>
          </li>
          <li>
            <a href="#" className="item-topico">
              Ajuda
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
