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
    <div>
      <h2>
        Conheça nossas <span>ofertas</span>
      </h2>
      <ul>
        {produtos.map((produto, index) => {
          return (
            <li key={index}>
              <img src={produto.url} alt={produto.nome} />
              <div>
                <h3>{produto.nome}</h3>
                <span>{produto.preco}</span>
                <p>{"Comprar ->"}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Ofertas;
