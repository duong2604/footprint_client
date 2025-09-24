"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref?.current?.focus();
  };
  return (
    <div className="relative">
      <Input
        ref={ref}
        type="text"
        className="bg-gray-600 max-w-[200px] rounded-full w-full focus:caret-white focus:text-[#fff] resize"
      />
      <Button
        type="submit"
        className="absolute right-0 top-0 bg-amber-500 rounded-full"
        onClick={handleClick}
      >
        <Search />
      </Button>
    </div>
  );
}
