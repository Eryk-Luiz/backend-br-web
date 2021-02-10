import styled from 'styled-components';

export const Container = styled.div`
  width: 340px;
  height: auto;
  border-top: 16px solid ${props => props.theme.colors.secondary};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.card};
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 200ms;

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
    margin-bottom: 8px;

    span {
      padding: 0 3px 0 3px;
      margin: 4px;
    }
  }
`;
