import { Card, Img, ContainerTxt } from "./styles";
import Burger from "../../assets/Burger.png";

const CartProduct = () => {
  return (
    <Card>
      <Img>
        <img src={Burger} alt="Burger" />
      </Img>
      <ContainerTxt>
        <h3>Hamburguer</h3>
        <p>Sanduíche</p>
      </ContainerTxt>
      <button>Remover</button>
    </Card>
  );
};

export default CartProduct;
