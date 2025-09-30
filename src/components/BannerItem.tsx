import { audiowide } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

interface BannerItemProps {
  data: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    bgImage: string;
    button?: string;
  };
}

export default function BannerItem({ data }: BannerItemProps) {
  return (
    <div
      className={cn(
        `${
          data.id === 3 && "lg:col-span-2"
        } min-h-[400px] md:min-h-[500px] pt-12`
      )}
      style={{
        backgroundImage: `url(${data.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-5 flex flex-col items-center w-full md:items-start md:max-w-[68%] md:p-[2rem]">
        <p className="mb-4 text-[#FBBF18] tracking-[10px] uppercase font-[500] text-xs md:text-xl">
          {data.subtitle}
        </p>
        <h3 className="leading-[58px] mt-0 mb-[14px] text-center break-after-right text-[#fff] text-xl md:text-2xl lg:text-[35px] md:text-left">
          {data.title}
        </h3>
        <p className="text-center md:text-left text-[#fff] text-xs text-md lg:text-[16px] leading-7 mt-4">
          {data.description}
        </p>
        {data.button && (
          <Link href={"#"}>
            <Button
              className={cn(
                audiowide.className,
                "rounded-full mt-8 min-w-28 min-h-12 px-[50px] font-medium bg-amber-600 text-white hover:bg-amber-300 hover:text-black capitalize leading-normal tracking-wider"
              )}
            >
              {data.button}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
