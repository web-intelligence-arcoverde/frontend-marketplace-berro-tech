import Image from 'next/image';
import {useAppSelector} from '@/hooks/useSelectorHook';
import {ICONS, IMAGES} from '@/assets';
import {
  ButtonLink,
  DropDown,
  MenuNavigationMobile,
  SearchMobile,
} from '@/components';

import {
  ButtonMenu,
  CardAvatar,
  CardButton,
  CardMenuMobile,
  CardIcons,
  StyleAvatar,
  CardDropDown,
  CardArrowUp,
} from './style';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {searchMobile} from '@/store/reducer/product/actions';

export const AvatarContainer = () => {
  const token = useAppSelector((state) => state.auth.token);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState(false);

  const [openDropDown, setOpenDropDown] = useState(false);
  const container = useAppSelector((state) => state.product.searchMobile);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearch(!container);
    setModal(!container);
  }, [container]);

  const handleSearch = () => {
    setSearch(!search);
    dispatch(searchMobile(container));
  };
  const handleContainer = () => {
    dispatch(searchMobile(container));
    setSearch(false);
    setModal(false);
  };
  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (openDropDown && !event.target.closest('#avatar-container')) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropDown]);

  return (
    <>
      {!!token ? (
        <CardAvatar id='avatar-container'>
          {openDropDown ? (
            <>
              <CardArrowUp onClick={handleDropDown}>
                <Image src={ICONS.Up} alt='arrowUp' />
              </CardArrowUp>
              <CardDropDown>
                <DropDown />
              </CardDropDown>
            </>
          ) : (
            <StyleAvatar
              onClick={handleDropDown}
              src={IMAGES.Avatar}
              alt='foto perfil'
            />
          )}
        </CardAvatar>
      ) : (
        <>
          <CardButton>
            <ButtonLink id='to-enter' link='entrar'>
              Entrar
            </ButtonLink>
          </CardButton>
          <CardMenuMobile>
            {container ? (
              <>
                <CardIcons>
                  <Image
                    onClick={handleSearch}
                    src={ICONS.Search}
                    alt='icone lupa'
                  />
                </CardIcons>
                <ButtonMenu
                  onClick={() => {
                    setModal(!modal);
                  }}
                >
                  <Image src={ICONS.Menu} alt='icone do menu' />
                </ButtonMenu>
              </>
            ) : (
              <CardIcons>
                <Image
                  onClick={handleContainer}
                  src={ICONS.Excluir}
                  alt='close'
                />
              </CardIcons>
            )}
            {modal && <MenuNavigationMobile />}
            {search && <SearchMobile />}
          </CardMenuMobile>
        </>
      )}
    </>
  );
};
