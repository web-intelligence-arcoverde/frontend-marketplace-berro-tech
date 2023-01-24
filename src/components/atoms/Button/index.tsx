import { ButtonProps } from "@/types";
import { CardButton } from "./style";

const Button = ({ children, onClick, padding }: ButtonProps) => {
  return (
    <CardButton padding={padding}>
      <button onClick={onClick}>{children}</button>
    </CardButton>
  );
};
export default Button;
