'use server'
import { cookies } from 'next/headers';
export async function fetchProducts() {
    const response = await fetch(`${process.env.DEV_URI}products/getAllProducts`);
    const products = await response.json();
    // console.log(products);

    // useProductStore.getState().getProducts(products);
    return products;
}

export async function fetchCategories() {
    const response = await fetch(`${process.env.DEV_URI}category/getAllCategories`);
    const categories = await response.json();
    // console.log(categories);
    return categories;
}


export async function fetchProductById(_id: string) {
    
    const response = await fetch(`${process.env.DEV_URI}products/getProductById/${_id}`);
    const product = await response.json();
    
    return product;
}