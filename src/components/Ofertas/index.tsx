import style from "./Ofertas.module.css";
import { BsArrowRight } from "react-icons/bs";

function Ofertas() {
  const produtos = [
    {
      nome: "Ajuga reptans",
      preco: "20,00",
      url: "assets/produtos/produto-01 1.png",
    },
    {
      nome: "Cordyline fruticosa",
      preco: "20,00",
      url: "assets/produtos/produto-02 1.png",
    },
    {
      nome: "Crassula ovata",
      preco: "20,00",
      url: "assets/produtos/produto-03 1.png",
    },
    {
      nome: "Cyperus rotundus",
      preco: "20,00",
      url: "assets/produtos/produto-04 1.png",
    },
    {
      nome: "Delairea odorata",
      preco: "20,00",
      url: "assets/produtos/produto-05 1.png",
    },
    {
      nome: "Datura metel",
      preco: "20,00",
      url: "assets/produtos/produto-06 1.png",
    },
  ];

  return (
    <div className={style.ofertas}>
      <h2 className={style.ofertas__titulo}>
        <p>Conheça nossas</p> <span>ofertas</span>
      </h2>
      <ul className={style.ofertas__lista}>
        {produtos.map((produto, index) => {
          return (
            <li className={style.lista__item} key={index}>
              <img
                className={style.item__imagem}
                src={produto.url}
                alt={produto.nome}
              />
              <div className={style.item__info}>
                <h3 className={style.info__nome}>{produto.nome}</h3>
                <span className={style.info__preco}>{produto.preco}</span>
                <button className={style.info__comprar}>
                  Comprar <BsArrowRight />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Ofertas;
