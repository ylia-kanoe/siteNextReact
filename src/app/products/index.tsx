'use client'

import { useEffect, useRef, useState } from 'react'
import { Filter } from "../../components/filter";
import { ProductList } from "../../components/productList";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getApiData, getApiDataCategory, getApiDataMore } from '@/services/productApi';
import { setProducts, setProductsMore } from '@/lib/features/product/productSlice';
import { Pagination } from '@/components/pagination';
import { Button } from '@/components/button';

export function Product() {
    const [limitProduct, setLimitProduct] = useState(24)
    const [skipProduct, setSkipProduct] = useState(0)
    /* const [filterCat, setFilterCat] = useState(false)*/

    /*const data = await ProductApi.getProductList(24, 0)
    const products = data.products*/

    const initialized = useRef(false)
    if (!initialized.current) {
        initialized.current = true
    }

    const products = useAppSelector(state => state.products.products)

    /* const productsCategory = useAppSelector(state => state.products.categoryProducts)*/
    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiData(limitProduct, skipProduct).then(data => dispatch(setProducts(data.products)));
        getApiDataMore().then(data => dispatch(setProductsMore(data.products)));
    }, [limitProduct, skipProduct]);

    function nextPage(skip: number) {
        setSkipProduct(skip)
    }

    function forwardPage() {
        setSkipProduct(skipProduct + limitProduct)
    }

    function filterCategory(category: string) {
        getApiDataCategory(24, 0, category).then(data => { dispatch(setProducts(data.products)) });
        /*setFilterCat(true)*/
    }

    /* function followLink(index: number) {
         console.log(index)
     }*/

    return (
        <>
            <Filter filterCategory={filterCategory} />
            <div className='flex flex-col items-center'>
                <ProductList productsData={products} />

                <Button onclick={() => setLimitProduct(limitProduct + 24)} title='Показать еще' />
                <Pagination limitProd={limitProduct} skipProd={skipProduct} nextPage={nextPage} forwardPage={forwardPage} />


            </div>
        </>
    )
}