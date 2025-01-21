import { create } from "zustand";
import axios from "axios";
import { IGender } from "../interfaces/interfaces";

interface ColorState {
    genders: Array<IGender>,
    gendersSelected: IGender | null,
}

// Initialize a default state
const INITIAL_STATE: ColorState = {
    genders: [],
    gendersSelected: null
}


export const useGenderStore = create((set: any, get: any) => ({
    ...INITIAL_STATE,

    getGenders: async () => {
        const fetchGenders = await axios.get(`${process.env.DEV_URI}gender/getAllGenders`, { withCredentials: true });
        console.log(fetchGenders.data);
        
        set(() => ({ genders: fetchGenders.data }))
    },

}))