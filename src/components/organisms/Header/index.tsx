import {IMAGES} from '@/assets';
import {Button, Logo, Search} from '@/components/atoms';
import {useAppDispatch} from '@/hooks/useSelectorHook';
import Image from 'next/image';
import {useState} from 'react';
import {
  ButtonMenu,
  CardAvatar,
  CardNav,
  ContainerHeader,
  Flex,
  Nav,
  Navigation,
  Row,
} from './style';

import {signIn} from '@/store/reducer/user/actions';

interface HeaderProps {
  isLogged: boolean;
}

const Header = ({isLogged}: HeaderProps) => {
  const [optionComponent, setOptionComponent] = useState('inicio');

  const dispatch = useAppDispatch();

  return (
    <ContainerHeader>
      <Flex>
        <Logo />
      </Flex>
      <Navigation>
        <CardNav>
          <Nav>
            <li
              id={optionComponent === 'inicio' ? 'brightness' : ''}
              onClick={() => setOptionComponent('inicio')}
            >
              Início
            </li>
            {optionComponent === 'inicio' && <Row />}
          </Nav>
          <Nav>
            <li
              id={optionComponent === 'negocios' ? 'brightness' : ''}
              onClick={() => setOptionComponent('negocios')}
            >
              Negócios
            </li>
            {optionComponent === 'negocios' && <Row />}
          </Nav>
        </CardNav>
        {/* TODO Button do menu esperando o redux  */}
        {/* <ButtonMenu>
          <Image src={ICONS.Menu} alt="icone do menu" />
        </ButtonMenu> */}
        <Search />
        {isLogged ? (
          <CardAvatar>
            <Image src={IMAGES.Avatar} alt='foto perfil' />
          </CardAvatar>
        ) : (
          <Button
            maxWidth='120px'
            padding='0 30px'
            onClick={() => dispatch(signIn({email: '23434', password: '234'}))}
          >
            Entrar
          </Button>
        )}
      </Navigation>
    </ContainerHeader>
  );
};

export default Header;
