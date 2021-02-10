import React, { ButtonHTMLAttributes } from 'react';
import { CustomButton } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'header';
}

const Button: React.FC<IButton> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <CustomButton type="button" variant={variant} {...rest}>
      {children}
    </CustomButton>
  );
};

export default Button;
