import {
  Header,
  Presentation,
  PresentationInfo,
  BussinessHighlight,
} from '@/components';
import {Main, Container} from '@/style';

const Home = () => {
  return (
    <Container>
      <Main>
        <Header />
        <Presentation />
        <PresentationInfo />
        <BussinessHighlight />
      </Main>
    </Container>
  );
};

export default Home;
