import Image from "next/image";
import { ICONS } from "../../../assets/icons";

export const Logo = () => {
  return <Image src={ICONS.Logo} alt="logo berro tech" />;
};
