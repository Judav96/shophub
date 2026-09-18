
"use client";

import { useCart } from "@/context/CartContext";


export default function CartPage() {
    
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getTotal
    } = useCart();

    return (

        <main className="max-w-5xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">
                Carrito de Compras
            </h1>
            {
                cart.length === 0 &&
                <p>No hay productos en el carrito.</p>
            }
            {
            cart.map(item => (
                <div key={item.product.id} className="border rounded p-4 mb-4 flex justify-between items-center">
                    <div> <h2 className="font-bold">{item.product.title} </h2>
                    <p> ${item.product.price}</p> </div>
                <div className="flex items-center gap-3">
            <button onClick={() => decreaseQuantity(item.product.id)}> quitar productos </button>
                <span> {item.quantity} </span>
                <button onClick={() => increaseQuantity(item.product.id)} > Sumar productos </button>
                <button onClick={() => removeFromCart(item.product.id)} className="text-red-600"> Eliminar </button>
                    </div>
                    </div>
                ))
            }
            <h2 className="text-2xl font-bold mt-8"> Total: ${getTotal()} </h2>
            <button onClick={clearCart} className="mt-4 border rounded px-4 py-2"> Vaciar carrito </button>
     
            
        </main>

    );


}

