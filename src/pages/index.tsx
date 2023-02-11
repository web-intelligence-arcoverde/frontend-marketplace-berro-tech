import {
  Header,
  Presentation,
  PresentationInfo,
  BussinessHighlight,
  Footer,
  MainSearch,
  SecuritySection,
} from "@/components";
import { Main, Container } from "@/style";

const Home = () => {
  return (
    <Container>
      <Main>
        <Header />
        <Presentation />
        <PresentationInfo />
        <BussinessHighlight />
        <MainSearch />
        <SecuritySection />
        <Footer />
      </Main>
    </Container>
  );
};

export default Home;
