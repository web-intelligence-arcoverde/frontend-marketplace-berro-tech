import {  ButtonsControl, PriceProduct, ProductCard } from "@/components";
import { StyleDesktop } from "@/style";
import { CardProductProps } from "@/types";
import {  ContainerControlProduct } from "./style";

export const ControlProduct = ({
  name,
  breed,
  quantity,
  country,
  state,
  city,
  age,
  sex,
  rank,
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
        country={country}
        sex={sex}
        age={age}
        rank={rank}
        maxWidth="100%"
      />
      <PriceProduct value={11000} installments={20} />
      <StyleDesktop>
        <ButtonsControl />
      </StyleDesktop>
    </ContainerControlProduct>
  );
};
