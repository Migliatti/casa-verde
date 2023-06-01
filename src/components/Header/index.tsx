import style from "./Header.module.css";
import logo from "./logo.svg";

function Header() {
  return (
    <header className={style.menu}>
      <img className={style.menu__logo} src={logo} alt="Logo da Casa Verde" />
      <ul className={style.menu__lista}>
        <li className={style.menu__item}>Como fazer</li>
        <span className={style.menu__separador}>/</span>
        <li className={style.menu__item}>Ofertas</li>
        <span className={style.menu__separador}>/</span>
        <li className={style.menu__item}>Depoimento</li>
        <span className={style.menu__separador}>/</span>
        <li className={style.menu__item}>Vídeos</li>
        <span className={style.menu__separador}>/</span>
        <li className={style.menu__item}>Meu carrinho</li>
      </ul>
    </header>
  );
}

export default Header;
