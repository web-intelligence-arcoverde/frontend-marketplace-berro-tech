import {
  BussinessAside,
  Footer,
  Header,
  ProductCard,
  Select,
  Tabs,
} from '@/components';
import {
  BussinesContainer,
  ProductContainer,
  ProductCardContainer,
  TabsContainer,
  ProductHeaderContainer,
  SelectContainer,
} from '@/style/negocios-style';
import { BussinessHighlightProductMock, Bussinestabs } from '@/mock';

import { Container, Main } from '@/style';

export const Business = () => {
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
                <Select />
              </SelectContainer>
            </ProductHeaderContainer>
            <ProductCardContainer>
              {BussinessHighlightProductMock.map((item, index) => (
                <ProductCard key={`${item.name} ${index}`} {...item} />
              ))}
            </ProductCardContainer>
          </ProductContainer>
        </BussinesContainer>
        <Footer />
      </Main>
    </Container>
  );
};

export default Business;
