import Image from "next/image";
import { IMAGES } from "../../../assets/images";

const Logo = () => {
  return <Image src={IMAGES.Logo} alt="logo berro tech" />;
};

export default Logo;
