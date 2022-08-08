import Cart from "../Cart";
import ProductsList from "../ProductsList";
import { Container } from "./styles";

const Main = ({
  cartList,
  setCartList,
  products,
  search,
  setSearch,
  filtered,
  setFiltered,
}) => {
  return (
    <Container>
      <ProductsList
        setFiltered={setFiltered}
        setSearch={setSearch}
        products={products}
        filtered={filtered}
        search={search}
        cartList={cartList}
        setCartList={setCartList}
      />
      <Cart cartList={cartList} setCartList={setCartList} />
    </Container>
  );
};

export default Main;
