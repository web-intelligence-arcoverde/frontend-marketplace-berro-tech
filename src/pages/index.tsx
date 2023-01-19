import Image from "next/image";
import { IMAGES } from "../assets/images";

const Home = () => {
  return (
    <>
      <Image src={IMAGES.Logo} alt="" />
    </>
  );
};

export default Home;
