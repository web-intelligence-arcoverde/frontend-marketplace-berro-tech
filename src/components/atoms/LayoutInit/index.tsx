import { ICONS } from "@/assets";
import Image from "next/image";

const LayoutInit = ({ children }) => {
  return (
    <main>
      <Image src={ICONS.SimboloBackground} alt="simbolo berro tech" />
      {children}
    </main>
  );
};

export default LayoutInit;
