import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 14vh;
  padding: 0vh 6vw;
  background-color: var(--color-gray-0);
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1vw;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-20);
  border-radius: 8px;
  height: 9vh;
  width: 25vw;
  padding: 0 1vw;

  input {
    background-color: transparent;
    border: none;
    outline: 0;
  }

  input::placeholder {
    color: var(--color-gray-20);
    font-weight: 400;
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
