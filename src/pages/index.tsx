import Header from "@/components/organisms/Header";
import SignUp from "./SignUp";
import { Main } from "./style";

const Home = () => {
  return (
    <Main>
      <Header />
      <SignUp/>
    </Main>
  );
};

export default Home;
