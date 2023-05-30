import logo from "./logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo da Casa Verde" />
      <nav>
        <ul>
          <li>Como fazer</li>
          <span>/</span>
          <li>Ofertas</li>
          <span>/</span>
          <li>Depoimento</li>
          <span>/</span>
          <li>Vídeos</li>
          <span>/</span>
          <li>Meu carrinho</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
