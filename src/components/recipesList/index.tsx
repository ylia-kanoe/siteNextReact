'use client'

import { recipeData } from "@/services/recipesApi/types"
import { RecipeListItem } from "../recipeListItem"

export function RecipesList({ recipesData }: { recipesData: recipeData[] }) {

    return (
        <>
            <ul className="flex flex-wrap gap-[20px]">{recipesData.map((item) => (
                <RecipeListItem key={item.id} {...item} />
            ))}
            </ul>
        </>
    )
}