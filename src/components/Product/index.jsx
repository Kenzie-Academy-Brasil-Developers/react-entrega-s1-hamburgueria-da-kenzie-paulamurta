import { Card, Image, Description } from "./styles";
import Burger from "../../assets/Burger.png";

const ProductsList = () => {
  return (
    <Card>
      <Image>
        <img src={Burger} alt="Burger" />
      </Image>
      <Description>
        <h3>Hamburguer</h3>
        <p>Sanduíche</p>
        <h1>R$14.00</h1>
        <button>Adicionar</button>
      </Description>
    </Card>
  );
};

export default ProductsList;
