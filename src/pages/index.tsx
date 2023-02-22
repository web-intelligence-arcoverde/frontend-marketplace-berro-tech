import {
  Header,
  PresentationInfo,
  Footer,
  MainSearch,
  SecuritySection,
} from "@/components";
import { Main, Container } from "@/style";
import dynamic  from 'next/dynamic'

const MyPresentation = dynamic(() => import('../components/organisms/Presentation'));
const MyBussinessHighlight = dynamic(() => import('../components/organisms/BussinessHighlight/index'));

const Home = () => {
  return (
    <Container>
      <Main>
        <Header />
       <MyPresentation/>
        <PresentationInfo />
        <MyBussinessHighlight />
        <MainSearch />
        <SecuritySection /> 
        <Footer />
      </Main>
    </Container>
  );
};

export default Home;
