import { getProduct } from "@/services/productService";
import { AddToCartButton } from "@/components/AddToCartButton";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(Number(id));

  return (
    <main className="max-w-4xl mx-auto p-8">

      <Link
        href="/"
        className="text-blue-600 hover:underline"
      >
        ← Volver al catálogo
      </Link>

      <div className="mt-6 border rounded-lg p-6 bg-white shadow">

        <Image
          src={product.thumbnail}
          alt={product.title}
          width={350}
          height={250}
          className="rounded"
        />

        <h1 className="text-3xl font-bold mt-4">
          {product.title}
        </h1>

        <p className="mt-2">
          Categoría: {product.category}
        </p>

        <p className="mt-2 font-semibold">
          ${product.price}
        </p>

        <p className="mt-2">
          Stock: {product.stock}
        </p>

        <p className="mt-4">
          {product.description}
        </p>

        <AddToCartButton product={product} />

      </div>

    </main>
  );
}