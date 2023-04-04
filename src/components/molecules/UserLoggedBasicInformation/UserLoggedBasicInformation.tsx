import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {CardPerfilVendedor} from '../../';

import {Container, Button} from './style';
import {setVisibilityModalAddProduct} from '@/store/reducer/user/actions';

export const UserLoggedBasicInformation = () => {
  const {products, name, email, contacts, ratings} = useAppSelector(
    (state) => state.auth.user,
  );
  const {visibility_modal_add_product} = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const productsEmpty =
    Array.isArray(products) && products.length > 0 ? true : false;

  const registerProduct = () => {
    dispatch(setVisibilityModalAddProduct(!visibility_modal_add_product));
  };

  return (
    <Container>
      <CardPerfilVendedor
        name={name}
        email={email}
        phoneNumber={Array.isArray(products) && contacts[0]?.phone_number}
        avaliation={ratings}
      />
      {productsEmpty && (
        <Button id='first-add' onClick={registerProduct}>
          Adicionar novo negócio
        </Button>
      )}
    </Container>
  );
};
