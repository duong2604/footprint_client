import { outfit } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import BannerItem from "./BannerItem";

const components = [
  {
    id: 1,
    title: "WALK WITH ASSURANCE!",
    subtitle: "Best Quality",
    description: "On orders $500",
    bgImage: "/assets/Rectangle_1.png",
  },
  {
    id: 2,
    title: "FASHIONABLY STEPPING AHEAD!",
    subtitle: "Special Edition",
    description:
      "Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Viverra nam libero justo laoreet. Rutrum quisque non tellus orci ac.",
    bgImage: "/assets/Rectangle_2.png",
    button: "shop collections",
  },
  {
    id: 3,
    title: "ONE STYLISH STRIDE AT A TIME!",
    subtitle: "classy collection",
    description:
      "Dignissim sodales ut eu sem integer vitae justo eget magna. Mattis aliquam faucibus purus in massa tempor nec feugiat.",
    bgImage: "/assets/Rectangle_3.png",
    button: "shop collections",
  },
];

export default function GridBanner() {
  return (
    <div
      className={cn(
        outfit.className,
        "w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-5"
      )}
    >
      {components.map((item, index) => (
        <BannerItem key={index} data={item} />
      ))}
    </div>
  );
}
