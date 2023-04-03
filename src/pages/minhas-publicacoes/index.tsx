import {
  AddFreeUser,
  CardPerfilVendedor,
  Dropdown,
  Header,
  Modal,
  ProductCard,
  RegisterProduct,
  SelectOrdenation,
  Tabs,
} from "@/components";
import useModalOverflow from "@/hooks/useModalOverflow";
import {
  BussinessHighlightProductMock,
  Bussinestabs,
  DropdownMock,
} from "@/mock";
import {
  ButtonAddProduct,
  Container,
  Main,
  StyleDesktop,
  StyleMobile,
  TabsContainer,
} from "@/style";
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
import { Fragment, useState } from "react";

const MyPublication = () => {
  const [modal, setModal] = useState(false);

  const products = BussinessHighlightProductMock;
  const productsEmpty = products.length > 0 ? true : false;

  const handleAnimalClick = (animal: CardProductProps) => {
    router.push(`/minhas-publicacoes/${animal.name}/${animal.id}`);
  };

  const registerProduct = () => {
    setModal(!modal);
  };
  useModalOverflow(modal, registerProduct);

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
              <ButtonAddProduct id="first-add" onClick={registerProduct}>
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
                <StyleDesktop>
                  <SelectOrdenation />
                </StyleDesktop>
                <StyleMobile>
                  <Dropdown
                    id="dropdown"
                    options={DropdownMock}
                    onOptionSelect={() => {}}
                  />
                </StyleMobile>
              </ContainerTabs>
            )}

            {productsEmpty ? (
              <CardProducts>
                {products.map((item, index) => (
                  <ProductCard
                    key={index}
                    minWidth="200px"
                    widthTablet="80%"
                    maxWidth="none"
                    onClick={() => handleAnimalClick(item)}
                    {...item}
                  />
                ))}
              </CardProducts>
            ) : (
              <AddFreeUser addProduct={() => {}} />
            )}
          </SectionProducts>
          <CardFixedMobile>
            <ButtonFixedMobile onClick={registerProduct}>
              {productsEmpty
                ? "Adicionar novo negócio"
                : "Adicionar meu primeiro negócio"}
            </ButtonFixedMobile>
          </CardFixedMobile>
        </ContainerMypublication>
        {modal && (
          <Modal onClick={registerProduct}>
            <RegisterProduct registerProduct={() => registerProduct()} />
          </Modal>
        )}
      </Main>
    </Container>
  );
};

export default MyPublication;
