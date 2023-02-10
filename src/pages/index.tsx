import {
  Header,
  Presentation,
  PresentationInfo,
  BussinessHighlight,
} from '@/components';
import {Main} from '@/style';

const Home = () => {
  return (
    <Main>
      <Header />
      <Presentation />
      <PresentationInfo />
      <BussinessHighlight />
    </Main>
  );
};

export default Home;
