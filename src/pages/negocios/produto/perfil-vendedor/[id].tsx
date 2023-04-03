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
                <SelectOrdenation />
              </ContainerSellerProductHeader>
            </StyleDesktop>
            <ContainerSellerProductMain>
              {BussinessHighlightProductMock.slice(0, 4).map((item, index) => (
                <ProductCard
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
