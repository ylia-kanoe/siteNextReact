import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { productData } from "../../../services/productApi/types"

export interface CounterState {
    products: productData[],
    productsMore: productData[],
    categoryProducts: productData[]
}

const initialState: CounterState = {
    products: [],
    productsMore: [],
    categoryProducts: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsCategory: (state, action: PayloadAction<productData[]>) => {
            state.categoryProducts = action.payload
        },
        setProducts: (state, action: PayloadAction<productData[]>) => {
            state.products = action.payload
        },
        setProductsMore: (state, action: PayloadAction<productData[]>) => {
            state.productsMore = action.payload
        },
        sortProductsPrice: (state, action: PayloadAction<'asc' | 'desc'>) => {
            state.products = state.productsMore.sort((a, b) => action.payload === "desc" ? b.discountPercentage - a.discountPercentage : a.discountPercentage - b.discountPercentage)
        },
        sortProductsRating: (state, action: PayloadAction<'asc' | 'desc'>) => {
            state.products = state.productsMore.sort((a, b) => action.payload === "desc" ? b.rating - a.rating : a.rating - b.rating)
        },
        filterProduct: (state, action: PayloadAction<string>) => {
            state.products = state.productsMore.filter((item) => item.category == action.payload)
        }
    },
})

export const { setProductsCategory, setProductsMore, setProducts, sortProductsPrice, sortProductsRating, filterProduct } = productSlice.actions

export default productSlice.reducer