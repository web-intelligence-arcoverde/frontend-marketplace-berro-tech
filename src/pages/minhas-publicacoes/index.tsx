import {
  AddFreeUser,
  CardPerfilVendedor,
  Header,
  ProductCard,
  Tabs,
} from "@/components";
import { BussinessHighlightProductMock, Bussinestabs } from "@/mock";
import { ButtonAddProduct, Container, Main, TabsContainer } from "@/style";
import {
  CardButtonMobile,
  CardProducts,
  ContainerMypublication,
  ContentCard,
  SectionProducts,
} from "@/style/minhas-publicacoes-style";
import { CardProductProps } from "@/types";
import router from "next/router";

const MyPublication = () => {
  const products = BussinessHighlightProductMock;
  const productsEmpty = products.length > 0 ? true : false;

  const handleAnimalClick = (animal: CardProductProps) => {
    router.push(`/minhas-publicacoes/${animal.name}`);
  };

  return (
    <Container>
      <Main>
        <Header />
        <ContainerMypublication>
          <ContentCard>
            <CardPerfilVendedor
              name="Brenno Guedes"
              email="brennoguedes9@gmail.com"
              phoneNumber="(83) 98736-8275"
              avaliation={4.8}
            />
            {productsEmpty && (
              <ButtonAddProduct id="first-add" onClick={() => {}}>
                Adicionar novo negócio
              </ButtonAddProduct>
            )}
          </ContentCard>
          <SectionProducts>
            <TabsContainer>
              <Tabs tabs={Bussinestabs} />
            </TabsContainer>
            {productsEmpty ? (
              <CardProducts>
                {products.map((item) => (
                  <div key={item.id} onClick={() => handleAnimalClick(item)}>
                    <ProductCard {...item} />
                  </div>
                ))}
                {productsEmpty && (
                  <CardButtonMobile>
                    <ButtonAddProduct onClick={() => {}}>
                      Adicionar novo negócio
                    </ButtonAddProduct>
                  </CardButtonMobile>
                )}
              </CardProducts>
            ) : (
              <AddFreeUser addProduct={() => {}} />
            )}
          </SectionProducts>
        </ContainerMypublication>
      </Main>
    </Container>
  );
};

export default MyPublication;
