import { ReactNode } from "react";
import { CardButtonLink } from "./style";

interface ButtonLinkProps {
  children: ReactNode;
  link: string;
}

const ButtonLink = ({ children, link }: ButtonLinkProps) => {
  return <CardButtonLink href={link}>{children}</CardButtonLink>;
};
export default ButtonLink;
