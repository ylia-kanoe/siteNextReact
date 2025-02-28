'use client'

import { RecipesList } from "@/components/recipesList";
import { Tags } from "@/components/tags";
import { setRecipes } from "@/lib/features/recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getApiRecipesData } from "@/services/recipesApi";
import { useEffect } from "react";

export function Recipes() {
    const recipes = useAppSelector(state => state.recipes.recipes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiRecipesData().then(data => dispatch(setRecipes(data.recipes)));
    }, [dispatch]);

    return (
        <>
            <div className="flex flex-col mt-[50px]">
                <div>
                   <Tags title={'рецепты'}/>
                </div>
                <div className="mt-[50px] mx-auto w-[100%]">
                    <RecipesList recipesData={recipes} />
                </div>

            </div>
        </>
    )
}