import { ButtonProps } from '@/types';
import { CardButton } from './style';
import React from "react";
export const Button = ({
  children,
  onClick,
  padding,
  className,
  maxWidth,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <CardButton
      disabled={disabled}
      type={type}
      maxWidth={maxWidth}
      onClick={onClick}
      className={className}
      padding={padding}
    >
      {children}
    </CardButton>
  );
};
