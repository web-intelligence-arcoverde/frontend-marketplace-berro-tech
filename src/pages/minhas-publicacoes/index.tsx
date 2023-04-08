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
import {setVisibilityModalAddProduct} from '@/store/reducer/user/actions';
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
import {CardProductProps} from '@/types';
import router from 'next/router';

const MyPublication = () => {
  const {visibility_modal_add_product} = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const {products} = useAppSelector((state) => state.auth.user);

  const productsEmpty =
    Array.isArray(products) && products.length > 0 ? true : false;

  const handleAnimalClick = (animal: CardProductProps) => {
    router.push(`/minhas-publicacoes/${animal.name}/${animal.id}`);
  };

  const registerProduct = () => {
    dispatch(setVisibilityModalAddProduct(!visibility_modal_add_product));
  };
  useModalOverflow(visibility_modal_add_product, registerProduct);

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
                      id='dropdown'
                      options={DropdownMock}
                      onOptionSelect={() => {}}
                    />
                  </StyleMobile>
                </ContainerTabs>
              )}

              {productsEmpty && Array.isArray(products) ? (
                <CardProducts>
                  {products.map((item, index) => (
                    <ProductCard
                      key={index}
                      minWidth='200px'
                      widthTablet='80%'
                      maxWidth='none'
                      onClick={() => handleAnimalClick(item)}
                      {...item}
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
                  ? 'Adicionar novo negócio'
                  : 'Adicionar meu primeiro negócio'}
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
