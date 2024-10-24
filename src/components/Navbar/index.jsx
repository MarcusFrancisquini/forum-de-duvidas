import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-svg">
          <img src={logo} alt="orbis-logo" />
        </div>
        <div className="logo-text">ORBIS</div>
      </div>
      <div className="nav-itens">
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquise por usuário, mensagem..."
            className="search-input"
          />
          <img src={search} alt="search-logo" />
        </div>
        <div className="login-button">Entrar</div>
      </div>
    </div>
  );
}

export default Navbar;
