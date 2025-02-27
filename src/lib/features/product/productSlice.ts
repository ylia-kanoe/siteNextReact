import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { productData } from "../../../services/productApi/types"

export interface CounterState {
    category: string[],
    product: productData,
    products: productData[]
}

const initialState: CounterState = {
    category: [],
    product: {} as productData,
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<productData[]>) => {
            state.products = action.payload
        },
        setCategorys: (state, action: PayloadAction<string[]>) => {
            state.category = action.payload
        },
        setProduct: (state, action: PayloadAction<productData>) => {
            state.product = action.payload
        }
    },
})

export const {  setProducts, setCategorys, setProduct } = productSlice.actions

export default productSlice.reducer