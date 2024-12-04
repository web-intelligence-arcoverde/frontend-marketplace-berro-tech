import { ReactNode } from "react";
import { CardButtonAuthentication } from "./style";
import React from "react";
interface CardButtonAuthenticationProps {
  children: ReactNode;
  onClick: () => void;
}

export const ButtonAuthentication = ({
  children,
  onClick,
}: CardButtonAuthenticationProps) => {
  return (
    <CardButtonAuthentication type="button" onClick={onClick}>
      {children}
    </CardButtonAuthentication>
  );
};
