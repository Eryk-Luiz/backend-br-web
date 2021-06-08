import styled from 'styled-components';

export const Container = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.secondary};
  position: fixed;
  bottom: 40px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: ${props => props.theme.colors.paragraph};
  }
`;
