'use client'

import { setCategorys } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { propsFilter } from "./types";
import { getApiCategory } from "@/services/productApi";

export function Filter(props: propsFilter) {
    const [categoryActive, setCategoryActive] = useState('')
    const [filterActive, setFilterActive] = useState('')

    const categorys = useAppSelector(state => state.products.category)
    const dispatch = useAppDispatch()

    function changeSort(value: string) {
        setFilterActive('')
        setCategoryActive(value)
        props.filterCategory(value)
    }

    function changeFilter(filterActiveCheck: string, nameSort: string, order: string, category: string) {
        if (filterActiveCheck === '') {
            setCategoryActive(filterActiveCheck)
        }
        props.sortProduct(nameSort, order, category)
        setFilterActive(filterActiveCheck)
    }

    useEffect(() => {
        getApiCategory().then(data => dispatch(setCategorys(data)));
    }, [props.limitProduct, props.skipProduct]);

    return (<>
        <div>
            <ul className="flex gap-[10px] justify-end my-[20px] mr-[10px]">
                <li className="group relative cursor-pointer border p-[10px]">{!filterActive ? 'По умолчанию' : filterActive}
                    <ul className="absolute min-w-max bg-white border flex flex-col right-0 top-[45px] hidden group-hover:flex">
                        <li className="px-[10px] pt-[5px]" onClick={() => changeFilter('', '', '', '')}>По умолчанию</li>
                        <li className="px-[10px] pt-[5px]" onClick={() => changeFilter('По возрастанию цены', 'discountPercentage', 'asc', categoryActive)}>По возрастанию цены</li>
                        <li className="px-[10px] pt-[5px]" onClick={() => changeFilter('По убыванию цены', 'discountPercentage', 'desc', categoryActive)}>По убыванию цены</li>
                        <li className="px-[10px] pt-[5px] pb-[5px]" onClick={() => changeFilter('По рейтингу', 'rating', 'desc', categoryActive)}>По рейтингу</li>
                    </ul>
                </li>
                <li className="group relative cursor-pointer border p-[10px]">{!categoryActive ? 'Все категории' : categoryActive}
                    <ul className="min-w-max absolute border sm:h-[320px] bg-white flex flex-col flex-wrap right-0 top-[45px] hidden group-hover:flex">
                        <li className="px-[10px] pt-[5px]" onClick={() => changeSort('')}>Все категории</li>
                        {categorys.length && categorys.map((item, i) => (
                            <li className="px-[10px] pt-[5px]" key={i} onClick={() => changeSort(item)}>{item}</li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div >
    </>)
}
