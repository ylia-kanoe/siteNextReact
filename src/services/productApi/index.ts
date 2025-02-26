import { productData, productsData } from "./types";

class Instance {
    getProductList = async (limit: number, skip: number, nameSort: string, order: string): Promise<productsData> => {
        if (nameSort === '') {
            return await fetch(
                "https://dummyjson.com/products?limit=" + limit + "&skip=" + skip
            ).then((response) => response.json())
        } else {
            return await fetch(
                "https://dummyjson.com/products?limit=" + limit + "&skip=" + skip + '&sortBy=' + nameSort + '&order=' + order
            ).then((response) => response.json())
        }
    }
    getProductCategory = async (category: string): Promise<productsData> => {
        return await fetch(
            "https://dummyjson.com/products/category/" + category + "?limit=0"
        ).then((response) => response.json())
    }
    /** ЗАПРОС 1 ПРОДУКТА */
    getProductItem = async (page: string): Promise<productData> => {
        return await fetch(
            "https://dummyjson.com/products/" + page
        ).then((response) => response.json())
    }
    /** СПИСОК КАТЕГОРИЙ */
    getCategory = async (): Promise<string[]> => {
        return await fetch(
            "https://dummyjson.com/products/category-list"
        ).then((response) => response.json())
    }
    /** СПИСОК КАТЕГОРИЙ */
    getProductsSort = async (nameSort: string, order: string, category: string): Promise<productsData> => {
        if (category === '') {
            return await fetch(
                'https://dummyjson.com/products?sortBy=' + nameSort + '&order=' + order
            ).then((response) => response.json())
        } else {
            return await fetch(
                "https://dummyjson.com/products/category/" + category + '?sortBy=' + nameSort + '&order=' + order
            ).then((response) => response.json())
        }
    }
}

export const ProductApi = new Instance();

export const getApiData = async (limit: number, skip: number, nameSort: string, order: string) => {
    return await ProductApi.getProductList(limit, skip, nameSort, order)
};

export const getApiDataCategory = async (category: string) => {
    if (category === '') {
        return await ProductApi.getProductList(24, 0, '', '')
    } else {
        return (await ProductApi.getProductCategory(category))
    }
};

export const getApiDataProduct = async (page: string) => {
    return await ProductApi.getProductItem(page)
};

export const getApiCategory = async () => {
    return await ProductApi.getCategory()
};

export const getApiProductsSort = async (nameSort: string, order: string, category: string) => {
    return await ProductApi.getProductsSort(nameSort, order, category)
};
