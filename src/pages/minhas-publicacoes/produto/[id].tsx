import {
  ControlProduct,
  DescriptionProduct,
  Header,
  PhotosAnimal,
  Notification,
  ButtonsControl,
  ModalRemovePublication,
  AuthPrivateRouter,
  ModalEditPublication
} from '@/components';
import {useAppSelector} from '@/hooks/useSelectorHook';

import {readProductByIdRequest, removeProductModal} from '@/store/reducer/product/actions';
import {Container, Main, StyleDesktop, StyleMobile} from '@/style';
import {CardDescription, Content, InfoProduct} from '@/style/minhas-publicacoes-style';
import {formatDate} from '@/util';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const Product = () => {
  const {modal_update_product, loading_search_product_by_id, product_by_id: {
      products
    }} = useAppSelector((state) => state.product);

  const controlModal = useAppSelector((state) => state.product.removeProductModal,);
  const dispatch = useDispatch();

  const handleModalRemove = () => {
    dispatch(removeProductModal(controlModal));
  };

  const router = useRouter();

  const {id} = router.query;

  useEffect(() => {
    if (id) {
      dispatch(readProductByIdRequest(id));
    }
  }, [id, modal_update_product]);


  return (<AuthPrivateRouter> {
    loading_search_product_by_id ? (<></>) : (<Container>
      <Header/>
      <Main>
        <Content>
          <InfoProduct>
            <PhotosAnimal arrayPhoto={
              products.documents
            }/>
            <StyleDesktop>
              <DescriptionProduct description={
                  products.description
                }
                genetics={
                  products.classification.name
                }
                weight={
                  products.weight
                }
                birthDate={
                  formatDate(new Date(products.date_birth))
                }/>
            </StyleDesktop>
          </InfoProduct>
          <CardDescription>
            <ControlProduct id={
                products.id
              }
              breed={
                products.breed
              }
              business={
                products.business
              }
              name={
                products.name
              }
              address={
                products.address
              }
              gender={
                products.gender
              }
              ageCategory={
                products.ageCategory
              }
              classification={
                products.classification
              }
              maxWidth='100%'/>
            <StyleMobile>
              <DescriptionProduct description={
                  products.description
                }
                genetics={
                  products.classification.name
                }
                weight={
                  products.weight
                }
                birthDate={
                  formatDate(new Date(products.date_birth))
                }/>
            </StyleMobile>
            <Notification/>
          </CardDescription>
          <StyleMobile>
            <ButtonsControl editItem={
                () =>
                // @ts-ignore
                setIsOpen(true)
              }
              removeItem={handleModalRemove}/>
          </StyleMobile>
          <ModalEditPublication/> {
          controlModal && <ModalRemovePublication/>
        } </Content>
      </Main>
    </Container>)
  } </AuthPrivateRouter>);
};

export default Product;
