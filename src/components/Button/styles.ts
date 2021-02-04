import styled, { css } from 'styled-components';

interface IButton {
  variant: 'primary' | 'secondary';
}

export const CustomButton = styled.button<IButton>`
  width: 250px;
  height: 60px;
  margin: 8px;
  border-radius: 8px;
  border: 3px solid #6c63ff;
  color: #000;
  font-weight: bold;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }

  ${props =>
    props.variant === 'secondary' &&
    css`
      border: 3px solid #fff;
      background-color: #6c63ff;
      color: #fff;
    `}
`;
