import {
  Header,
  PresentationInfo,
  Footer,
  MainSearch,
  SecuritySection,
  CountryRegion,
} from '@/components';
import {Main, Container} from '@/style';
import dynamic from 'next/dynamic';

const MyPresentation = dynamic(
  () => import('../components/organisms/Presentation'),
);
const MyBussinessHighlight = dynamic(
  () => import('../components/organisms/BussinessHighlight/index'),
);

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <MyPresentation />
        <PresentationInfo />
        <MyBussinessHighlight />
        <CountryRegion />
        <MainSearch />
        <SecuritySection />
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
