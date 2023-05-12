import {
  BussinessAside,
  Footer,
  Header,
  NotFoundFilter,
  ProductCard,
  SelectOrdenation,
  Tabs
} from '@/components';
import {
  BussinesContainer,
  ProductContainer,
  ProductCardContainer,
  TabsContainer,
  ProductHeaderContainer,
  SelectContainer
} from '@/style/negocios-style';
import { Bussinestabs } from '@/mock';

import { Container, Main } from '@/style';
import { useAppSelector } from '@/hooks/useSelectorHook';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { productsHook } from '@/hooks/productHook';


export const Business = () => {
  const { allProducts, allFilterSelected, filterProductByAnimal } = useAppSelector((state) => state.product);
  const currentSearch = useAppSelector((state) => state.product.currentSearch);
  const router = useRouter();
  const routerBusiness = router.asPath;
  const [empty, setEmpty] = useState(false);

  const { products, loadingProducts, isEmptyProducts } = productsHook()


  useEffect(() => {
    if (routerBusiness == '/negocios' && isEmptyProducts) {
      setEmpty(true);
    }
  }, [allProducts]);


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
            <ProductCardContainer> {
              isEmptyProducts ? (
                <> {
                  isEmptyProducts ? ((products?.map((item
                    : any) => (
                    <ProductCard widthTablet='60%' maxWidth='none'
                      key={item.id}
                      id={item.id}
                      documents={item.documents}
                      breed={item.breed}
                      business={item.business}
                      name={item?.name}
                      address={item.address}
                      gender={item.gender}
                      ageCategory={item?.ageCategory}
                      classification={item?.classification}
                    />
                  )))) : (
                    <NotFoundFilter title={
                      `Nenhum resultado para “${currentSearch}” `
                    }
                      subtitle='Tente alterar os filtros para encontrar negócios' />
                  )
                } </>
              ) : (
                <NotFoundFilter title={`Não temos negócios no momento `}
                  subtitle={`Tente novamente mais tarde`} />
              )
            } </ProductCardContainer>
          </ProductContainer>
        </BussinesContainer>
      </Main>
      <Footer />
    </Container>
  );
};

export default Business;
