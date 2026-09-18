
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/Product";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    getTotal: () => number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(product: Product) {
        setCart((prev) => {
            const exists = prev.find(
                item => item.product.id === product.id
            );
            if (exists) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [
                ...prev,
                {
                    product,
                    quantity: 1
                }
            ]
        });
    }
    function removeFromCart(id: number) {
        setCart(prev =>
            prev.filter(item => item.product.id !== id)
        );
    }
    function clearCart() {
        setCart([]);
    }
    function increaseQuantity(id: number) {
        setCart(prev =>
            prev.map(item =>
                item.product.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    }

    function decreaseQuantity(id: number) {
        setCart(prev =>
            prev.flatMap(item => {
                if (item.product.id !== id)
                    return item;
                if (item.quantity === 1)
                    return [];
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            })
        );

    }

    function getTotal() {
        return cart.reduce(
            (acc, item) =>
                acc + item.product.price * item.quantity,
            0
        );
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseQuantity,
                decreaseQuantity,
                getTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );

}

export function useCart() {
    const context = useContext(CartContext);
    if (!context)
        throw new Error("useCart debe usarse dentro del CartProvider");
    return context;
}
