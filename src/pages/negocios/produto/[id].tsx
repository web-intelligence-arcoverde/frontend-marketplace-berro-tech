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
import { dev } from "@/service";
import { currentPhoto, getProductSelected } from "@/store/reducer/product/actions";
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
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Product = () => {
  const allProducts = useAppSelector((state) => state.product.allProducts);
  const router = useRouter()
  const { id } = router.query
  const productSelected = useAppSelector(
    (state) => state.product.productSelected
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      axios
        .get(`${dev}/product/${id}`)
        .then((response) => {
          dispatch(getProductSelected(response.data));
          dispatch(currentPhoto(response.data.documents[0].url))
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <Container>
      <Header />
      <Main>
        <Content>
          <ImagesProduct>
            <PhotosAnimal arrayPhoto={productSelected?.documents} />
            <StyleDesktop>
              <DescriptionProduct
                description={productSelected?.description}
                genetics={productSelected?.classification?.name}
                weight={productSelected?.weight}
                birthDate={"30/11/2020"}
              />
              <ProductSellerCard />
            </StyleDesktop>
          </ImagesProduct>
          <InfoProduct>
            <ControlProduct
              id={productSelected?.id}
              isProductPage
              breed={productSelected?.breed?.name}
              quantity={3}
              name={productSelected?.name}
              city={productSelected?.address?.city}
              state={productSelected?.address?.state}
              sex={productSelected?.gender}
              age={productSelected?.age}
              rank={productSelected?.classification?.name}
              maxWidth={"100%"}
            />
          </InfoProduct>
          <StyleMobile>
            <DescriptionProduct
              description={productSelected?.description}
              genetics={productSelected?.classification?.name}
              weight={productSelected?.weight}
              birthDate={productSelected?.classification?.date}
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
          <NearProducts moreProduct={allProducts.length > 2}>
            {allProducts.slice(0, 3).map((item: IProduct) => (
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
