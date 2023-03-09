import { Button, ProductCard } from "@/components";
import { formatMoney } from "@/hooks/useFormatMoney";
import { CardProductProps } from "@/types";
import {
  CardButtons,
  CardPrice,
  ContainerControlProduct,
  MiniCard,
  Price,
} from "./style";

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
  let value = 11000;
  let installments = 20;
  let totalValue = value / installments;

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
      <MiniCard>
        <CardPrice>
          <h5>Preço</h5>
          <Price>
            <h3>
              {formatMoney(value)} <span>cada</span>
            </h3>
            <h6>
              ou {installments} x {formatMoney(totalValue)}
            </h6>
          </Price>
        </CardPrice>
      </MiniCard>
      <CardButtons>
        <Button onClick={() => {}}>Editar</Button>
        <Button onClick={() => {}}>Remover</Button>
      </CardButtons>
    </ContainerControlProduct>
  );
};
