import {
  AddFreeUser,
  CardPerfilVendedor,
  Header,
  ProductCard,
} from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import { ButtonAddProduct, Container, Main } from "@/style";
import {
  CardButtonMobile,
  CardProducts,
  ContainerPerfilVendedor,
  ContentCard,
} from "@/style/perfil-vendedor.style";
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
        <ContainerPerfilVendedor empty={productsEmpty && products.length > 2}>
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

          {productsEmpty ? (
            <>
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
            </>
          ) : (
            <AddFreeUser addProduct={() => {}} />
          )}
        </ContainerPerfilVendedor>
      </Main>
    </Container>
  );
};

export default MyPublication;
