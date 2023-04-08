import {
  ButtonsControl,
  CardContact,
  ModalRemovePublication,
  PriceProduct,
  ProductCard,
} from "@/components";
import { StyleDesktop } from "@/style";
import { CardProductProps } from "@/types";
import { ContainerControlProduct } from "./style";
import { useDispatch } from "react-redux";
import { removeProductModal } from "@/store/reducer/product/actions";
import { useAppSelector } from "@/hooks/useSelectorHook";

export const ControlProduct = ({
  name,
  breed,
  quantity,
  state,
  city,
  age,
  sex,
  rank,
  phone,
  isProductPage,
}: CardProductProps) => {

  const controlModal = useAppSelector((state) => state.product.removeProductModal);
  const dispatch = useDispatch()
  const handleModalRemove = () => {
    dispatch(removeProductModal(controlModal))
  };

  return (
    <ContainerControlProduct>
      <ProductCard
        id={0}
        breed={breed}
        quantity={quantity}
        name={name}
        city={city}
        state={state}
        sex={sex}
        age={age}
        rank={rank}
        maxWidth="100%"
        width="100%"
      />
      <PriceProduct value={11000} installments={20} />
      {isProductPage ? (
        <CardContact phone={phone} />
      ) : (
        <StyleDesktop>
          <ButtonsControl editItem={() => {}} removeItem={handleModalRemove} />
        </StyleDesktop>
      )}
      {controlModal && <ModalRemovePublication />}
    </ContainerControlProduct>
  );
};
