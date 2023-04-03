import {
  BussinessAside,
  Footer,
  Header,
  NotFoundFilter,
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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Business = () => {
  const allProduct = useAppSelector((state) => state.product.allProducts);
  const currentSearch = useAppSelector((state) => state.product.currentSearch);
  const router = useRouter();
  const routerBusiness = router.asPath;
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    if (routerBusiness == "/negocios" && allProduct.length > 0) {
      setEmpty(true);
    }
  }, []);

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
              {empty ? (
                <>
                  {allProduct.length > 0 ? (
                    allProduct?.map((item: CardProductProps, index: number) => (
                      <ProductCard
                        widthTablet="80%"
                        maxWidth="none"
                        key={`${item.name} ${index}`}
                        {...item}
                      />
                    ))
                  ) : (
                    <NotFoundFilter
                      title={`Nenhum resultado para “${currentSearch}” `}
                      subtitle="Tente alterar os filtros para encontrar negócios"
                    />
                  )}
                </>
              ) : (
                <NotFoundFilter
                  title={`Não temos negócios no momento  `}
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
