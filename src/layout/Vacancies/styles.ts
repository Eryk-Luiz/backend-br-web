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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
      font-size: 48px;
      font-weight: bold;
    }
  }

  section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    > div:first-child {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      margin-top: 80px;

      input {
        width: 100%;
        max-width: 600px;
        height: 30px;
        border-radius: 8px;
        outline: none;
        border: 0;
      }
    }
  }

  main {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin-bottom: 40px;
`;
