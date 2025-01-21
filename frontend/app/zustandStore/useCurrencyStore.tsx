import { create } from "zustand";
import axios from "axios";
import { ICurrency } from "../interfaces/interfaces";

interface CurrencyState {
    currencies: Array<ICurrency>,
    currencySelected: ICurrency | null,
}

// Initialize a default state
const INITIAL_STATE: CurrencyState = {
    currencies: [],
    currencySelected: null
}


export const useCurrencyStore = create((set: any, get: any) => ({
    ...INITIAL_STATE,

    getCurrencies: async () => {
        const fetchCurrency = await axios.get(`${process.env.DEV_URI}currency/getAllCurrencies`, { withCredentials: true });

        set(() => ({ currency: fetchCurrency.data }))
    },

}))