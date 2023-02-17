import { useState } from "react";
import { HeaderMenuNavigation, Search, AvatarContainer } from "@/components";
import { Navigation, CardSearch } from "./style";

export const HeaderNavigation = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Navigation>
      <HeaderMenuNavigation />
      <CardSearch>
        {
          //@ts-ignore
          <Search isFocused={isFocused} setIsFocused={setIsFocused} />
        }
      </CardSearch>
      <AvatarContainer />
    </Navigation>
  );
};
