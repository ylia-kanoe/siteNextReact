'use client'

import { productData } from "@/services/productApi/types";
import { ProductItem } from "../productItem";

export function ProductList({ productsData }: { productsData: productData[] }) {

    return (
        <>
            <ul className="grid grid-cols-4 gap-4 place-items-center">{productsData.map((item) => (
                <ProductItem key={item.id} {...item} />
            ))}
            </ul>
        </>
    )
}