import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
      height: 30px;
      border-radius: 8px;
      outline: none;
      border: 0;
    }
  }

  main {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;

  div {
    width: 340px;
    height: 200px;
    border-top: 21px solid #675ff5;
    border-radius: 8px;
    background-color: #fff;
  }
`;
