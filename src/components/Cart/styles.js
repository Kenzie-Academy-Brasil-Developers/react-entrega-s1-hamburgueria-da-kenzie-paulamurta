import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25vw;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  width: 25vw;
  height: 11vh;
  padding: 0 2vw;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  p {
    color: var(--color-white);
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-gray-0);
  width: 25vw;
  height: 50;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-bottom: 2vh;
`;
