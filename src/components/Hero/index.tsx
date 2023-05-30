import planta from './imagem-hero 1.png'

function Hero() {
  return (
    <section>
      <div>
        <h2>
          Sua casa com as <span>melhores plantas</span>
        </h2>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <div>
          <input type="email" placeholder="Insira seu e-mail" />
          <button>Assinar newsletter</button>
        </div>
      </div>
      <img src={planta} alt="imagem de uma planta" />
    </section>
  );
}

export default Hero;
