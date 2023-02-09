import {IMAGES} from '@/assets';
import { Logo, Search} from '@/components/atoms';
import ButtonLink from '@/components/atoms/Button/ButtonLink';
import Image from 'next/image';
import React, {useState} from 'react';
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

interface HeaderProps {
  isLogged: boolean;
}

const Header = ({isLogged}: HeaderProps) => {
  const [optionComponent, setOptionComponent] = useState('inicio');

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
          <ButtonLink id='to-enter' link='entrar'>
            Entrar
          </ButtonLink>
        )}
      </Navigation>
    </ContainerHeader>
  );
};

export default Header;
