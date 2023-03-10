import { useFormatMoney } from "@/hooks/useFormatMoney";
import { CardPrice, ContainerPrice, Price } from "./style";

interface PriceProductProps {
  installments: number;
  value: number;
}

export const PriceProduct = ({ value, installments }: PriceProductProps) => {
  let totalValue = value / installments;
  return (
    <ContainerPrice>
      <CardPrice>
        <h5>Preço</h5>
        <Price>
          <h3>
            {useFormatMoney(value)} <span>cada</span>
          </h3>
          <h6>
            ou {installments} x {useFormatMoney(totalValue)}
          </h6>
        </Price>
      </CardPrice>
    </ContainerPrice>
  );
};
