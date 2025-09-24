import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function ShoppingCartItem() {
  return (
    <Button type="button" className="rounded-full bg-amber-500 relative">
      <ShoppingCart />
      <Badge
        className="hidden md:block m-h-5 m-w-5 rounded-full px-1 font-mono tabular-nums bg-red-500 text-white text-sm absolute -top-2 -right-6"
        variant="outline"
      >
        20+
      </Badge>
    </Button>
  );
}
