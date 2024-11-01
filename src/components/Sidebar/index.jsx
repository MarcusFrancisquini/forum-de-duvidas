import "./style.css";

function Sidebar({ setConteudo }) {
  return (
    <aside class="sidebar__container">
      <div class="topico__sidebar">
        <h3 class="topico__titulo">Linguagens</h3>
        <ul class="itens__topico">
          <li>
            <button class="item__topico">Java</button>
          </li>
          <li>
            <button class="item__topico">Python</button>
          </li>
          <li>
            <button class="item__topico">SQL</button>
          </li>
          <li>
            <button class="item__topico">Html</button>
          </li>
          <li>
            <button class="item__topico">Css</button>
          </li>
          <li>
            <button class="item__topico">JavaScript</button>
          </li>
        </ul>
      </div>
      <div class="topico__sidebar">
        <h3 class="topico__titulo">Publicações</h3>
        <ul class="itens__topico">
          <li>
            <button class="item__topico">Dicas</button>
          </li>
          <li>
            <button class="item__topico">Dúvidas</button>
          </li>
          <li>
            <button class="item__topico">Respostas</button>
          </li>
        </ul>
      </div>
      <div class="topico__sidebar">
        <h3 class="topico__titulo">Áreas</h3>
        <ul class="itens__topico">
          <li>
            <button class="item__topico">Front-end</button>
          </li>
          <li>
            <button class="item__topico">Back-end</button>
          </li>
          <li>
            <button class="item__topico">Banco de dados</button>
          </li>
          <li>
            <button class="item__topico">CyberSecurity</button>
          </li>
          <li>
            <button class="item__topico">Jogos</button>
          </li>
          <li>
            <button class="item__topico">IA</button>
          </li>
        </ul>
      </div>
      <div class="topico__sidebar">
        <h3 class="topico__titulo">Recursos</h3>
        <ul class="itens__topico">
          <li>
            <button class="item__topico">Sobre o Orbis</button>
          </li>
          <li>
            <button class="item__topico">Ajuda</button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
