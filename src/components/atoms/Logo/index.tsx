import Image from "next/image";
import { ICONS } from "../../../assets/icons";

const Logo = () => {
  return <Image src={ICONS.Logo} alt="logo berro tech" />;
};

export default Logo;
