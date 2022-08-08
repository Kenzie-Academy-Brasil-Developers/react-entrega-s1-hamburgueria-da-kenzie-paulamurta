import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8vh 2vh;
  height: 25vh;

  h3 {
    text-align: center;
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--color-gray-100);
  }

  p {
    text-align: center;
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--color-gray-50);
  }
`;
