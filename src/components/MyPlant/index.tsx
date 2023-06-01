import style from "./MyPlant.module.css";
import planta from "./image 3.png";

function MyPlant() {
  return (
    <div className={style.myplant}>
      <img
        className={style.myplant__imagem}
        src={planta}
        alt="Imagens de planta"
      />
      <div className={style.myplant__infos}>
        <h3 className={style.infos__titulo}>
          <p>Como conseguir</p>
          <span>minha planta</span>
        </h3>
        <ul className={style.infos__lista}>
          <li className={style.infos__item}>
            <div className={style.item__marcador}></div>
            <p>Escolha suas plantas</p>
          </li>
          <li className={style.infos__item}>
            <div className={style.item__marcador}></div> <p>Faça seu pedido</p>
          </li>
          <li className={style.infos__item}>
            <div className={style.item__marcador}></div>
            <p>Aguarde na sua casa</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyPlant;
