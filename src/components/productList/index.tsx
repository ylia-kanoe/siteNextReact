'use client'

import { productData } from "@/services/productApi/types";
import { ProductListItem } from "../productListItem";

export function ProductList({ productsData }: { productsData: productData[] }) {

    return (
        <>
            <ul className="grid grid-cols-4 gap-4 place-items-center">{productsData.map((item) => (
                <ProductListItem key={item.id} {...item} />
            ))}
            </ul>
        </>
    )
}