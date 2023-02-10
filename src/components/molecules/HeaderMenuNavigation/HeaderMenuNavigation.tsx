import {useRouter} from 'next/router';

import {ContainerNavigation, ItemNavigation, Row} from './style';

import Link from 'next/link';

export const HeaderMenuNavigation = () => {
  const router = useRouter();

  let optionInit = router.asPath === '/';
  let optionBussiness = router.asPath === '/negocios';

  let styleInit = optionInit ? 'brightness' : '';
  let styleBussiness = optionBussiness ? 'brightness' : '';

  return (
    <ContainerNavigation>
      <ItemNavigation>
        <Link href='/'>
          <li id={styleInit}>Início</li>
          {optionInit && <Row />}
        </Link>
      </ItemNavigation>
      <ItemNavigation>
        <Link href='/negocios'>
          <li id={styleBussiness}>Negócios</li>
          {optionBussiness && <Row />}
        </Link>
      </ItemNavigation>
    </ContainerNavigation>
  );
};
