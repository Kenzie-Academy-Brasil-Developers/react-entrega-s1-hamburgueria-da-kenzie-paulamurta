import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
  width: 100%;

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 62vw;
  margin-bottom: 5vh;

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 2vh;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2vw;
  width: 100%;

  h3 {
    font-weight: 700;
    color: var(--color-gray-50);
  }

  button {
    border: none;
    background-color: var(--color-primary);
    height: 6vh;
    width: 8vw;
    border-radius: 8px;
    color: var(--color-white);
  }
  button:hover {
    background-color: var(--color-primary-light);
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
    button {
      width: 30vw;
    }
  }
`;
