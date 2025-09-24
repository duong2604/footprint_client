import { Twitter, Facebook, Instagram, CircleUserRound } from "lucide-react";
import { Button } from "./ui/button";

export default function TopNavbar() {
  return (
    <div className="hidden bg-[#486A93] h-16 text-[#fff] md:flex md:items-center md:justify-between md:px-5">
      <div className="flex justify-center items-center gap-3">
        <Twitter className="hover:cursor-pointer" />
        <Facebook className="hover:cursor-pointer" />
        <Instagram className="hover:cursor-pointer" />
      </div>
      <div>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent hover:text-yellow-500 hover:cursor-pointer text-md"
        >
          <CircleUserRound /> Sign in
        </Button>
      </div>
    </div>
  );
}
