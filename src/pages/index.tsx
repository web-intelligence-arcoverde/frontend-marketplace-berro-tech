import {
  Header,
  PresentationInfo,
  Footer,
  MainSearch,
  SecuritySection,
  PhotosAnimal,
} from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import { Main, Container } from "@/style";
import dynamic from "next/dynamic";

const MyPresentation = dynamic(
  () => import("../components/organisms/Presentation")
);
const MyBussinessHighlight = dynamic(
  () => import("../components/organisms/BussinessHighlight/index")
);

const Home = () => {
  return (
    <Container>
      <Main>
        <Header />
        <PhotosAnimal arrayPhoto={BussinessHighlightProductMock}/>
        <MyPresentation />
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
