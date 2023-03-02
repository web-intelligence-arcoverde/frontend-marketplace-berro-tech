import { useRouter } from "next/router";
import Image from "next/image";
import { ListBreadcumb, ItemBreadcumb } from "./style";
import Link from "next/link";
import { ICONS } from "@/assets";

export const Breadcrumb = () => {
  const router = useRouter();
  const pathnames = router.pathname.split("/").filter((x: string) => x);

  return (
    <ListBreadcumb>
      {pathnames.length > 1 && pathnames.map((name: string, key: number) => {
        const goTo = `/${pathnames.slice(0, key + 1).join("/")}`;
        return (
          <ItemBreadcumb key={key}>
            <Link key={key} href={goTo}>
              {name}
            </Link>
            <Image src={ICONS.ArrowRight} alt='imagem seta direita' />
          </ItemBreadcumb>
        );
      })}
    </ListBreadcumb>
  );
};
