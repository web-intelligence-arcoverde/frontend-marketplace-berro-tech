import { ChangeEvent, ReactNode } from "react";
import { CardButtonAuthentication } from "./style";
interface CardButtonAuthenticationProps {
  children: ReactNode;
}

export const ButtonAuthentication = ({
  children,
}: CardButtonAuthenticationProps) => {
  const handleLogin = (e: ChangeEvent<HTMLInputElement> | any) => {
    let companie = e.target.innerText.replace("Entrar com ", "");
    // chamada à API do Google e do Facebook e passamos por parâmentros ou vem direto do backend?
    alert(`Ainda não existe autenticação para ${companie}`);
    e.preventDefault();
  };
  return (
    <CardButtonAuthentication onClick={handleLogin}>
      {children}
    </CardButtonAuthentication>
  );
};
