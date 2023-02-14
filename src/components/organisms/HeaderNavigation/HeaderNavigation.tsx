import { useState } from "react";
import { HeaderMenuNavigation, Search, AvatarContainer } from "@/components";
import { Navigation } from "./style";

export const HeaderNavigation = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Navigation>
      <HeaderMenuNavigation />
      {
        //@ts-ignore
        <Search isFocused={isFocused} setIsFocused={setIsFocused} />
      }
      <AvatarContainer />
    </Navigation>
  );
};
