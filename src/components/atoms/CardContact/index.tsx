import { Container } from './style';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import { CardContactProps } from '@/types';
import { Button } from '@/components';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useAppSelector } from '@/hooks';
import Link from 'next/link';

export const CardContact = ({ phone }: CardContactProps) => {
  const isMobile = !useMediaQuery('md');

  const { token } = useAppSelector(state => state.auth)


  const onClickDots = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Título do conteúdo',
          text: 'Descrição do conteúdo',
          url: `${location?.href}}`,
        })
        .then(() => console.log('Conteúdo compartilhado com sucesso!'))
        .catch((error) =>
          console.log('Ocorreu um erro ao compartilhar: ', error),
        );
    }
  };

  return (
    <>
      {!!token ?
        <Container>
          <a
            target='_blank'
            href={`https://api.whatsapp.com/send?phone=55${phone}&text=Ol%C3%A1,%20.%0AGostaria%20de%20entrar%20em%20contato%20para%20falar%20sobre%20o%20seu%20an%C3%BAncio%20na%20BerroTech.%20Fiquei%20interessado.`} rel="noreferrer"

          >
            <Image src={ICONS.Whatsapp} alt='Icone whatsapp' />
            Entrar em contato
          </a>
          {isMobile && (
            <Button onClick={onClickDots}>
              <Image src={ICONS.ShareDots} alt='Icone compartilhar' />
            </Button>
          )}
        </Container> : <Container>
          <Link href="/entrar" replace>
            Crie sua conta
          </Link>
        </Container>}
    </>
  );
};
