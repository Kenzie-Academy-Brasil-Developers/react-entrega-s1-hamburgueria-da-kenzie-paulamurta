import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color-gray-20);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2vh 2vh 0 2vh;
  width: 100%;
  height: 100%;
  background-color: var(--color-gray-0);

  button {
    width: 100%;
    height: 10vh;
    border: none;
    background-color: var(--color-gray-20);
    border-radius: 8px;
    color: var(--color-gray-50);
    font-weight: 600;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 2vh;
  padding-bottom: 4vh;

  h1 {
    color: var(--color-gray-100);
    font-size: 0.9rem;
    font-weight: 600;
  }

  p {
    color: var(--color-gray-50);
    font-size: 0.9rem;
    font-weight: 600;
  }
`;
