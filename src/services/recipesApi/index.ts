import { recipeData, recipesData } from "./types";

class Instance {
    getRecipesList = async (): Promise<recipesData> => {
        return await fetch(
            "https://dummyjson.com/recipes?limit=0"
        ).then((response) => response.json())
    }
    getRecipeItem = async (page: string): Promise<recipeData> => {
        return await fetch(
            "https://dummyjson.com/recipes/" + page
        ).then((response) => response.json())
    }
    getRecipesTag = async (tag: string): Promise<recipesData> => {
        if (tag === '') {
            return await fetch(
                "https://dummyjson.com/recipes?limit=0"
            ).then((response) => response.json())
        } else {
            return await fetch(
                "https://dummyjson.com/recipes/tag/" + tag
            ).then((response) => response.json())
        }
    }
    getRecipesTags = async (): Promise<string[]> => {
        return await fetch(
            "https://dummyjson.com/recipes/tags"
        ).then((response) => response.json())
    }
}

export const RecipesApi = new Instance();

export const getApiRecipesData = async () => {
    return await RecipesApi.getRecipesList()
};

export const getApiDataRecipe = async (page: string) => {
    return await RecipesApi.getRecipeItem(page)
};

export const getApiDataRecipesTag = async (tag: string) => {
    return await RecipesApi.getRecipesTag(tag)
};

export const getApiTags = async () => {
    return await RecipesApi.getRecipesTags()
};
