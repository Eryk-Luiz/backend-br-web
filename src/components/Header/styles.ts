import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${props => props.theme.colors.card};
  color: ${props => props.theme.colors.primary};
  padding: 0 30px;

  [class^='icon'] {
    position: relative;
    cursor: pointer;
  }

  .contentLeft {
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

  .contentRight {
    text-align: right;
  }

  .icon {
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  @media (max-width: 375px) {
    .contentLeft {
      font-size: 1.2em;
    }
  }

  @media (max-width: 320px) {
    padding: 0 15px;
  }
`;

export default Container;
