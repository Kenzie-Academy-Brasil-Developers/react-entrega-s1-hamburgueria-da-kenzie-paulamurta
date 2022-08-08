import { Container, Form } from "./styles";
import LogoKenzie from "../../assets/LogoKenzie.svg";

const Header = () => {
  return (
    <Container>
      <img src={LogoKenzie} alt="Logo" />
      <Form>
        <input placeholder="Digitar Pesquisa"></input>
        <button>Pesquisar</button>
      </Form>
    </Container>
  );
};

export default Header;
