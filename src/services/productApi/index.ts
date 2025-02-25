import { productsData } from "./types";

class Instance {
    getProductList = async (limit: number, skip: number): Promise<productsData> => {
        return await fetch(
            "https://dummyjson.com/products?limit=" + limit + "&skip=" + skip
        ).then((response) => response.json())
    }
    getProductCategory= async (limit: number, skip: number, category: string): Promise<productsData> => {
        return await fetch(
            "https://dummyjson.com/products/category/" + category + "?limit=" + limit + "&skip=" + skip
        ).then((response) => response.json())
    }
    getProductMore= async (): Promise<productsData> => {
        return await fetch(
            "https://dummyjson.com/products/?limit=198"
        ).then((response) => response.json())
    }
    getProductItem = async (page: number): Promise<productsData> => {
        return await fetch(
            "https://dummyjson.com/products/" + page
        ).then()
    }
}

export const ProductApi = new Instance();

export const getApiData = async (limit: number, skip: number) => {
    return await ProductApi.getProductList(limit, skip)
};

export const getApiDataCategory = async (limit: number, skip: number, category: string) => {
    return (await ProductApi.getProductCategory(limit, skip, category))
};

export const getApiDataMore = async () => {
    return (await ProductApi.getProductMore())
};

export const getApiDataProduct = async (page: number) => {
    return await ProductApi.getProductItem(page)
};
