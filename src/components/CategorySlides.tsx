"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface CategorySlidesProps {
  categories: {
    image: string;
    name: string;
  }[];
}

export function CategorySlides({ categories }: CategorySlidesProps) {
  const plugin = useRef(
    Autoplay({
      delay: 2000,
    })
  );

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full pt-12"
    >
      <CarouselContent className="-ml-1 justify-around">
        {categories.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/5 relative flex flex-col items-center"
          >
            <Link href={"#"}>
              <Image
                src={item.image}
                alt={item.name}
                width={250}
                height={350}
                className="object-cover aspect-auto"
              />
            </Link>
            <p className="absolute bottom-15 left-0 right-0 text-center text-white font-medium text-2xl">
              {item.name}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
