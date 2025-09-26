import { Button } from "./ui/button";

export const ViewAllProductSection = () => {
  return (
    <div className="w-full pt-24 flex justify-center">
      <Button className="capitalize bg-[#e1680b] text-white text-md md:text-lg rounded-[60px] hover:bg-amber-300 leading-1 p-[25px_100px] hover:text-black font-medium">
        View all products
      </Button>
    </div>
  );
};
