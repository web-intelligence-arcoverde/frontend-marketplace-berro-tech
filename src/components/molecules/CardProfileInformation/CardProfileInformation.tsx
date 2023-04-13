import {ICONS} from '@/assets';
import {Button, ContainerStepsEditUser, ModalInformation} from '@/components';
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
import useModalOverflow from '@/hooks/useModalOverflow';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {showModalEditUser} from '@/store/reducer/user/actions';

export const CardProfileInformation = () => {
  const {visibility_modal_edit_user} = useAppSelector((state) => state.user);

  const {user} = useAppSelector((state) => state.auth);

  console.log(user);

  const {avatar_url, contacts, addresses, name, email, avaliation} =
    useAppSelector((state) => state.auth.user);

  let showAvatarImage = avatar_url ? avatar_url : ICONS.Avatar;

  let phone = contacts.length > 0 && contacts[0].phone_number;

  let address = addresses.length > 0 && {
    state: addresses[0].state,
    city: addresses[0].city,
  };

  const dispatch = useAppDispatch();

  const handleVisibleModalEditUser = (step?: number) => {
    dispatch(showModalEditUser({user, step}));
  };

  useModalOverflow(visibility_modal_edit_user, handleVisibleModalEditUser);

  return (
    <CardVendedor>
      <HeaderCard>
        <ImagePerfil
          src={showAvatarImage}
          alt='perfil do vendedor'
          width='50'
          height='50'
        />
        <Aside>
          <h5>{name}</h5>
          <TextGray>{email}</TextGray>
          <Button onClick={() => handleVisibleModalEditUser(0)}>
            Minha conta
          </Button>
        </Aside>
      </HeaderCard>
      <CardSection>
        <TextGray>Localização</TextGray>
        {address ? (
          <h5>
            {address.state}, {address.city}
          </h5>
        ) : (
          <button onClick={() => handleVisibleModalEditUser(2)}>
            Adicione uma localização
          </button>
        )}
      </CardSection>
      <InfoSeller>
        <CardSection>
          <TextGray>Telefone</TextGray>
          {phone ? (
            <h5>{phone}</h5>
          ) : (
            <button onClick={() => handleVisibleModalEditUser(0)}>
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
        <ModalInformation onClick={handleVisibleModalEditUser}>
          <ContainerStepsEditUser />
        </ModalInformation>
      )}
    </CardVendedor>
  );
};
