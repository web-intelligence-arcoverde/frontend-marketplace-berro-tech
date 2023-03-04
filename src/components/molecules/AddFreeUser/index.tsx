import { ICONS } from "@/assets";
import { ButtonAddProduct } from "@/style";
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
      <ButtonAddProduct
        onClick={() => {
          addProduct;
        }}
      >
        Adicionar meu primeiro negócio
      </ButtonAddProduct>
    </ContainerAddFreeUser>
  );
};
