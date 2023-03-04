import { ICONS } from "@/assets";
import { Button } from "@/components/atoms";
import Image from "next/image";
import { ContainerAddFreeUser, StyleLogo } from "./style";

interface AddFreeUserProps {
  addProduct: ()=>void;
}
export const AddFreeUser = ({ addProduct }: AddFreeUserProps) => {
  return (
    <ContainerAddFreeUser>
      <StyleLogo src={ICONS.LogoGray} alt="logo berrotech" />
      <div>
        <h5>Publique seus animais para venda</h5>
        <h6>Em apenas 3 etapas você pode começar a vender</h6>
      </div>
      <Button
        onClick={() => {
          addProduct;
        }}
      >
        Adicionar meu primeiro negócio
      </Button>
    </ContainerAddFreeUser>
  );
};
