import BoxingDayBanner from "@/components/BoxingDayBanner";
import ProductsView from "@/components/ProductsView";

import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";


export const dynamic = "force-static";
export const revalidate = 60; //revalidate at most 60 seconds

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  console.log(
    crypto.randomUUID().slice(0,5) +
    `>>> Rendered the home page cache with ${products.length} products and ${categories.length}`
  )

  return (
    <div>
    <BoxingDayBanner/>
     <div>
      <ProductsView products={products} categories={categories}/>
     </div>
    </div>
  );
}
