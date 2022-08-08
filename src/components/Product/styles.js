import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 310px;
  width: calc((100%-40px) / 4);
  border: 1px var(--color-gray-20) solid;
  border-radius: 5px;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 50%;
  width: 100%;
  background-color: var(--color-gray-0);

  img {
    height: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3vh;

  width: 100%;
  height: 100%;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-gray-100);
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-gray-50);
  }

  h1 {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-primary);
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
`;
