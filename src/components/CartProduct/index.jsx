import { Card, Img, ContainerTxt } from "./styles";

const CartProduct = ({ cartList, setCartList, id, name, category, imgSrc }) => {
  function deleteItem(productID) {
    const newCartList = cartList.filter((elem) => elem.id !== productID);
    setCartList(newCartList);
  }

  return (
    <Card>
      <Img>
        <img src={imgSrc} alt="Item" />
      </Img>
      <ContainerTxt>
        <h3>{name}</h3>
        <p>{category}</p>
      </ContainerTxt>
      <button onClick={() => deleteItem(id)}>Remover</button>
    </Card>
  );
};

export default CartProduct;
