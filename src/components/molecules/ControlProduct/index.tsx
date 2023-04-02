import {
  ButtonsControl,
  CardContact,
  ModalRemovePublication,
  PriceProduct,
  ProductCard,
} from "@/components";
import { StyleDesktop } from "@/style";
import { CardProductProps } from "@/types";
import { ContainerControlProduct } from "./style";
import { useState } from "react";

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
  const [removeItem, setRemoveItem] = useState<boolean>(false);

  const handleModalRemove = () => {
    setRemoveItem(!removeItem);
  };

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
      {isProductPage ? (
        <CardContact />
      ) : (
        <StyleDesktop>
          <ButtonsControl editItem={() => {}} removeItem={handleModalRemove} />
        </StyleDesktop>
      )}
      {removeItem && <ModalRemovePublication />}
    </ContainerControlProduct>
  );
};
