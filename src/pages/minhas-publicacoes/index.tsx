import {
  AddFreeUser,
  CardPerfilVendedor,
  Header,
  ProductCard,
  Select,
  Tabs,
} from "@/components";
import { BussinessHighlightProductMock, Bussinestabs } from "@/mock";
import { ButtonAddProduct, Container, Main, TabsContainer } from "@/style";
import {
  CardProducts,
  ContainerMypublication,
  ContentCard,
  SectionProducts,
  ButtonFixedMobile,
  CardFixedMobile,
  ContainerTabs,
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
      <Header />
      <Main>
        <ContainerMypublication empty={!productsEmpty}>
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
            {productsEmpty && (
              <ContainerTabs>
                <TabsContainer>
                  <Tabs tabs={Bussinestabs} />
                </TabsContainer>
                <Select />
              </ContainerTabs>
            )}

            {productsEmpty ? (
              <CardProducts>
                {products.map((item) => (
                  <div key={item.id} onClick={() => handleAnimalClick(item)}>
                    <ProductCard {...item} />
                  </div>
                ))}
              </CardProducts>
            ) : (
              <AddFreeUser addProduct={() => {}} />
            )}
          </SectionProducts>
          <CardFixedMobile>
            <ButtonFixedMobile>
              {productsEmpty
                ? "Adicionar novo negócio"
                : "Adicionar meu primeiro negócio"}
            </ButtonFixedMobile>
          </CardFixedMobile>
        </ContainerMypublication>
      </Main>
    </Container>
  );
};

export default MyPublication;
