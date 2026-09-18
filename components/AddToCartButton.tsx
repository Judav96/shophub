"use client";

import { Product } from "@/types/Product";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-6 border rounded px-4 py-2 hover:bg-gray-100"
    >
      Agregar al carrito
    </button>
  );
}