import style from "./Hero.module.css";
import planta from "./imagem-hero 1.png";

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.hero__infos}>
        <h2 className={style.hero__titulo}>
          <p>Sua casa com as</p> <span>melhores plantas</span>
        </h2>
        <p className={style.hero__p}>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <div className={style.hero__cadastro}>
          <input
            className={style.cadastro__input}
            type="email"
            placeholder="Insira seu e-mail"
          />
          <button className={style.cadastro__botao}>Assinar newsletter</button>
        </div>
      </div>
      <img
        className={style.hero__imagem}
        src={planta}
        alt="imagem de uma planta"
      />
    </section>
  );
}

export default Hero;
