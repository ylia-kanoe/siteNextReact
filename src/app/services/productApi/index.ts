import { productsData } from "./types";

class Instance {
    getProductList = async (num: number) : Promise<productsData>  => {
        return await fetch(
            "https://dummyjson.com/products?limit=" + num
        ).then((response) => response.json())
    }
    getProductListFilter = async (filterName: string) : Promise<productsData>  => {
        return await fetch(
            "https://dummyjson.com/products?sortBy=" + filterName
        ).then((response) => response.json())
    }
}

export const ProductApi = new Instance();