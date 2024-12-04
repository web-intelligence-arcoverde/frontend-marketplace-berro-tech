import { ReactNode } from "react";
import { CardButtonLink } from "./style";
import React from "react";
interface ButtonLinkProps {
  children: ReactNode;
  link: string;
  id?: string;
  replace?: boolean
}

export const ButtonLink = ({ children, link, id, replace = false }: ButtonLinkProps) => {
  return (
    <CardButtonLink id={id} href={link} replace={replace}>
      {children}
    </CardButtonLink>
  );
};
