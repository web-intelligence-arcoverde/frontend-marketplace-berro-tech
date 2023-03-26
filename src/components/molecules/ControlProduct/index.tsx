import {  ButtonsControl, CardContact, PriceProduct, ProductCard } from "@/components";
import { StyleDesktop } from "@/style";
import { CardProductProps } from "@/types";
import {  ContainerControlProduct } from "./style";

export const ControlProduct = ({
  name,
  breed,
  quantity,
  state,
  city,
  age,
  sex,
  rank,
  isProductPage,
}: CardProductProps) => {
 
  return (
    <ContainerControlProduct>
      <ProductCard
        id={0}
        breed={breed}
        quantity={quantity}
        name={name}
        city={city}
        state={state}
        sex={sex}
        age={age}
        rank={rank}
        maxWidth="100%"
      />
      <PriceProduct value={11000} installments={20} />
        {isProductPage?
        <CardContact />
        :
        <StyleDesktop>
          <ButtonsControl />
        </StyleDesktop>
        }
    </ContainerControlProduct>
  );
};
