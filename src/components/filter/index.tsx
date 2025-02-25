'use client'

import { sortProductsPrice, sortProductsRating } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ChangeEvent, useState } from "react";
import { propsFilter } from "./types";

export function Filter(props: propsFilter) {
    const [category, setCategory] = useState('')
    const products = useAppSelector(state => state.products.products)

    const categoryMass: string[] = ['beauty', 'fragrances', 'furniture', "groceries", "home-decoration", "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches", "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories", "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]
    products.map((item) => !categoryMass.includes(item.category) && categoryMass.push(item.category))

    const dispatch = useAppDispatch()

    function checkAlert(event: ChangeEvent<{ value: string }>) {
        setCategory(event.target.value)
        props.filterCategory(event.target.value)
    }


    return (<>
        <ul>
            <li onClick={() => dispatch(sortProductsPrice('asc'))}>По возрастанию цены</li>
            <li onClick={() => dispatch(sortProductsPrice('desc'))}>По убыванию цены</li>
            <li onClick={() => dispatch(sortProductsRating('desc'))}>По рейтингу</li>
        </ul>

        <form className="max-w-sm mx-auto">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Выберите категорию</label>
            <select value={category} onChange={checkAlert} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {categoryMass.length && categoryMass.map((item, i) => (
                    <option value={item} key={i}>{item}</option>
                ))}
            </select>
        </form>
    </>)
}
