import { create } from "zustand";
import axios from "axios";
import { URI } from "../utils/URI";
import { ICategory } from "../interfaces/interfaces";

interface CategoryState {
    categories: Array<ICategory>,
    categorySelected: ICategory | null,
}

// Initialize a default state
const INITIAL_STATE: CategoryState = {
    categories: [],
    categorySelected: null
}


export const useCategoryStore = create((set: any, get: any) => ({
    categories: INITIAL_STATE.categories,

    getCategories: async () => {
        const fetchCategories = await axios.get(`${URI}/category/getAllCategories`);

        set(() => ({ categories: fetchCategories.data }))

        //Set men as the default selected category
        set(() => ({ categorySelected: get().categories.filter((category: any) => category.gender.gender === 'men') }))
        console.log(get().categorySelected);
        
    },

    setCategoryClicked: (categoryClicked: any) => {
        set(() => ({ categorySelected: get().categories.filter((category: any) => category.gender.gender === categoryClicked.toLowerCase()) }))
    }

}))