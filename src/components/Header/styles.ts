import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${props => props.theme.colors.card};
  color: ${props => props.theme.colors.primary};
  padding: 0 30px;

  > svg {
    position: relative;
    cursor: pointer;
  }

  > div:first-child {
    width: auto;
    justify-content: center;
    align-items: center;
    font-size: 1.8em;
    font-weight: bold;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: ${props => props.theme.colors.primary};

      &:hover {
        color: ${props => props.theme.colors.secondary};
      }

      svg {
        margin-right: 4px;
      }
    }
  }

  svg {
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  @media (max-width: 375px) {
    div:first-child {
      font-size: 1.2em;
    }
  }

  @media (max-width: 320px) {
    padding: 0 15px;
  }
`;
