import { Header, Presentation } from "@/components/organisms";
import { Main } from "./style";

const Home = () => {
  return (
    <Main>
      <Header isLogged = {false} />
      <Presentation />
    </Main>
  );
};

export default Home;
