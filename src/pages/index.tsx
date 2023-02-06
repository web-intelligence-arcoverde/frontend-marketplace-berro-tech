import {Header, Presentation, PresentationInfo} from '@/components';
import {useAppSelector, useAppDispatch} from '@/hooks/useSelectorHook';
import {Main} from '@/style';

const Home = () => {
  const state = useAppSelector((state) => state);
  console.log(state);

  return (
    <Main>
      <Header />
      <Presentation />
      <PresentationInfo />
    </Main>
  );
};

export default Home;
