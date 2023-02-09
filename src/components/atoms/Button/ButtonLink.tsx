import { ReactNode } from "react";
import { CardButtonLink } from "./style";

interface ButtonLinkProps {
  children: ReactNode;
  link: string;
  id?: string;
}

export const ButtonLink = ({ children, link, id }: ButtonLinkProps) => {
  return (
    <CardButtonLink id={id} href={link}>
      {children}
    </CardButtonLink>
  );
};
