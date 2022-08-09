import { Container, Form } from "./styles";
import LogoKenzie from "../../assets/LogoKenzie.svg";

const Header = ({ setFiltered, products, search, setSearch }) => {
  function handleSearch(event) {
    event.preventDefault();
    const newFilter = products.filter((elem) => {
      return elem.name.toLowerCase().match(search.toLowerCase());
    });
    setFiltered(newFilter);
  }

  return (
    <Container>
      <img src={LogoKenzie} alt="Logo" />
      <Form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <button type="Submit">Pesquisar</button>
      </Form>
    </Container>
  );
};

export default Header;
