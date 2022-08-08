import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import EmptyCart from "../EmptyCart";
import { Container, Content, Title } from "./styles";

const Cart = ({ cartList }) => {
  return (
    <Container>
      <Title>
        <p>Carrinho de compras</p>
      </Title>
      <Content>
        {cartList.length === 0 ? (
          <EmptyCart />
        ) : (
          cartList.map((product) => (
            <CartProduct
              name={product.name}
              category={product.category}
              imgSrc={product.img}
            />
          ))
        )}

        <CartTotal />
      </Content>
    </Container>
  );
};

export default Cart;
