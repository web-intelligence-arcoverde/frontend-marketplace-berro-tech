import {useFormatMoney} from '@/hooks/useFormatMoney';
import {CardPrice, ContainerPrice, Price} from './style';

interface PriceProductProps {
  installments: number;
  price: number;
}

export const PriceProduct = ({price, installments}: PriceProductProps) => {
  let totalValue = price / installments;
  return (
    <ContainerPrice>
      <CardPrice>
        <h5>Preço</h5>
        <Price>
          <h3>
            {useFormatMoney(price)} <span>cada</span>
          </h3>
          <h6>
            ou {installments} x {useFormatMoney(totalValue)}
          </h6>
        </Price>
      </CardPrice>
    </ContainerPrice>
  );
};
