import Image from "next/image";
import { IMAGES } from "../../../assets/images";

const Logo = () => {
  return <Image width={180} src={IMAGES.Logo} alt="logo berro tech" />;
};

export default Logo;
