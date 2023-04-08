import {
  CardSellerProfile,
  ContainerBreadcumb,
  ContainerSellerProduct,
  ContainerSellerProductHeader,
  ContainerSellerProductMain,
  ContainerSellerProfile,
} from "@/style/perfil-vendedor-style";
import { Container, Main, StyleDesktop } from "@/style";
import {
  Breadcrumb,
  Footer,
  Header,
  ProductCard,
  SelectOrdenation,
  SellerCard,
} from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelectorHook";
import { ParsedUrlQuery } from "querystring";
import { getSellerId } from "@/store/reducer/user/actions";
import { useEffect } from "react";

const SelleProfiler = () => {
  const router = useRouter();
  const product = useAppSelector((state)=>state.product.product)
  const dispatch = useAppDispatch()
  const { id }: ParsedUrlQuery = router.query;

  useEffect(()=>{
    dispatch(getSellerId(id))
  },[])
  
  const isMobile = !useMediaQuery("md");

  return (
    <Container>
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
              {BussinessHighlightProductMock.map((item, index) => (
                <ProductCard
                  widthTablet="80%"
                  minWidth="200px"
                  maxWidth="none"
                  key={`${item.name} ${index}`}
                  {...item}
                />
              ))}
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
    </Container>
  );
};

export default SelleProfiler;
