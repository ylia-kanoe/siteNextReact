import { productsData } from "./types";

class Instance {
    getProductList = async (limit: number, skip: number) : Promise<productsData>  => {
        return await fetch(
            "https://dummyjson.com/products?limit=" + limit + "&skip=" + skip
        ).then((response) => response.json())
    }
    getProductListFilter = async (filterName: string) : Promise<productsData>  => {
        return await fetch(
            "https://dummyjson.com/products?sortBy=" + filterName
        ).then((response) => response.json())
    }
}

export const ProductApi = new Instance();