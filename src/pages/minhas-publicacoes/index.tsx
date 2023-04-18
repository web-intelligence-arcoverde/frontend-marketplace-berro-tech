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
} from '@/components';
import useModalOverflow from '@/hooks/useModalOverflow';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {Bussinestabs, DropdownMock} from '@/mock';
import {setVisibilityModalAddProduct} from '@/store/reducer/product/actions';

import {
  Container,
  Main,
  StyleDesktop,
  StyleMobile,
  TabsContainer,
} from '@/style';
import {
  CardProducts,
  ContainerMypublication,
  SectionProducts,
  ButtonFixedMobile,
  CardFixedMobile,
  ContainerTabs,
} from '@/style/minhas-publicacoes-style';

const MyPublication = () => {
  const {visibility_modal_add_product} = useAppSelector(
    (state) => state.product,
  );
  const dispatch = useAppDispatch();

  const {
    user: {products},
    loading,
  } = useAppSelector((state) => state.auth);

  const productsEmpty =
    Array.isArray(products) && products.length > 0 ? true : false;

  const openModalRegisterProduct = () => {
    dispatch(setVisibilityModalAddProduct(!visibility_modal_add_product));
  };

  useModalOverflow(visibility_modal_add_product, openModalRegisterProduct);

  return (
    <AuthPrivateRouter>
      <Container>
        <Header />
        <Main>
          {loading ? (
            <></>
          ) : (
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
                        id='dropdown'
                        options={DropdownMock}
                        onOptionSelect={() => {}}
                      />
                    </StyleMobile>
                  </ContainerTabs>
                )}

                {productsEmpty && Array.isArray(products) ? (
                  <CardProducts>
                    {products.map((item: any) => (
                      <ProductCard
                        widthTablet='60%'
                        maxWidth='none'
                        key={item.id}
                        id={item.id}
                        documents={item.documents}
                        breed={item.breed}
                        business={item.business}
                        name={item?.name}
                        address={item.address}
                        gender={item.gender}
                        ageCategory={item?.ageCategory}
                        classification={item?.classification}
                      />
                    ))}
                  </CardProducts>
                ) : (
                  <AddFreeUser addProduct={() => openModalRegisterProduct()} />
                )}
              </SectionProducts>
              <CardFixedMobile>
                <ButtonFixedMobile onClick={() => openModalRegisterProduct()}>
                  {productsEmpty
                    ? 'Adicionar novo negócio'
                    : 'Adicionar meu primeiro negócio'}
                </ButtonFixedMobile>
              </CardFixedMobile>
            </ContainerMypublication>
          )}
          {visibility_modal_add_product && (
            <ModalInformation onClick={openModalRegisterProduct}>
              <RegisterProduct
                registerProduct={() => openModalRegisterProduct()}
              />
            </ModalInformation>
          )}
        </Main>
      </Container>
    </AuthPrivateRouter>
  );
};

export default MyPublication;
