"use client";

import { Product } from "@/types/Product";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow bg-white">

      <Image
        src={product.thumbnail}
        alt={product.title}
        width={250}
        height={180}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="mt-3 text-lg font-bold">
        {product.title}
      </h2>

      <p className="text-gray-600">
        {product.category}
      </p>

      <p className="font-semibold mt-2">
        ${product.price}
      </p>

      <p className="text-sm">
        Stock: {product.stock}
      </p>

      <div className="mt-4 flex gap-2">

        <button
          onClick={() => addToCart(product)}
          className="border rounded px-3 py-2 hover:bg-gray-100"
        >
          Agregar
        </button>

        <Link
          href={`/productos/${product.id}`}
          className="border rounded px-3 py-2 hover:bg-gray-100"
        >
          Ver detalle
        </Link>

      </div>

    </div>
  );
}