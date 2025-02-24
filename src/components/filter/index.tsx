'use client'

import { sortProductsPrice, sortProductsRating, filterProduct } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export function Filter() {
    const products = useAppSelector(state => state.products.products)

    const categoryMass: string[] = []
    products.map((item) => !categoryMass.includes(item.category) && categoryMass.push(item.category))

    const dispatch = useAppDispatch()

    return (<>
        <ul>
            <li onClick={() => dispatch(sortProductsPrice('asc'))}>По возрастанию цены</li>
            <li onClick={() => dispatch(sortProductsPrice('desc'))}>По убыванию цены</li>
            <li onClick={() => dispatch(sortProductsRating('desc'))}>По рейтингу</li>
        </ul>
        <ul>
            {categoryMass.length && categoryMass.map((item, i) => (

                <li onClick={() => dispatch(filterProduct('furniture'))} key={i} >{item}</li>
            ))}
        </ul >
    </>)
}
