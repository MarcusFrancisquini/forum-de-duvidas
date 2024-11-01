import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" class="logo">
        <div class="logo__svg">
          <img class="logo__orbis" src={logo} alt="logo orbis" />
        </div>
        <div class="logo__text">ORBIS</div>
      </a>
      <div class="nav__itens">
        <div class="search__container">
          <input
            type="text"
            placeholder="Pesquise por usuário, mensagem..."
            class="search__input"
          />
          <img src={search} alt="search icon" />
        </div>
        <div class="login__button">Entrar</div>
      </div>
    </div>
  );
}

export default Navbar;
