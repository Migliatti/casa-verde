import planta from "./image 3.png";

function MyPlant() {
  return (
    <div>
      <img src={planta} alt="Imagens de planta" />
      <div>
        <h3>
          Como conseguir <span>minha planta</span>
        </h3>
        <ul>
          <li>Escolha suas plantas</li>
          <li>Faça seu pedido</li>
          <li>Aguarde na sua casa</li>
        </ul>
      </div>
    </div>
  );
}

export default MyPlant;
