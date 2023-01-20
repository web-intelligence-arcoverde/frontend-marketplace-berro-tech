import { ReactNode } from "react";
import { CardButton } from "./style";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  padding?:string
}

const Button = ({ children, onClick,padding }: ButtonProps) => {
  return (
    <CardButton padding={padding}>
      <button onClick={onClick}>{children}</button>
    </CardButton>
  );
};
export default Button;
