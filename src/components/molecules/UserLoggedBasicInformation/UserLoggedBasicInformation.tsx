import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {CardProfileInformation} from '../../';

import {Container, Button} from './style';
import {setVisibilityModalAddProduct} from '@/store/reducer/user/actions';

export const UserLoggedBasicInformation = () => {
  const {
    loading,
    user: {products},
  } = useAppSelector((state) => state.auth);
  const {visibility_modal_add_product} = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const productsEmpty =
    Array.isArray(products) && products.length > 0 ? true : false;

  const registerProduct = () => {
    dispatch(setVisibilityModalAddProduct(!visibility_modal_add_product));
  };

  return (
    <Container>
      {!loading && <CardProfileInformation />}
      {productsEmpty && (
        <Button id='first-add' onClick={registerProduct}>
          Adicionar novo negócio
        </Button>
      )}
    </Container>
  );
};
