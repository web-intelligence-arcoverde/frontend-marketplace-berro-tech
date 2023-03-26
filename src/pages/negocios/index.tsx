import {
  BussinessAside,
  Footer,
  Header,
  ProductCard,
  SelectOrdenation,
  Tabs,
} from "@/components";
import {
  BussinesContainer,
  ProductContainer,
  ProductCardContainer,
  TabsContainer,
  ProductHeaderContainer,
  SelectContainer,
} from "@/style/negocios-style";
import { Bussinestabs } from "@/mock";

import { Container, Main } from "@/style";
import { useAppSelector } from "@/hooks/useSelectorHook";
import { CardProductProps } from "@/types";

export const Business = () => {
  const allProduct = useAppSelector((state) => state.user.allProducts);

  return (
    <Container>
      <Header />
      <Main>
        <BussinesContainer>
          <BussinessAside />
          <ProductContainer>
            <ProductHeaderContainer>
              <TabsContainer>
                <Tabs tabs={Bussinestabs} />
              </TabsContainer>
              <SelectContainer>
                <SelectOrdenation />
              </SelectContainer>
            </ProductHeaderContainer>
            <ProductCardContainer>
              {allProduct.map((item: CardProductProps, index: number) => (
                <ProductCard key={`${item.name} ${index}`} {...item} />
              ))}
            </ProductCardContainer>
          </ProductContainer>
        </BussinesContainer>
      </Main>
      <Footer />
    </Container>
  );
};

export default Business;
