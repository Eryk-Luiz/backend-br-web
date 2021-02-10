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
      color: ${props => props.theme.colors.action};
    }

    h2 {
      color: ${props => props.theme.colors.paragraph};
    }
  }

  main {
    margin: 50px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    background-size: 300px;
    background-position: center 280px;
    margin-top: 0px;

    main {
      margin-top: 200px;
    }
  }
`;
