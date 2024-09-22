import Image from "next/image";

import { GridContainer } from "../GridContainer";
import { ItemMenu } from "./itemMenu";

const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Products",
    url: "/",
    hasDropdown: true,
  },
  {
    title: "Resources",
    url: "/",
    hasDropdown: true,
  },
  {
    title: "Pricing",
    url: "/",
  },
];

export function Header() {
  return (
    <header
      className="sticky top-0 w-full h-[80px] z-50 bg-white 
    border-b border-b-gray-100 flex items-center"
    >
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image src="/logo.svg" width={142} height={32} alt="Logo" />
          <nav className="flex items-center gap-8">
            {menuItems.map(({ url, title, hasDropdown }, index) => (
              <ItemMenu
                key={index}
                url={url}
                title={title}
                hasDropdown={hasDropdown}
              />
            ))}
          </nav>
        </div>
        <div>
          <Image src="/avatar.svg" width={40} height={40} alt="woman" />
        </div>
      </GridContainer>
    </header>
  );
}
