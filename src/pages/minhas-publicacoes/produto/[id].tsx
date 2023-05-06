import {
  ControlProduct,
  DescriptionProduct,
  Header,
  PhotosAnimal,
  Notification,
  ButtonsControl,
  ModalRemovePublication,
  AuthPrivateRouter,
  ModalEditPublication,
} from '@/components';
import {useAppSelector} from '@/hooks/useSelectorHook';

import {
  readProductByIdRequest,
  removeProductModal,
} from '@/store/reducer/product/actions';
import {Container, Main, StyleDesktop, StyleMobile} from '@/style';
import {
  CardDescription,
  Content,
  InfoProduct,
} from '@/style/minhas-publicacoes-style';
import {formatDate} from '@/util';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {Steps} from '../../../components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

const Product = () => {
  const {
    loading_search_product_by_id,
    product_by_id: {products},
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

  useEffect(() => {
    if (id) {
      dispatch(readProductByIdRequest(id));
    }
  }, [id]);

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
                <PhotosAnimal arrayPhoto={products.documents} />
                <StyleDesktop>
                  <DescriptionProduct
                    description={products.description}
                    genetics={products.classification.name}
                    weight={products.weight}
                    birthDate={formatDate(new Date(products.date_birth))}
                  />
                </StyleDesktop>
              </InfoProduct>
              <CardDescription>
                <ControlProduct
                  id={products.id}
                  breed={products.breed}
                  business={products.business}
                  name={products.name}
                  address={products.address}
                  gender={products.gender}
                  ageCategory={products.ageCategory}
                  classification={products.classification}
                  maxWidth='100%'
                />
                <StyleMobile>
                  <DescriptionProduct
                    description={products.description}
                    genetics={products.classification.name}
                    weight={products.weight}
                    birthDate={formatDate(new Date(products.date_birth))}
                  />
                </StyleMobile>
                <Notification />
              </CardDescription>
              <StyleMobile>
                <ButtonsControl
                  editItem={() =>
                    //@ts-ignore
                    setIsOpen(true)
                  }
                  removeItem={handleModalRemove}
                />
              </StyleMobile>
              <ModalEditPublication />
              {controlModal && <ModalRemovePublication />}
            </Content>
          </Main>
        </Container>
      )}
    </AuthPrivateRouter>
  );
};

export default Product;
