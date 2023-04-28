import {
  ControlProduct,
  DescriptionProduct,
  Footer,
  Header,
  PhotosAnimal,
  ProductCard,
  ProductSellerCard,
} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {readProductByIdRequest} from '@/store/reducer/product/actions';
import {Container, Main, StyleDesktop, StyleMobile} from '@/style';
import {
  Content,
  ImagesProduct,
  InfoProduct,
  LinkNearProducts,
  NearProducts,
  NearProductsTitleContainer,
  NearProductsContainer,
} from '@/style/produto-style';
import {IProduct} from '@/types/ICardProductProps';
import {formatDate} from '@/util';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const Product = () => {
  const {
    loading_search_product_by_id,
    product_by_id: {products, contacts},
  } = useAppSelector((state) => state.product);

  const router = useRouter();
  const {id} = router.query;

  const allProducts = useAppSelector((state) => state.product.allProducts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(readProductByIdRequest(id));
    }
  }, [id]);

  return (
    <Container>
      {loading_search_product_by_id ? (
        <></>
      ) : (
        <>
          <Header />
          <Main>
            <Content>
              <ImagesProduct>
                <PhotosAnimal arrayPhoto={products?.documents} />
                <StyleDesktop>
                  <DescriptionProduct
                    description={products?.description}
                    genetics={products?.classification?.name}
                    weight={products?.weight}
                    birthDate={formatDate(new Date(products.date_birth))}
                  />
                  <ProductSellerCard />
                </StyleDesktop>
              </ImagesProduct>
              <InfoProduct>
                <ControlProduct
                  isProductPage
                  breed={products.breed}
                  business={products.business}
                  id={products.id}
                  name={products?.name}
                  address={products.address}
                  gender={products.gender}
                  ageCategory={products?.ageCategory}
                  classification={products?.classification}
                  phone={contacts[0].phone_number}
                  maxWidth='100%'
                />
              </InfoProduct>
              <StyleMobile>
                <DescriptionProduct
                  description={products?.description}
                  genetics={products?.classification?.name}
                  weight={products?.weight}
                  birthDate={products?.classification?.date}
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
                {allProducts.slice(0, 3).map((item: any) => (
                  <ProductCard
                    minWidth='300px'
                    widthTablet='48%'
                    width='30%'
                    maxWidth='none'
                    key={item.id}
                    id={item.id}
                    name={item?.name}
                    address={item.address}
                    gender={item.gender}
                    ageCategory={item?.ageCategory}
                    classification={item?.classification}
                    breed={products.breed}
                    business={products.business}
                    documents={item.documents}
                  />
                ))}
              </NearProducts>
            </NearProductsContainer>
          </Main>
          <Footer />
        </>
      )}
    </Container>
  );
};

export default Product;
