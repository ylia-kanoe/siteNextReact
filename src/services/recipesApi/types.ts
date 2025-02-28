export type recipeData = {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: 166,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[]
}

export type recipesData = {
    recipes: recipeData[],
    total: number,
    skip: number,
    limit: number
}
