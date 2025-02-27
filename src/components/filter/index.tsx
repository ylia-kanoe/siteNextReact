'use client'

import { setCategorys } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { propsFilter } from "./types";
import { getApiCategory } from "@/services/productApi";

export function Filter(props: propsFilter) {
    const [category, setCategory] = useState('')

    const categorys = useAppSelector(state => state.products.category)
    const dispatch = useAppDispatch()

    function checkAlert(event: ChangeEvent<{ value: string }>) {
        setCategory(event.target.value)
        props.filterCategory(event.target.value)
    }

    useEffect(() => {
        getApiCategory().then(data => dispatch(setCategorys(data)));
    }, [props.limitProduct, props.skipProduct]);

    return (<>
        <ul>
            <li onClick={() => props.sortProduct('discountPercentage', 'asc', category)}>По возрастанию цены</li>
            <li onClick={() => props.sortProduct('discountPercentage', 'desc', category)}>По убыванию цены</li>
            <li onClick={() => props.sortProduct('rating', 'desc', category)}>По рейтингу</li>
            <li onClick={() => props.sortProduct('rating', 'desc', category)}>По наименованию</li>
        </ul>

        <form className="max-w-sm mx-auto">
            <select value={category} onChange={checkAlert} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value=''>Все категории</option>
                {categorys.length && categorys.map((item, i) => (
                    <option value={item} key={i}>{item}</option>
                ))}
            </select>
        </form>
    </>)
}
