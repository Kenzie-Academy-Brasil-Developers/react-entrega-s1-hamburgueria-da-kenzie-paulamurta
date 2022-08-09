import { Card, Image, Description } from "./styles";

const Product = ({
  cartList,
  setCartList,
  name,
  category,
  price,
  imgSrc,
  products,
  id,
}) => {
  function addToCart(itemId) {
    const item = products.find((elem) => elem.id === itemId);
    cartList.find((elem) => elem.id === itemId)
      ? setCartList(cartList) && alert.show("Esse item já foi adiionado")
      : setCartList([...cartList, item]);
  }

  return (
    <Card>
      <Image>
        <img src={imgSrc} alt="Burger" />
      </Image>
      <Description>
        <h3>{name}</h3>
        <p>{category}</p>
        <h1>R${price.toFixed(2)}</h1>
        <button
          onClick={() => {
            addToCart(id);
          }}
        >
          Adicionar
        </button>
      </Description>
    </Card>
  );
};

export default Product;
