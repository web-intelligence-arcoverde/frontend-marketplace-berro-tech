import {
  ControlProduct,
  DescriptionProduct,
  Header,
  PhotosAnimal,
  Notification,
  ButtonsControl,
  ModalRemovePublication,
} from "@/components";
import { useAppSelector } from "@/hooks/useSelectorHook";
import { BussinessHighlightProductMock } from "@/mock";
import { removeProductModal } from "@/store/reducer/product/actions";
import { Container, Main, StyleDesktop, StyleMobile } from "@/style";
import { Content, InfoProduct } from "@/style/minhas-publicacoes-style";
import { useDispatch } from "react-redux";

const Product = () => {
  const controlModal = useAppSelector(
    (state) => state.product.removeProductModal
  );
  const dispatch = useDispatch();

  const handleModalRemove = () => {
    dispatch(removeProductModal(controlModal));
  };

  let description =
    "Viverra ultrices ut egestas quis. Nascetur turpis fringilla dignissim dis amet turpis neque vitae auctor. Ac et tellus sed non nulla lacus scelerisque scelerisque. Dapibus vitae elementum et arcu faucibus malesuada tempor velit amet.";
  return (
    <Container>
      <Header />
      <Main>
        <Content>
          <InfoProduct>
            <PhotosAnimal arrayPhoto={BussinessHighlightProductMock} />
            <StyleDesktop>
              <DescriptionProduct
                description={description}
                genetics={"Puro de Origem"}
                weight={"588,9"}
                birthDate={"30/11/2020"}
              />
            </StyleDesktop>
          </InfoProduct>
          <InfoProduct>
            <ControlProduct
              id={0}
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
            <StyleMobile>
              <DescriptionProduct
                description={description}
                genetics={"Puro de Origem"}
                weight={"588,9"}
                birthDate={"30/11/2020"}
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
  );
};

export default Product;
