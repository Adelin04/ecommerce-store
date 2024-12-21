import { create } from "zustand";
import { IProduct } from "../interfaces/interfaces";
import axios from "axios";
import { URI } from "../utils/URI";

interface ProductState {
    products: Array<IProduct>,
    filteredProducts: Array<any> | null,
    productById: any | null,
    productByName: any | null,
    categoriesProductAvailable: any | null,
    superCategoriesProductAvailable: any | null,
    sizesProductAvailable: any | null,
    newProductsAdded: [],
    selectedProduct: IProduct | null,
}

// Initialize a default state
const INITIAL_STATE: ProductState = {
    products: [],
    filteredProducts: null,
    productById: null,
    productByName: null,
    categoriesProductAvailable: null,
    superCategoriesProductAvailable: null,
    sizesProductAvailable: null,
    newProductsAdded: [],
    selectedProduct: null,
}

export const useProductStore = create((set: any, get: any) => ({
    ...INITIAL_STATE,
    getProducts: async () => {

        const fetchProducts = await axios.get(`${process.env.DEV_URI}products/getAllProducts`);
        set(() => ({ products: fetchProducts.data }))
    },

    selectProduct: (id: string) => {
        set(() => ({ selectedProduct: get().products.filter((product: IProduct) => product._id === id) }))
    },

    selectedByCategory: (category: any, genderSelected: string) => {
        console.log(category, genderSelected);

        set(() => ({ selectedProducts: get().products.filter((product: any) => product.gender.gender === genderSelected && product.category === category) }))
    },

}))