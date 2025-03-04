'use server'

export async function fetchProducts() {
    const response = await fetch(`$${process.env.PRODUCTION_URI}products/getAllProducts`);
    const products = await response.json();

    return products;
}

export async function fetchCategories() {
    const response = await fetch(`${process.env.PRODUCTION_URI}category/getAllCategories`);
    console.log(response);
    
    const categories = await response.json();

    return categories;
}


export async function fetchProductById(_id: string) {

    const response = await fetch(`${process.env.PRODUCTION_URI}products/getProductById/${_id}`);
    const product = await response.json();

    return product;
}