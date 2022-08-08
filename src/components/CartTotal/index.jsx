import { Container, Line, Title } from "./styles";

const CartTotal = ({ cartList, setCartList }) => {
  const total = cartList.reduce((a, b) => a + b.price, 0).toFixed(2);

  function removeAll() {
    setCartList([]);
  }

  return (
    <>
      <Line />
      <Container>
        <Title>
          <h1>Total</h1>
          <p>R${total}</p>
        </Title>
        <button onClick={() => removeAll()}>Remover todos</button>
      </Container>
    </>
  );
};

export default CartTotal;
