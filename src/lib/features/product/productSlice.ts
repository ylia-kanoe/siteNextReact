import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { productData } from "../../../services/productApi/types"

export interface CounterState {
    products: productData[]
}

const initialState: CounterState = {
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<productData[]>) => {
            state.products = action.payload
        },
        sortProductsPrice: (state, action: PayloadAction<'asc' | 'desc'>) => {
            state.products = state.products.sort((a, b) => action.payload === "desc" ? b.discountPercentage - a.discountPercentage : a.discountPercentage - b.discountPercentage)
        },
        sortProductsRating: (state, action: PayloadAction<'asc' | 'desc'>) => {
            state.products = state.products.sort((a, b) => action.payload === "desc" ? b.rating - a.rating : a.rating - b.rating)
        },
        filterProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((item) => item.category == action.payload)
        }
    },
})

export const { setProducts, sortProductsPrice, sortProductsRating, filterProduct } = productSlice.actions

export default productSlice.reducer