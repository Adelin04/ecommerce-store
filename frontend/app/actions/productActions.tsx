'use server'

import { URI } from "../utils/URI";

export async function fetchProducts() {
    const response = await fetch(`${URI}products/getAllProducts`);
    const products = await response.json();
    
    return products;
}

export async function fetchCategories() {
    const response = await fetch(`${URI}category/getAllCategories`);
    const categories = await response.json();

    return categories;
}


export async function fetchProductById(_id: string) {

    const response = await fetch(`${URI}products/getProductById/${_id}`);
    const product = await response.json();

    return product;
}