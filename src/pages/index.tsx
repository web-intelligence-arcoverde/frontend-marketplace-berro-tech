import {
  Header,
  Presentation,
  PresentationInfo,
  BussinessHighlight,
} from "@/components";
import { Main } from "@/style";

const Home = () => {
  return (
    <Main>
      <Header isLogged={false} />
      <Presentation />
      <PresentationInfo />
      <BussinessHighlight />
    </Main>
  );
};

export default Home;
