import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;
  background-image: url('assets/Landing.svg');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 500px;

  header {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 48px;
      font-weight: bold;
    }
  }

  main {
    margin-top: 250px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    div {
      flex: 1;
      display: flex;
    }

    span {
      display: inline-block;
    }

    .vacanciesCounter {
      color: #6c63ff;
      margin-left: 5px;
    }
  }

  @media (max-width: 800px) {
    max-width: 600px;
    background-position: center;
    background-size: 300px;

    header {
      max-width: 100%;
    }

    main {
      align-items: center;
      justify-content: center;

      div {
        align-items: center;
        justify-content: center;
      }

      span {
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 500px) {
    max-width: 300px;
    background-position: center 60%;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 0;
    margin-bottom: 20px;

    h1 {
      margin: 20px;
      font-size: 38px;
    }

    header {
      max-width: 100%;
    }

    main {
      align-items: center;
      justify-content: center;

      button {
        width: 130px;
      }

      div {
        align-items: center;
        justify-content: center;
      }

      span {
        margin-top: 20px;
      }
    }
  }
`;
