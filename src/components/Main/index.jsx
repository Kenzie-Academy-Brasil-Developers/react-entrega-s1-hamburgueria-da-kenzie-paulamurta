import Cart from "../Cart";
import ProductsList from "../ProductsList";
import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <ProductsList />
      <Cart />
    </Container>
  );
};

export default Main;
