import React from "react";
import { outfit } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { CategorySlides } from "./CategorySlides";

const component = {
  title: "OUR PRODUCT CATEGORY",
  description:
    "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  categories: [
    {
      image: "/assets/Grid-1.png",
      name: "Sneaker",
    },
    {
      image: "/assets/Grid-2.png",
      name: "Boosts",
    },
    {
      image: "/assets/Grid-3.png",
      name: "Sports",
    },
    {
      image: "/assets/Grid-4.png",
      name: "Loafers",
    },
    {
      image: "/assets/Grid-5.png",
      name: "Formal",
    },
  ],
};

export default function ProductCategory() {
  return (
    <div className="pt-8 sm:pt-12 md:pt-32 px-5">
      <h2 className="capitalize text-xl text-center md:text-[35px] md:leading-[45px] font-medium">
        {component.title}
      </h2>
      <p
        className={cn(
          outfit.variable,
          "capitalize mx-auto text-center text-[12px] md:text-[15px] leading-[27px] md:leading-[28px] pt-3 px-0 pb-0 md:max-w-[45%]"
        )}
      >
        {component.description}
      </p>
      <CategorySlides categories={component.categories} />
    </div>
  );
}
