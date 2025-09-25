"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { audiowide, outfit } from "@/lib/fonts";

const components = [
  {
    link: "/assets/hero-amber.png",
    heading: "FOR JOURNEY  WITH YOUR HAPPY FEET",
    subHeading: "Sneakers 2025 Limited Edition",
    text: "Quis varius quam quisque id diam. Tellus mauris a diam maecenas sed enim ut sem viverra.Massa enim nec dui nunc mattis.",
  },
  {
    link: "/assets/hero-brown.png",
    heading: "Walk the talk with our shoes",
    subHeading: "Sneakers For All",
    text: "Sed elementum tempus egestas sed sed risus. Elit pellentesque habitant morbi tristique senectus et netus et.",
  },
  {
    link: "/assets/hero-pink.png",
    heading: "Put your best foot forward with us",
    subHeading: "Curated Sneakers",
    text: "Mus mauris vitae ultricies leo. Massa enim nec dui nunc mattis enim ut tellus elementum.",
  },
];

export function HeroBanner() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      active: true,
      stopOnFocusIn: false,
      stopOnInteraction: false,
      stopOnLastSnap: false,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {components.map((item, index) => (
          <CarouselItem
            key={index}
            className="relative max-h-[35vh] md:max-h-[75vh]"
          >
            <AspectRatio
              ratio={1 / 1}
              className="bg-muted overflow-hidden p-0 w-full h-72 md:h-[75vh]"
            >
              <Image
                src={item.link}
                alt={item.subHeading}
                fill
                className="object-cover"
              />
            </AspectRatio>
            <div className="absolute inset-0 p-5 bg-white/35 max-h-[35vh] md:bg-transparent md:px-0 md:top-50 md:left-50 md:max-w-[50%] flex flex-col items-center md:items-start">
              <h3
                className={cn(
                  "text-sm font-medium md:text-2xl text-[#] tracking-wider leading-6",
                  outfit.variable
                )}
              >
                {item.subHeading}
              </h3>
              <h1
                className={cn(
                  "leading-12 md:leading-24 capitalize",
                  audiowide.variable,
                  "mt-2.5 text-2xl md:text-[55px] tracking-wider font-bold text-center md:text-left"
                )}
              >
                {item.heading}
              </h1>
              <p
                className={cn(
                  "capitalize text-shadow-xs text-sm text-center my-5 md:text-left md:text-[16px] md:max-w-2/3 font-light md:font-medium leading-6",
                  audiowide.variable
                )}
              >
                {item.text}
              </p>
              <Button
                variant={"default"}
                className={cn(
                  "rounded-full text-white bg-[#e26d0c] capitalize px-8 text-sm md:text-[16px] tracking-wider py-6",
                  audiowide.variable,
                  "hover:bg-[#f8bd1b] hover:text-white"
                )}
              >
                Shop Special Edition
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
