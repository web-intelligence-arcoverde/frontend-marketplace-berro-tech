import {
  ControlProduct,
  DescriptionProduct,
  Footer,
  Header,
  PhotosAnimal,
  ProductCard,
  ProductSellerCard,
} from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import { Container, Main, StyleDesktop, StyleMobile } from "@/style";
import {
  Content,
  ImagesProduct,
  InfoProduct,
  LinkNearProducts,
  NearProducts,
  NearProductsTitleContainer,
  NearProductsContainer,
} from "@/style/produto-style";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

const Product = () => {
  const router = useRouter();

  const { id }: ParsedUrlQuery = router.query;

  console.log(id);
  const description =
    "Viverra ultrices ut egestas quis. Nascetur turpis fringilla dignissim dis amet turpis neque vitae auctor. Ac et tellus sed non nulla lacus scelerisque scelerisque. Dapibus vitae elementum et arcu faucibus malesuada tempor velit amet.";
  return (
    <Container>
      <Header />
      <Main>
        <Content>
          <ImagesProduct>
            <PhotosAnimal arrayPhoto={BussinessHighlightProductMock} />
            <StyleDesktop>
              <DescriptionProduct
                description={description}
                genetics={"Puro de Origem"}
                weight={"588,9"}
                birthDate={"30/11/2020"}
              />
              <ProductSellerCard />
            </StyleDesktop>
          </ImagesProduct>
          <InfoProduct>
            <ControlProduct
              id={0}
              isProductPage
              breed={"Senepol"}
              quantity={3}
              name={"Garrote Senepol"}
              city={"Campina Grande"}
              state={"Paraiba"}
              country={"Brazil"}
              sex={"Macho"}
              age={"Garrote"}
              rank={"Genética"}
              maxWidth={"100%"}
            />
          </InfoProduct>
          <StyleMobile>
            <DescriptionProduct
              description={description}
              genetics={"Puro de Origem"}
              weight={"588,9"}
              birthDate={"30/11/2020"}
            />
            <ProductSellerCard />
          </StyleMobile>
        </Content>
        <NearProductsContainer>
          <NearProductsTitleContainer>
            <h1>Produtos semelhantes</h1>
            <StyleDesktop>
              <LinkNearProducts>Ver mais animais</LinkNearProducts>
            </StyleDesktop>
          </NearProductsTitleContainer>
          <NearProducts>
            {BussinessHighlightProductMock.slice(3).map((item, index) => (
              <ProductCard key={`${item.name} ${index}`} {...item} />
            ))}
          </NearProducts>
        </NearProductsContainer>
      </Main>
      <Footer />
    </Container>
  );
};

export default Product;
