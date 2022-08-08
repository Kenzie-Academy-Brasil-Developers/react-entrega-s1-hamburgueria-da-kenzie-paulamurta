import { Container, Line, Title } from "./styles";

const CartTotal = () => {
  return (
    <>
      <Line />
      <Container>
        <Title>
          <h1>Total</h1>
          <p>R$40,00</p>
        </Title>
        <button>Remover todos</button>
      </Container>
    </>
  );
};

export default CartTotal;
