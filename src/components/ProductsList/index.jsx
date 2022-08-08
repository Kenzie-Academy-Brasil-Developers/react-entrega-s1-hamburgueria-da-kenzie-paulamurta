import { Container, Products, Search } from "./styles";
import Product from "../Product";

const ProductsList = ({
  filtered,
  setFiltered,
  products,
  search,
  setSearch,
  cartList,
  setCartList,
}) => {
  function clearSearch() {
    setSearch("");
    setFiltered([]);
  }
  return (
    <Container>
      {filtered.length > 0 && (
        <Search>
          <h3>Resultados da busca para: "{search}"</h3>
          <button onClick={clearSearch}>Limpar busca</button>
        </Search>
      )}

      <Products>
        {(filtered.length > 0 ? filtered : products).map((product) => (
          <Product
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            imgSrc={product.img}
            products={products}
            cartList={cartList}
            setCartList={setCartList}
          />
        ))}
      </Products>
    </Container>
  );
};

export default ProductsList;
