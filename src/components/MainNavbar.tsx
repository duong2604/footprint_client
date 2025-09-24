import Image from "next/image";
import { Menu } from "./Menu";
import SearchBar from "./SearchBar";
import ShoppingCartItem from "./ShoppingCartItem";
import { TextAlignJustify } from "lucide-react";

export default function MainNavbar() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center bg-black text-[#fff] h-32 md:h-22">
      <Image
        src={"/assets/Logo.svg"}
        width={200}
        height={200}
        objectFit="cover"
        alt="Logo"
      />
      <Menu />
      <div className="flex justify-between items-center gap-4">
        <TextAlignJustify className="md:hidden hover:text-amber-500 hover:cursor-pointer" />
        <SearchBar />
        <ShoppingCartItem />
      </div>
    </div>
  );
}
