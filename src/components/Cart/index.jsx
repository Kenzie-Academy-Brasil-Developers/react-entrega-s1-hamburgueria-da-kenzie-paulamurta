import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import EmptyCart from "../EmptyCart";
import { Container, Content, Title } from "./styles";

const Cart = () => {
  return (
    <Container>
      <Title>
        <p>Carrinho de compras</p>
      </Title>
      <Content>
        <EmptyCart />

        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />

        <CartTotal />
      </Content>
    </Container>
  );
};

export default Cart;
