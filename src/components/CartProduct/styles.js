import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 25vw;
  height: 100%;
  padding: 2vh;
  gap: 1vw;

  button {
    align-self: flex-start;
    background-color: transparent;
    border: none;
    color: var(--color-gray-50);
  }

  button:hover {
    color: var(--color-gray-100);
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const Img = styled.div`
  min-width: 80px;
  min-height: 80px;
  background-color: var(--color-gray-20);
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 2vh;

  h3 {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--color-gray-100);
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-gray-50);
  }
`;
