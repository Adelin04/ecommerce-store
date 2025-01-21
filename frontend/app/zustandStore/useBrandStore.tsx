import { create } from "zustand";
import axios from "axios";
import { IBrand } from "../interfaces/interfaces";

interface ColorState {
    brands: Array<IBrand>,
    brandSelected: IBrand | null,
}

// Initialize a default state
const INITIAL_STATE: ColorState = {
    brands: [],
    brandSelected: null
}


export const useBrandStore = create((set: any, get: any) => ({
    ...INITIAL_STATE,

    getBrands: async () => {
        const fetchBrands = await axios.get(`${process.env.DEV_URI}brand/getAllBrands`, { withCredentials: true });

        set(() => ({ brands: fetchBrands.data }))
    },

}))