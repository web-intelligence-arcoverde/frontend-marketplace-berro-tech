import Image from 'next/image';

import {useAppSelector} from '@/hooks/useSelectorHook';

import {IMAGES} from '@/assets';
import {ButtonLink} from '@/components';

import {CardAvatar} from './style';

export const AvatarContainer = () => {
  const token = useAppSelector((state) => state.user.token);

  return (
    <>
      {!!token ? (
        <CardAvatar>
          <Image src={IMAGES.Avatar} alt='foto perfil' />
        </CardAvatar>
      ) : (
        <ButtonLink id='to-enter' link='entrar'>
          Entrar
        </ButtonLink>
      )}
    </>
  );
};
