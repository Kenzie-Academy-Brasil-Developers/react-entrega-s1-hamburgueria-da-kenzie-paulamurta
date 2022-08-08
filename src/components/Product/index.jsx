import { Card, Image, Description } from "./styles";

const Product = ({
  cartList,
  setCartList,
  key,
  name,
  category,
  price,
  imgSrc,
  products,
}) => {
  function addToCart(id) {
    const item = products.find((elem) => elem.id === id);
    setCartList([...cartList, item]);
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
            addToCart(key);
          }}
        >
          Adicionar
        </button>
      </Description>
    </Card>
  );
};

export default Product;
