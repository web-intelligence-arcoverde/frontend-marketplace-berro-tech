import { Button, PriceProduct, ProductCard } from "@/components";
import { CardProductProps } from "@/types";

import { CardButtons, ContainerControlProduct } from "./style";

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
  const ButtonsControl = () => {
    return (
      <CardButtons>
        <Button onClick={() => {}}>Editar</Button>
        <Button onClick={() => {}}>Remover</Button>
      </CardButtons>
    );
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
        country={country}
        sex={sex}
        age={age}
        rank={rank}
        maxWidth="100%"
      />
      <PriceProduct value={11000} installments={20} />
      <ButtonsControl/>
    </ContainerControlProduct>
  );
};
