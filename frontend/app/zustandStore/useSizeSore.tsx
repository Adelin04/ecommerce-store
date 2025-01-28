import { create } from "zustand";
import axios from "axios";
import {  ISize } from "../interfaces/interfaces";

interface SizeState {
    sizes: Array<ISize>,
    sizeSelected: ISize | null,
}

// Initialize a default state
const INITIAL_STATE: SizeState = {
    sizes: [],
    sizeSelected: null
}


export const useSizeStore = create((set: any, get: any) => ({
    ...INITIAL_STATE,

    getSizes: async () => {
        const fetchSizes = await axios.get(`${process.env.DEV_URI}size/getAllSizes`, { withCredentials: true });

        set(() => ({ brands: fetchSizes.data }))
    },

}))