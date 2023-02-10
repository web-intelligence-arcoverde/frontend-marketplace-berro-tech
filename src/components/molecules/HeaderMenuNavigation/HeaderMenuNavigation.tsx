import {useRouter} from 'next/router';

import {ContainerNavigation, ItemNavigation, Row} from './style';

export const HeaderMenuNavigation = () => {
  const router = useRouter();

  let optionInit = router.asPath === '/';
  let optionBussiness = router.asPath === '/negocios';

  let styleInit = optionInit ? 'brightness' : '';
  let styleBussiness = optionBussiness ? 'brightness' : '';

  const handleClick = (routerPath: any) => {
    router.push(routerPath);
  };

  return (
    <ContainerNavigation>
      <ItemNavigation>
        <li id={styleInit} onClick={() => handleClick('/')}>
          Início
        </li>
        {optionInit && <Row />}
      </ItemNavigation>
      <ItemNavigation>
        <li id={styleBussiness} onClick={() => handleClick('/negocios')}>
          Negócios
        </li>
        {optionBussiness && <Row />}
      </ItemNavigation>
    </ContainerNavigation>
  );
};
