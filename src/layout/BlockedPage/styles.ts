import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }

  svg {
    margin-right: 5px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${props => props.theme.colors.paragraph};

    h1 {
      font-size: 28px;
      font-weight: bold;
      margin: 50px 0px;
    }

    h2 {
      font-size: 18px;
      font-weight: normal;
    }

    @media (max-width: 425px) {
      h1 {
        font-size: 24px;
      }
    }
  }
`;
