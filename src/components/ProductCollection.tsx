import { outfit } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import CollectionTabs from "./CollectionTabs";
import { ViewAllProductSection } from "./ViewAllProductSection";

const component = {
  title: "FRESH PICKS FOR YOU",
  description:
    "Habitant morbi tristique senectus et netus et malesuada. Dolor sed viverra ipsum nunc aliquet bibendum. Magna ac placerat vestibulum lectus mauris ultrices eros in.",
};

export default function ProductCollection() {
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
      <CollectionTabs />
      <ViewAllProductSection />
    </div>
  );
}
