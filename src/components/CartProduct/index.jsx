import { Card, Img, ContainerTxt } from "./styles";

const CartProduct = ({ name, category, imgSrc }) => {
  return (
    <Card>
      <Img>
        <img src={imgSrc} alt="Item" />
      </Img>
      <ContainerTxt>
        <h3>{name}</h3>
        <p>{category}</p>
      </ContainerTxt>
      <button>Remover</button>
    </Card>
  );
};

export default CartProduct;
