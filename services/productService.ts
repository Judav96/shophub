export async function getProducts() {
     const response = await fetch(
        "https://dummyjson.com/products?limit=8&select=id,title,price,category,thumbnail,stock"
    );

    const data = await response.json();

    return data.products;
}

export async function getProduct(id:number) {
    const response = await fetch(
        `https://dummyjson.com/products/${id}`
    );

    const data = await response.json();

    return data;
}