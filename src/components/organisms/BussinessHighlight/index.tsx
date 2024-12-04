/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { NotFoundFilter, ProductCard } from '@/components';
import {
  Container,
  TitleContainer,
  ProductCardsContainer,
  LinkMobileContainer,
} from './style';
import { useAppSelector } from '@/hooks/useSelectorHook';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { readFeaturedProductsRequest } from '@/store/reducer/product/actions';

export const BussinessHighlight = () => {
  const dispatch = useDispatch();

  const { featuredProducts, featuredProductsLoading } = useAppSelector(
    (state) => state.product,
  );

  useEffect(() => {
    if (featuredProductsLoading) dispatch(readFeaturedProductsRequest());
  }, [featuredProductsLoading]);

  return (
    <Container>
      <TitleContainer>
        <h2>Negócios em destaque</h2>
        <a href='negocios'>Veja mais opções</a>
      </TitleContainer>
      {featuredProductsLoading ? (
        <></>
      ) : (
        <ProductCardsContainer moreProduct={featuredProducts.length <= 2}>
          {featuredProducts.map((item: any) => (
            <ProductCard
              minWidth='300px'
              widthTablet='48%'
              width='30%'
              maxWidth='none'
              key={item.id}
              id={item.id}
              documents={item.documents}
              breed={item.breed}
              business={item.business}
              name={item?.name}
              address={item.address}
              gender={item.gender}
              ageCategory={item.ageCategory}
              classification={item?.classification}
            />
          ))}
          {featuredProducts.length == 0 && (
            <NotFoundFilter
              title={`Lamentamos informar que não há produtos disponíveis no momento `}
              subtitle='Fique à vontade para verificar novamente mais tarde.'
            />
          )}
        </ProductCardsContainer>
      )}
      <LinkMobileContainer>
        <a href='negocios'>Veja mais opções</a>
      </LinkMobileContainer>
    </Container>
  );
};

export default BussinessHighlight;
