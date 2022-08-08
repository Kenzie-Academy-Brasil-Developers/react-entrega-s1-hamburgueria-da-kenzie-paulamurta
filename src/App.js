import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyle from "./styles/global";
import { api } from "../src/api/api";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  // função abaixo poderia ser usada tbm
  // useEffect(() => {
  //   fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Header
        products={products}
        setFiltered={setFiltered}
        setSearch={setSearch}
        search={search}
      />
      <Main
        setFiltered={setFiltered}
        setSearch={setSearch}
        products={products}
        filtered={filtered}
        search={search}
        cartList={cartList}
        setCartList={setCartList}
      />
    </>
  );
}

export default App;
