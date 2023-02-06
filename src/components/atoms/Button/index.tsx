import { ButtonProps } from "@/types";
import { CardButton } from "./style";

const Button = ({ children, onClick, padding, className,maxWidth }: ButtonProps) => {
  return (
    <CardButton maxWidth={maxWidth} onClick={onClick} className={className} padding={padding}>
      {children}
    </CardButton>
  );
};
export default Button;
