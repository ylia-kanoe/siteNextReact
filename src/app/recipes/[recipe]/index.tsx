'use client'

import { RecipeItem } from "@/components/recipeItem"
import { setRecipe } from "@/lib/features/recipes/recipesSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { getApiDataRecipe } from "@/services/recipesApi"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function Recipe() {
    const pathname = usePathname()
    const recipeId = pathname.replace('/recipes/', '')
    const recipe = useAppSelector(state => state.recipes.recipe)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiDataRecipe(recipeId).then((data) => dispatch(setRecipe(data)));
    }, [dispatch]);

    return (
        <>
            {recipe &&
                <>
                <RecipeItem {...recipe} />
                    hello {recipeId} and {recipe.name}
                </>
            }
        </>
    )
}
