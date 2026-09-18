This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## Desiciones - parcial 1

Intrucciones para acceder a la vista del carrito, es hacer click en el boton en la parte superior derecha.

Se decidio rediseñar la interfaz para el cartContext para cumplir el nuevo requermiento del carrito, puesto que antes solo era un listado de productos, sin tener en cuenta el tipo ni la cantidad, aqui la nueva interfaz propuesta:

interface CartItem {
    product: Product;
    quantity: number;
}

Y otra interfaz donde se define que el cart es una lista de CartItems

Gracias a este cambio es posible almacenar tanto la información del producto como la cantidad seleccionada, permitiendo implementar funcionalidades como aumentar o disminuir unidades, eliminar un producto específico o vaciar completamente el carrito.

Para calcular el valor total del carrito se implemento la función getTotal() dentro del CartContext.
Esta funcion recorre todos los elementos del carrito y, para cada producto, multiplica su precio por la cantidad almacenada en el CartItem. Finalmente, suma todos los subtotales para obtener el valor total de la compra. Se decidio no almacenar el total como un estado independiente, sino calcularlo cada vez que se necesita. De esta forma se evita mantener información duplicada que podría quedar desactualizada cuando cambia la cantidad de un producto o se elimina un elemento del carrito. Así, el total siempre refleja el estado actual del carrito y se mantiene sincronizado con la información almacenada en el CartContext.