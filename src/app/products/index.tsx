'use client'

import { useEffect, useRef, useState } from 'react'
import { Filter } from "../../components/filter";
import { ProductList } from "../../components/productList";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getApiData, getApiDataCategory, getApiProductsSort } from '@/services/productApi';
import { setProducts } from '@/lib/features/product/productSlice';
import { Pagination } from '@/components/pagination';
import { Button } from '@/components/button';

export function Product() {
    const [limitProduct, setLimitProduct] = useState(24)
    const [skipProduct, setSkipProduct] = useState(0)
    const [filterCat, setFilterCat] = useState(false)
    const [filterSort, setFilterSort] = useState('')
    const [filterOrder, setFilterOrder] = useState('')

    const initialized = useRef(false)
    if (!initialized.current) {
        initialized.current = true
    }

    const products = useAppSelector(state => state.products.products)

    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiData(limitProduct, skipProduct, filterSort, filterOrder).then(data => dispatch(setProducts(data.products)));
    }, [limitProduct, skipProduct, dispatch]);

    function nextPage(skip: number) {
        setSkipProduct(skip)
    }

    function forwardPage() {
        setSkipProduct(skipProduct + limitProduct)
    }

    function filterCategory(category: string) {
        getApiDataCategory(category).then(data => { dispatch(setProducts(data.products)) });
        if (category === '') {
            setFilterCat(false)
        } else {
            setFilterCat(true)
        }
    }

    function sortProduct(nameSort: string, order: string, category: string) {
        getApiProductsSort(nameSort, order, category).then(data => { dispatch(setProducts(data.products)) })
        setFilterSort(nameSort)
        setFilterOrder(order)
    }

    return (
        <>
            <Filter filterCategory={filterCategory} limitProduct={limitProduct} skipProduct={skipProduct} sortProduct={sortProduct} />
            <div className='flex flex-col items-center'>
                <ProductList productsData={products} />
                {!filterCat &&
                    <>
                        <Button onclick={() => setLimitProduct(limitProduct + 24)} title='Показать еще' />
                        <Pagination limitProd={limitProduct} skipProd={skipProduct} nextPage={nextPage} forwardPage={forwardPage} />
                    </>}

            </div>
        </>
    )
}