import {Header, Presentation, PresentationInfo} from '@/components';
import {Main} from '@/style';

const Home = () => {
  return (
    <Main>
      <Header isLogged={false} />
      <Presentation />
      <PresentationInfo />
    </Main>
  );
};

export default Home;
