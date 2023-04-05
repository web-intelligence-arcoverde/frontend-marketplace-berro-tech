import {ICONS, IMAGES} from '@/assets';
import {Button, Modal, MultiStepForm} from '@/components';
import {UserPerfil} from '@/types/IUserProps';
import Image from 'next/image';
import {
  CardVendedor,
  HeaderCard,
  ImagePerfil,
  Aside,
  TextGray,
  CardSection,
  InfoSeller,
  RowVertical,
} from './style';
import {StepEditAccount} from '@/mock';
import useModalOverflow from '@/hooks/useModalOverflow';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {showModalEditUser} from '@/store/reducer/user/actions';

export const CardPerfilVendedor = ({
  name,
  email,
  location,
  phoneNumber,
  avaliation,
}: UserPerfil) => {
  const {visibility_modal_edit_user} = useAppSelector((state) => state.user);
  const {user} = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const registerProduct = (step?: number) => {
    dispatch(showModalEditUser({user, step}));
  };
  useModalOverflow(visibility_modal_edit_user, registerProduct);

  return (
    <CardVendedor>
      <HeaderCard>
        <ImagePerfil src={IMAGES.Avatar} alt='perfil do vendedor ' />
        <Aside>
          <h5>{name}</h5>
          <TextGray>{email}</TextGray>
          <Button onClick={() => registerProduct(0)}>Minha conta</Button>
        </Aside>
      </HeaderCard>
      <CardSection>
        <TextGray>Localização</TextGray>
        {location ? (
          <h5>{location}</h5>
        ) : (
          <button onClick={() => registerProduct(3)}>
            Adicione uma localização
          </button>
        )}
      </CardSection>
      <InfoSeller>
        <CardSection>
          <TextGray>Telefone</TextGray>
          {phoneNumber ? (
            <h5>{phoneNumber}</h5>
          ) : (
            <button onClick={() => registerProduct(1)}>
              Adicione um telefone
            </button>
          )}
        </CardSection>
        <RowVertical></RowVertical>
        {!!avaliation && (
          <CardSection>
            <TextGray>Avaliações</TextGray>
            <h5>
              {avaliation}
              <Image src={ICONS.StarYellow} alt='estrela de pontuação' />
            </h5>
          </CardSection>
        )}
      </InfoSeller>
      {visibility_modal_edit_user && (
        <Modal onClick={registerProduct}>
          <MultiStepForm
            steps={StepEditAccount}
            registerProduct={() => registerProduct()}
          />
        </Modal>
      )}
    </CardVendedor>
  );
};
