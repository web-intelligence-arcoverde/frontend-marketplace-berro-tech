import {
  Header,
  Presentation,
  PresentationInfo,
  BussinessHighlight,
  Footer,
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
        <Footer />
      </Main>
    </Container>
  );
};

export default Home;
