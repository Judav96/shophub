
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/services/productService";
import { Product } from "@/types/Product";

export default async function Home() {

  const products = await getProducts();
  console.log(products);


  return (
    <main className="p-6">
  <h1 className="text-3xl font-bold mb-6">ShopHub</h1>

  <div className="grid grid-cols-2 gap-4">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}
  </div>
</main>
  );


}



