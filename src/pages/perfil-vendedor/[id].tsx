import { AddFreeUser, CardPerfilVendedor, Header } from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import { ButtonAddProduct, Container, Main } from "@/style";
import {
  ContainerPerfilVendedor,
  ContentCard,
} from "@/style/perfil-vendedor.style";

const SellerProfile = () => {
  const products = BussinessHighlightProductMock;
  const productsEmpty = products.length > 0 ? true : false;
  return (
    <Container>
      <Main>
        <Header />
        <ContainerPerfilVendedor>
          <ContentCard>
            <CardPerfilVendedor
              name="Brenno Guedes"
              email="brennoguedes9@gmail.com"
              phoneNumber="(83) 98736-8275"
              avaliation={4.8}
            />
            {productsEmpty && (
              <ButtonAddProduct onClick={() => {}}>
                Adicionar novo negócio
              </ButtonAddProduct>
            )}
          </ContentCard>
          <div>
            {productsEmpty ? <>TESTE</> : <AddFreeUser addProduct={() => {}} />}
          </div>
        </ContainerPerfilVendedor>
      </Main>
    </Container>
  );
};

export default SellerProfile;
