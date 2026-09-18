"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { cart } = useCart();

  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">
            ShopHub
          </h1>
        </Link>

        <div className="text-lg font-semibold">
          🛒 {cart.length}
        </div>
      </div>
    </header>
  );
}