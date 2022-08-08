import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import EmptyCart from "../EmptyCart";
import { Container, Content, Title } from "./styles";

const Cart = ({ cartList, setCartList }) => {
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
              id={product.id}
              name={product.name}
              category={product.category}
              imgSrc={product.img}
              cartList={cartList}
              setCartList={setCartList}
            />
          ))
        )}
        <CartTotal cartList={cartList} setCartList={setCartList} />
      </Content>
    </Container>
  );
};

export default Cart;
