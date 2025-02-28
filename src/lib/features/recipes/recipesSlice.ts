import { recipeData } from '@/services/recipesApi/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    recipes: recipeData[],
    recipe: recipeData,
    tags: string[]
}

const initialState: CounterState = {
    recipes: [],
    recipe: {} as recipeData,
    tags: []
}

export const productSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes: (state, action: PayloadAction<recipeData[]>) => {
            state.recipes = action.payload
        },
        setRecipe: (state, action: PayloadAction<recipeData>) => {
            state.recipe = action.payload
        },
        setRecipeTags: (state, action: PayloadAction<string[]>) => {
            state.tags = action.payload
        }
    },
})

export const { setRecipes, setRecipe, setRecipeTags } = productSlice.actions

export default productSlice.reducer