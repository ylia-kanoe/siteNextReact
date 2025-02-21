'use client'
import { ProductApi } from "@/app/services/productApi";
import { productData } from "@/app/services/productApi/types";
import { useState } from "react";



export function Filter() {
    const [productsFilter, setProductsFilter] = useState<productData[]>([]);

    const getApiData = async (filterName: string) => {
        const data = await ProductApi.getProductListFilter(filterName)
        setProductsFilter(data.products)
    };

    function filterSort(filterName: string) {
        getApiData(filterName);
        console.log(productsFilter)
    }

    return (<>
        <ul>
            <li onClick={() => filterSort("brand")}>По брендам</li>
            <li onClick={() => filterSort("category")}>По категориям</li>
            <li onClick={() => filterSort("price")}>По стоимости</li>
        </ul>
    </>)
}
