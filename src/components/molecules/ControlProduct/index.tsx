/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ButtonsControl,
  CardContact,
  ModalRemovePublication,
  PriceProduct,
  ProductCard,
} from '@/components';
import { StyleDesktop } from '@/style';
import { ContainerControlProduct } from './style';
import { useDispatch } from 'react-redux';
import {
  openModalUpdateProduct,
  removeProductModal,
} from '@/store/reducer/product/actions';
import { useAppSelector } from '@/hooks/useSelectorHook';
import React from "react";
export const ControlProduct = ({
  id,
  name,
  documents,
  breed,
  business,
  address,
  gender,
  ageCategory,
  classification,
  phone,
  isProductPage,
}: any) => {
  const controlModal = useAppSelector(
    (state) => state.product.removeProductModal,
  );



  const { modal_update_product } = useAppSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleModalRemove = () => {
    dispatch(removeProductModal(controlModal));
  };

  const handleEditProduct = () => {
    dispatch(openModalUpdateProduct(modal_update_product));
  };

  return (
    <ContainerControlProduct>
      <ProductCard
        id={id}
        name={name}
        documents={documents}
        breed={breed}
        business={business}
        address={address}
        gender={gender}
        ageCategory={ageCategory}
        classification={classification}
        maxWidth='100%'
        width='100%'
      />
      <PriceProduct {...business} />
      {isProductPage ? (
        <CardContact phone={phone} />
      ) : (
        <StyleDesktop>
          <ButtonsControl
            editItem={handleEditProduct}
            removeItem={handleModalRemove}
          />
        </StyleDesktop>
      )}
      {controlModal && <ModalRemovePublication />}
    </ContainerControlProduct>
  );
};
