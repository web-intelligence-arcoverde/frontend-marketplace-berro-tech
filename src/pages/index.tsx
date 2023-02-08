import {BussinessHighlight, Header, Presentation, PresentationInfo} from '@/components';
import {useAppSelector, useAppDispatch} from '@/hooks/useSelectorHook';
import {Main} from '@/style';

const Home = () => {
  const state = useAppSelector((state) => state);
  console.log(state);

  return (
    <Main>
      <Header isLogged = {false} />
      <Presentation />
      <PresentationInfo />
      <BussinessHighlight />
    </Main>
  );
};

export default Home;
