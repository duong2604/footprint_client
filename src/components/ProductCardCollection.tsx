"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";

interface ProductCardCollectionProps {
  data: {
    id: string;
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    rating: number;
  };
}

const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
    minimumSignificantDigits: 2,
  }).format(number);
};

export default function ProductCardCollection({
  data,
}: ProductCardCollectionProps) {
  // You logic here
  const handleAddToCart = () => {};

  return (
    <Card className="w-full max-w-sm shadow-none p-0 gap-0 hover:cursor-pointer">
      <CardContent className="overflow-hidden relative aspect-square p-0 hover:text-amber-500 group">
        <Link href={"#"}>
          <img
            src={data.image}
            alt=""
            className="object-cover w-full aspect-square"
          />
        </Link>
        <Button className="absolute w-6 h-6 bg-black border-none rounded-[60%] top-2 right-3 text-white opacity-0 translate-x-4 transition-all duration-300 ease-in group-hover:opacity-100 group-hover:translate-x-0 hover:text-amber-500">
          <Heart />
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 px-0 pt-3">
        <div className="font-medium text-md md:text-xl px-3 hover:text-amber-500">
          {data.name}
        </div>
        <div className="px-3 text-sm sm:text-md">
          <span className="font-medium">{formatCurrency(data.price)}</span>{" "}
          <del className="ml-3">{formatCurrency(data.oldPrice) || <></>}</del>
        </div>
        <div className="flex items-center px-2 w-full gap-2">
          <Rating value={data.rating}>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton key={index} className="text-yellow-400" />
            ))}
          </Rating>
          <small>(121)</small>
        </div>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-black text-white text-md hover:text-amber-500 "
        >
          <ShoppingCart /> Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
