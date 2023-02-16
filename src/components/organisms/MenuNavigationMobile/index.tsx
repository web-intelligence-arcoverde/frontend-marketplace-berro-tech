import { ButtonLink } from "@/components/atoms";
import { CardButtons, ContainerMenu } from "./style";

export const MenuNavigationMobile = () => {
  return (
    <ContainerMenu>
      <div>teste</div>
      <CardButtons>
        <ButtonLink id="enter" link="/entrar">Entrar</ButtonLink>
        <ButtonLink link="/criar-conta">Criar conta</ButtonLink>
      </CardButtons>
    </ContainerMenu>
  );
};
