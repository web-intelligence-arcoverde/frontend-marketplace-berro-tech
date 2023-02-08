import { ReactNode } from "react";
import { CardButtonAuthentication } from "./style";

interface CardButtonAuthenticationProps {
  children: ReactNode;
}

const ButtonAuthentication = ({ children }: CardButtonAuthenticationProps) => {
  const handleLogin = () => {
    // chamada à API do Google e do Facebook e passamos por parâmentros ou vem direto do backend?
  };
  return (
    <CardButtonAuthentication onClick={handleLogin}>
      {children}
    </CardButtonAuthentication>
  );
};

export default ButtonAuthentication;
