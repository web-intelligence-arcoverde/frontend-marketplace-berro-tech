import {
  ControlProduct,
  DescriptionProduct,
  Footer,
  Header,
  PhotosAnimal,
  ProductCard,
  ProductSellerCard,
} from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelectorHook";
import { BussinessHighlightProductMock } from "@/mock";
import { GetProductId } from "@/store/reducer/product/actions";
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
import { IProduct } from "@/types/ICardProductProps";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";

const Product = () => {
  const router = useRouter();
  const allProducts = useAppSelector((state)=>state.product.allProducts)
  const dispatch = useAppDispatch()
  const { id }: ParsedUrlQuery = router.query;

  useEffect(()=>{
    dispatch(GetProductId(id))
  },[])
  
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
          <NearProducts moreProduct={allProducts.length > 2 }>
            {allProducts.slice(0,3).map((item:IProduct) => (
               <ProductCard
               minWidth="300px"
               widthTablet="48%"
               width="30%"
               maxWidth="none"
               key={item.id}
               id={item.id}
               breed={item.breed.name}
               quantity={item.business.amount}
               name={item.name}
               city={item.address.city}
               state={item.address.state}
               sex={item.gender}
               age={item.age}
               rank={item.classification.name}
               photo={item.documents[0].url}
             />
            ))}
          </NearProducts>
        </NearProductsContainer>
      </Main>
      <Footer />
    </Container>
  );
};

export default Product;
