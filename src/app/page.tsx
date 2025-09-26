import { HeroBanner } from "@/components/HeroBanner";
import ProductCategory from "@/components/ProductCategory";
import ProductCollection from "@/components/ProductCollection";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ProductCategory />
      <ProductCollection />
    </main>
  );
}
