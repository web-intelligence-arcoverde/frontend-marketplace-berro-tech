import {
  AddFreeUser,
  Dropdown,
  Header,
  ProductCard,
  RegisterProduct,
  SelectOrdenation,
  Tabs,
  AuthPrivateRouter,
  UserLoggedBasicInformation,
  ModalInformation,
} from "@/components";
import useModalOverflow from "@/hooks/useModalOverflow";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelectorHook";
import { Bussinestabs, DropdownMock } from "@/mock";
import { dev } from "@/service";
import { getAllMyProducts } from "@/store/reducer/auth/actions";
import { setVisibilityModalAddProduct } from "@/store/reducer/user/actions";

import {
  Container,
  Main,
  StyleDesktop,
  StyleMobile,
  TabsContainer,
} from "@/style";
import {
  CardProducts,
  ContainerMypublication,
  SectionProducts,
  ButtonFixedMobile,
  CardFixedMobile,
  ContainerTabs,
} from "@/style/minhas-publicacoes-style";

import { IProduct } from "@/types/ICardProductProps";
import axios from "axios";
import { useEffect } from "react";

const MyPublication = () => {
  const { visibility_modal_add_product } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.auth.myProducts);
  const productsEmpty =
    Array.isArray(products) && products.length > 0 ? true : false;

  const registerProduct = () => {
    dispatch(setVisibilityModalAddProduct(!visibility_modal_add_product));
  };

  const idUser = useAppSelector((state) => state.auth.user.id);
  useModalOverflow(visibility_modal_add_product, registerProduct);

  useEffect(() => {
    if (idUser) {
      axios
        .get(`${dev}/products/user/${idUser}`)
        .then((response) => {
          console.log("aquiii", response.data);
          dispatch(getAllMyProducts(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [idUser]);

  return (
    <AuthPrivateRouter>
      <Container>
        <Header />
        <Main>
          <ContainerMypublication empty={!productsEmpty}>
            <UserLoggedBasicInformation />
            <SectionProducts>
              {productsEmpty && (
                <ContainerTabs>
                  <TabsContainer>
                    <Tabs tabs={Bussinestabs} />
                  </TabsContainer>
                  <StyleDesktop>
                    <SelectOrdenation />
                  </StyleDesktop>
                  <StyleMobile>
                    <Dropdown
                      id="dropdown"
                      options={DropdownMock}
                      onOptionSelect={() => {}}
                    />
                  </StyleMobile>
                </ContainerTabs>
              )}

              {productsEmpty && Array.isArray(products) ? (
                <CardProducts>
                  {products.map((item: IProduct) => (
                    <ProductCard
                      widthTablet="60%"
                      maxWidth="none"
                      key={item.id}
                      id={item.id}
                      breed={item.breed?.name}
                      quantity={item.business?.amount}
                      name={item.name}
                      city={item.address?.city}
                      state={item.address?.state}
                      sex={item.gender}
                      age={item.age}
                      rank={item.classification?.name}
                      photo={item.documents?.[0]?.url}
                    />
                  ))}
                </CardProducts>
              ) : (
                <AddFreeUser addProduct={() => registerProduct()} />
              )}
            </SectionProducts>
            <CardFixedMobile>
              <ButtonFixedMobile onClick={() => registerProduct()}>
                {productsEmpty
                  ? "Adicionar novo negócio"
                  : "Adicionar meu primeiro negócio"}
              </ButtonFixedMobile>
            </CardFixedMobile>
          </ContainerMypublication>
          {visibility_modal_add_product && (
            <ModalInformation onClick={registerProduct}>
              <RegisterProduct registerProduct={() => registerProduct()} />
            </ModalInformation>
          )}
        </Main>
      </Container>
    </AuthPrivateRouter>
  );
};

export default MyPublication;
