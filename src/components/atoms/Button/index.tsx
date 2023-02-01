import { ButtonProps } from "@/types";
import { CardButton } from "./style";

const Button = ({ children, onClick, padding, className }: ButtonProps) => {
  return (
    <CardButton onClick={onClick} className={className} padding={padding}>
      {children}
    </CardButton>
  );
};
export default Button;
