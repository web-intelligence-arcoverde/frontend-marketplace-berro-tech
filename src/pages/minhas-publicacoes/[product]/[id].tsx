import {
  ControlProduct,
  DescriptionProduct,
  Header,
  PhotosAnimal,
  Notification,
  ButtonsControl,
  ModalRemovePublication,
  AuthPrivateRouter,
} from '@/components';
import {useAppSelector} from '@/hooks/useSelectorHook';
import {BussinessHighlightProductMock} from '@/mock';
import {
  readProductByIdRequest,
  removeProductModal,
} from '@/store/reducer/product/actions';
import {Container, Main, StyleDesktop, StyleMobile} from '@/style';
import {Content, InfoProduct} from '@/style/minhas-publicacoes-style';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const Product = () => {
  const {
    loading_search_product_by_id,
    product_by_id: {products, contacts},
  } = useAppSelector((state) => state.product);

  const controlModal = useAppSelector(
    (state) => state.product.removeProductModal,
  );
  const dispatch = useDispatch();

  const handleModalRemove = () => {
    dispatch(removeProductModal(controlModal));
  };

  const router = useRouter();

  const {id} = router.query;

  console.log(products);

  useEffect(() => {
    if (id) {
      dispatch(readProductByIdRequest(id));
    }
  }, [id]);

  let description =
    'Viverra ultrices ut egestas quis. Nascetur turpis fringilla dignissim dis amet turpis neque vitae auctor. Ac et tellus sed non nulla lacus scelerisque scelerisque. Dapibus vitae elementum et arcu faucibus malesuada tempor velit amet.';
  return (
    <AuthPrivateRouter>
      {loading_search_product_by_id ? (
        <></>
      ) : (
        <Container>
          <Header />
          <Main>
            <Content>
              <InfoProduct>
                <PhotosAnimal arrayPhoto={BussinessHighlightProductMock} />
                <StyleDesktop>
                  <DescriptionProduct
                    description={products.description}
                    genetics={products.classification.name}
                    weight={products.weight}
                    birthDate={'30/11/2020'}
                  />
                </StyleDesktop>
              </InfoProduct>
              <InfoProduct>
                <ControlProduct
                  id={products.id}
                  breed={products.breed.name}
                  quantity={products.business.amount}
                  name={products.name}
                  city={products.address.city}
                  state={products.address.state}
                  sex={products.gender}
                  age={products.classification.name}
                  rank={products.classification.name}
                  maxWidth='100%'
                />
                <StyleMobile>
                  <DescriptionProduct
                    description={description}
                    genetics={'Puro de Origem'}
                    weight={'588,9'}
                    birthDate={'30/11/2020'}
                  />
                </StyleMobile>
                <Notification />
              </InfoProduct>
              <StyleMobile>
                <ButtonsControl
                  editItem={() => {}}
                  removeItem={handleModalRemove}
                />
              </StyleMobile>
              {controlModal && <ModalRemovePublication />}
            </Content>
          </Main>
        </Container>
      )}
    </AuthPrivateRouter>
  );
};

export default Product;
