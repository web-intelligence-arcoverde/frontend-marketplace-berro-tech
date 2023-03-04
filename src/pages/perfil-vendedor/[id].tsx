import { CardPerfilVendedor, Header } from "@/components";
import { ContainerPerfilVendedor } from "@/style/perfil-vendedor.style";

const SellerProfile = () => {
  return (
    <>
      <Header />
      <ContainerPerfilVendedor>
        <CardPerfilVendedor
          name="Brenno Guedes"
          email="brennoguedes9@gmail.com"
          phoneNumber="(83) 98736-8275"
          avaliation={4.8}
        />
      </ContainerPerfilVendedor>
    </>
  );
};

export default SellerProfile;
