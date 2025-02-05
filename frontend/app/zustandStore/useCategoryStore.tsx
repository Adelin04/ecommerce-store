import { create } from "zustand";
import axios from "axios";
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

    setCategories: async (categories: Array<ICategory>) => {
        // const fetchCategories = await axios.get(`${process.env.DEV_URI}category/getAllCategories`);
        set(() => ({ categories: categories }))

        //Set men as the default selected category
        set(() => ({ categorySelected: get().categories.filter((category: any) => category.gender.gender === 'men') }))
    },

    setCategoryClicked: (categoryClicked: string) => {
        localStorage.setItem('gender', categoryClicked)
        set(() => ({ categorySelected: get().categories.filter((category: ICategory) => category?.gender.gender === categoryClicked?.toLowerCase()) }))
    }

}))