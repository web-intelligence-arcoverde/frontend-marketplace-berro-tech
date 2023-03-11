import {
  CardSellerProfile,
  ContainerBreadcumb,
  ContainerSellerProduct,
  ContainerSellerProductHeader,
  ContainerSellerProductMain,
  ContainerSellerProfile,
} from "@/style/perfil-vendedor-style";
import { Container, Main, StyleDesktop, StyleMobile } from "@/style";
import {
  Breadcrumb,
  Footer,
  Header,
  ProductCard,
  Select,
  SellerCard,
} from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SelleProfiler = () => {
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
                <Select />
              </ContainerSellerProductHeader>
            </StyleDesktop>
            <ContainerSellerProductMain>
              {BussinessHighlightProductMock.slice(2).map((item, index) => (
                <ProductCard key={`${item.name} ${index}`} {...item} />
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
        <Footer />
      </Main>
    </Container>
  );
};

export default SelleProfiler;
