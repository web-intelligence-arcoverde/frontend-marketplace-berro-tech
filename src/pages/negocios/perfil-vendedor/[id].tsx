import {
  CardSellerProfile,
  ContainerBreadcumb,
  ContainerSellerProduct,
  ContainerSellerProductHeader,
  ContainerSellerProductMain,
  ContainerSellerProfile,
} from '@/style/perfil-vendedor-style';
import { Container, Main, StyleDesktop } from '@/style';
import {
  Breadcrumb,
  Footer,
  Header,
  ProductCard,
  SelectOrdenation,
  SellerCard,
} from '@/components';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import { ParsedUrlQuery } from 'querystring';
import { readUserByIdRequest } from '@/store/reducer/user/actions';
import { useEffect } from 'react';

const SelleProfiler = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id }: ParsedUrlQuery = router.query;

  useEffect(() => {
    id && dispatch(readUserByIdRequest(id));
  }, [id]);

  const {
    loading_user_by_id,
    user_by_id: { products },
  } = useAppSelector((state) => state.user);

  const isMobile = !useMediaQuery('md');

  return (
    <Container>
      {loading_user_by_id ? (
        <></>
      ) : (
        <>
          <Header />
          <Main>
            <ContainerSellerProfile>
              <ContainerSellerProduct>
                <StyleDesktop>
                  <ContainerSellerProductHeader>
                    <ContainerBreadcumb>
                      <Breadcrumb />
                    </ContainerBreadcumb>
                    <SelectOrdenation />
                  </ContainerSellerProductHeader>
                </StyleDesktop>
                <ContainerSellerProductMain>
                  {products.map((item: any) => {
                    return (
                      <ProductCard
                        widthTablet='80%'
                        minWidth='200px'
                        maxWidth='none'
                        key={`${item.name}-${item.id}`}
                        {...item}
                      />
                    );
                  })}
                </ContainerSellerProductMain>
              </ContainerSellerProduct>
              <CardSellerProfile>
                {isMobile && (
                  <ContainerBreadcumb>
                    <Breadcrumb />
                  </ContainerBreadcumb>
                )}
                <SellerCard />
              </CardSellerProfile>
            </ContainerSellerProfile>
          </Main>
          <Footer />
        </>
      )}
    </Container>
  );
};

export default SelleProfiler;
