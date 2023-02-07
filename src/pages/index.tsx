import {Header, Presentation, PresentationInfo} from '@/components/organisms';
import {useAppSelector} from '@/hooks/useSelectorHook';
import {Main} from '@/style';

const Home = () => {
  const state = useAppSelector((state) => state);
  console.log(state);

  return (
    <Main>
      <Header isLogged={false} />
      <Presentation />
      <PresentationInfo />
    </Main>
  );
};

export default Home;
