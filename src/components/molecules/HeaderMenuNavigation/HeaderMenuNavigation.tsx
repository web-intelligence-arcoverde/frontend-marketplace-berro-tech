import {useRouter} from 'next/router';

import {ContainerNavigation, ItemNavigation, Row} from './style';

export const HeaderMenuNavigation = () => {
  const router = useRouter();

  let optionInit = router.asPath === '/';
  let optionBussiness = router.asPath === 'negocios';

  const handleClick = (routerPath: any) => {
    router.push(routerPath);
  };

  return (
    <ContainerNavigation>
      <ItemNavigation>
        <li
          id={optionInit ? 'brightness' : ''}
          onClick={() => handleClick('/')}
        >
          Início
        </li>
        {optionInit && <Row />}
      </ItemNavigation>
      <ItemNavigation>
        <li
          id={optionBussiness ? 'brightness' : ''}
          onClick={() => handleClick('negocios')}
        >
          Negócios
        </li>
        {optionBussiness && <Row />}
      </ItemNavigation>
    </ContainerNavigation>
  );
};
