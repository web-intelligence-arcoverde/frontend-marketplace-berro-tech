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
import Link from "next/link";

const SellerProfile = () => {
  const products = BussinessHighlightProductMock;
  const productsEmpty = products.length > 0 ? true : false;

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
                  <Link key={item.id} href={`/product?id=${item.id}`}>
                    <ProductCard
                      id={item.id}
                      key={item.id}
                      photo={item.photo}
                      breed={item.breed}
                      quantity={item.quantity}
                      name={item.name}
                      city={item.city}
                      state={item.state}
                      country={item.country}
                      sex={item.sex}
                      age={item.age}
                      rank={item.rank}
                    />
                  </Link>
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

export default SellerProfile;
