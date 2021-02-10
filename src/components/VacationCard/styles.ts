import styled from 'styled-components';

export const Container = styled.div`
  /* width: 340px; */
  height: auto;
  border-top: 16px solid ${props => props.theme.colors.secondary};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.card};
  color: ${props => props.theme.colors.paragraph};
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 200ms;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);

  :hover {
    transform: scale(1.02);
  }

  h1 {
    font-size: 14px;
    text-align: center;
  }

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
    margin-bottom: 8px;

    span {
      width: auto;
      height: 23px;
      border-radius: 5px;
      padding: 0 3px 0 3px;
      margin: 4px;
      /* color: ${props => props.theme.colors.primary}; */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 500;

      svg {
        cursor: pointer;
      }
    }
  }

  span.publicationDate {
    color: ${props => props.theme.colors.small};
    margin-top: 8px;
    font-weight: normal;
    font-size: 0.8em;
  }
`;
