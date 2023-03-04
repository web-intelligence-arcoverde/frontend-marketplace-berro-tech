import { AddFreeUser, CardPerfilVendedor, Header } from "@/components";
import { Container, Main } from "@/style";
import { ContainerPerfilVendedor } from "@/style/perfil-vendedor.style";

const SellerProfile = () => {
  return (
    <Container>
      <Main>
        <Header />
        <ContainerPerfilVendedor>
          <div>
            <CardPerfilVendedor
              name="Brenno Guedes"
              email="brennoguedes9@gmail.com"
              phoneNumber="(83) 98736-8275"
              avaliation={4.8}
            />
          </div>
          <div>
            <AddFreeUser addProduct={() => {}} />
          </div>
        </ContainerPerfilVendedor>
      </Main>
    </Container>
  );
};

export default SellerProfile;
