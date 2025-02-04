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
    selectedProducts: Array<IProduct> | null,
    loading: boolean
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
    selectedProducts: null,
    loading: false
}

export const useProductStore = create((set: any, get: any) => ({
    ...INITIAL_STATE,

    createNewProduct: async (product: any) => {
        set(() => ({ loading: true }));
        const response = await axios.post(`${process.env.DEV_URI}products/createProduct`, product, { withCredentials: true });

        set(() => ({ newProductsAdded: [...get().newProductsAdded, response.data] }))
        set(() => ({ loading: false }));
        return response.data
    },

    setProducts: async (products: Array<IProduct>) => {

        // const fetchProducts = await axios.get(`${process.env.DEV_URI}products/getAllProducts`);
        set(() => ({ products: products }))
    },

    setProductById: async (product:IProduct) => {

        // const fetchProduct = await axios.get(`${process.env.DEV_URI}products/setProductById/${_id}`);
        console.log();

        set(() => ({ productById: product }))
    },

    selectProduct: (id: string) => {
        set(() => ({ selectedProduct: get().products.filter((product: IProduct) => product._id === id)[0] }))
    },

    selectedByCategory: (category: any, genderSelected: string) => {
console.log(category, genderSelected);

        set(() => ({ selectedProducts: get().products.filter((product: any) => product.gender.gender === genderSelected && product.category === category) }))
    },

    resetSelectedProducts: () => {
        set(() => ({ selectedProducts: null }))
    },

    updateProduct: async (product: any) => {        
        set(() => ({ loading: true }));
        const response = await axios.put(`${process.env.DEV_URI}products/updateProduct/${product._id}`, product, { withCredentials: true });
        set(() => ({ loading: false }));
        return response.data
    },

}))