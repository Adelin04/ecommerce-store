import { create } from "zustand";
import axios from "axios";
import { IColor } from "../interfaces/interfaces";

interface ColorState {
    colors: Array<IColor>,
    colorSelected: IColor | null,
}

// Initialize a default state
const INITIAL_STATE: ColorState = {
    colors: [],
    colorSelected: null
}


export const useColorStore = create((set: any, get: any) => ({
    ...INITIAL_STATE,

    getColors: async () => {
        const fetchColors = await axios.get(`${process.env.DEV_URI}color/getAllColors`, { withCredentials: true });

        set(() => ({ colors: fetchColors.data }))
    },

}))