/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  BussinessAside,
  Footer,
  Header,
  NotFoundFilter,
  ProductCard,
  SelectOrdenation,
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
import { Bussinestabs } from '@/mock';

import { Container, Main } from '@/style';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import React, { useEffect } from 'react';

import {
  filterProductsByAnimal,
  readProductRequest,
} from '@/store/reducer/product/actions';
import { filterByAllAttributes } from '@/store/reducer/product/reducer';

export const Business = () => {

  const { allProducts, allFilterSelected, filterProductByAnimal } =
    useAppSelector((state) => state.product);

  const currentSearch = useAppSelector((state) => state.product.currentSearch);

  const isExistItemsSelectedFilter = allFilterSelected.length >= 1;

  const isNotEmptyProduct =
    filterProductByAnimal.length < 1 && allProducts.length < 1;

  const product = isExistItemsSelectedFilter
    ? filterProductByAnimal
    : filterProductByAnimal.length >= 1
      ? filterProductByAnimal
      : allProducts;


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readProductRequest());
  }, [dispatch]);


  useEffect(() => {
    if (isExistItemsSelectedFilter) {
      allFilterSelected.map((item: any, index: number) => {
        console.log(index)
        if (allFilterSelected.length === 1) {
          const productsFiltred = filterByAllAttributes(product, item);
          dispatch(filterProductsByAnimal(productsFiltred));
        } else if (index >= 1) {
          const productsFiltred = filterByAllAttributes(allProducts, item);
          const appendProducts = productsFiltred.concat(product)
          dispatch(filterProductsByAnimal(appendProducts));
        }
      });
    } else {
      dispatch(filterProductsByAnimal(allProducts));
    }
  }, [allFilterSelected, isExistItemsSelectedFilter, allProducts]);

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
              {!isNotEmptyProduct ? (
                <>
                  {!isNotEmptyProduct ? (
                    product?.map((item: any) => (
                      <ProductCard
                        widthTablet='60%'
                        maxWidth='none'
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
                    ))
                  ) : (
                    <NotFoundFilter
                      title={`Nenhum resultado para “${currentSearch}” `}
                      subtitle='Tente alterar os filtros para encontrar negócios'
                    />
                  )}
                </>
              ) : (
                <NotFoundFilter
                  title={`Não temos negócios no momento `}
                  subtitle={`Tente novamente mais tarde`}
                />
              )}
            </ProductCardContainer>
          </ProductContainer>
        </BussinesContainer>
      </Main>
      <Footer />
    </Container>
  );
};

export default Business;
