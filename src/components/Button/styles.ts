import styled, { css } from 'styled-components';

interface IButton {
  variant: 'primary' | 'secondary' | 'header';
}

export const CustomButton = styled.button<IButton>`
  width: 250px;
  height: 60px;
  margin: 8px;
  border-radius: 8px;
  border: 3px solid ${props => props.theme.colors.action};
  color: ${props => props.theme.colors.action};
  font-weight: bold;
  background-color: ${props => props.theme.colors.background};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }

  ${props =>
    props.variant === 'secondary' &&
    css`
      border: 3px solid ${props.theme.colors.secondary};
      background-color: ${props.theme.colors.background};
      color: ${props.theme.colors.paragraph};
    `}

  ${props =>
    props.variant === 'header' &&
    css`
      border: none;
      background-color: ${props.theme.colors.card};
      color: ${props.theme.colors.primary};
      font-size: 14px;

      &:hover {
        opacity: 1;
        color: ${props.theme.colors.secondary};
      }
    `}
`;
