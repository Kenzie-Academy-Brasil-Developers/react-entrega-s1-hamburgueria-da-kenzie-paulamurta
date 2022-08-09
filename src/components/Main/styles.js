import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 3vw;
  height: 100%;
  padding: 0 6vw;
  margin: 4vh 0;

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2vh;
    padding: 3vh;
    margin: 0;
  }
`;
