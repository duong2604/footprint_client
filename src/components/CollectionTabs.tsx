import { cn } from "@/lib/utils";
import React from "react";
import ProductCardCollection from "./ProductCardCollection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const tabs = ["Shop All", "Men", "Womens"];

const products = [
  {
    id: "1",
    name: "Lace Jogger For Mens",
    image: "/assets/shoe01.png",
    price: 1000,
    oldPrice: 2000,
    rating: 5,
  },
  {
    id: "2",
    name: "Lace Jogger For Mens",
    image: "/assets/shoe07.png",
    price: 1000,
    oldPrice: 2000,
    rating: 5,
  },
  {
    id: "3",
    name: "Lace Jogger For Mens",
    image: "/assets/shoe01.png",
    price: 1000,
    oldPrice: 2000,
    rating: 5,
  },
  {
    id: "4",
    name: "Lace Jogger For Mens",
    image: "/assets/shoe02.png",
    price: 1000,
    oldPrice: 2000,
    rating: 5,
  },
  {
    id: "5",
    name: "Lace Jogger For Mens",
    image: "/assets/shoe03.png",
    price: 1000,
    oldPrice: 2000,
    rating: 5,
  },
  {
    id: "6",
    name: "Lace Jogger For Mens",
    image: "/assets/shoe04.png",
    price: 1000,
    oldPrice: 2000,
    rating: 5,
  },
  {
    id: "7",
    name: "Lace Jogger For Mens",
    image: "/assets/shoe05.png",
    price: 1000,
    oldPrice: 2000,
    rating: 5,
  },
  {
    id: "8",
    name: "Lace Jogger For Mens",
    image: "/assets/shoe09.png",
    price: 1000,
    oldPrice: 2000,
    rating: 5,
  },
];

export default function CollectionTabs() {
  return (
    <Tabs
      defaultValue={tabs[0]}
      className="items-center md:mt-[55px] bg-background"
    >
      <TabsList className="bg-background gap-10">
        {tabs.map((item, index) => {
          return (
            <TabsTrigger
              key={index}
              value={item}
              className={cn(
                "md:text-2xl md:leading-9",
                "data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-amber-600",
                "focus-visible:border-0 focus-visible:outline-0",
                "hover:text-amber-600"
              )}
            >
              {item}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {tabs.map((t, index) => {
        return (
          <TabsContent
            key={index}
            value={tabs[index]}
            className="w-full h-full md:pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-6"
          >
            {products.map((p, index) => (
              <React.Fragment key={index}>
                <ProductCardCollection data={p} />
              </React.Fragment>
            ))}
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
