import Link from "next/link";
import { Input } from "@/components/ui/input";
import { SearchIcon, Twitter, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { outfit } from "@/lib/fonts";

const shopItems = [
  "Sneakers",
  "Moccasin",
  "Hiking boot",
  "Oxford shoe",
  "Wellington boot",
];

const customerItems = [
  "Contact Us",
  "Sign In",
  "Create Account",
  "Shopping",
  "Checkout",
];

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 place-items-start py-10 lg:py-24 px-10 gap-10">
        <div className="flex flex-col items-start gap-4">
          <img
            src={"/assets/Logo.svg"}
            alt="Logo"
            className="md:aspect-[249/66] min-w-[249px] aspect-auto"
          />
          <p className="text-sm lg:text-md">
            1245, North Western Street Europia. Lumbio
          </p>
          <p className="text-sm lg:text-md">
            Monday to Friday from 09:00 to 17:00. Call Us+31 (0) 123 456 789
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-md md:text-2xl">Shop</h5>
          {shopItems.map((item, index) => {
            return (
              <Link
                href={"#"}
                key={index}
                className="hidden lg:block hover:text-amber-500"
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-md md:text-2xl">Customer</h5>
          {customerItems.map((item, index) => {
            return (
              <Link
                href={"#"}
                key={index}
                className="hidden lg:block hover:text-amber-500"
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h5 className="text-amber-600 text-xl">
            Sign up to be the first to know about new collections.
          </h5>
          <SearchInput />
          <ListIcon />
        </div>
      </div>
      <hr className="text-white" />

      <div className="min-h-12">
        <p
          className={cn(
            outfit.className,
            "text-md lg:text-md text-center md:text-start sm:px-5 sm:py-4"
          )}
        >
          All Right Reserved © 2025
        </p>
      </div>
    </div>
  );
}

const SearchInput = () => {
  return (
    <div className="relative  max-w-[400px]">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground " />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-9 placeholder:text-sm md:placeholder:text-lg text-start"
      />
    </div>
  );
};

const ListIcon = () => {
  return (
    <div className="flex justify-start items-center gap-3">
      <Twitter className="hover:cursor-pointer" />
      <Facebook className="hover:cursor-pointer" />
      <Instagram className="hover:cursor-pointer" />
    </div>
  );
};
