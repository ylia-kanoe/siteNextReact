'use client'

'use client'
import { useEffect, useRef } from 'react'
import { Filter } from "../../components/filter";
import { ProductList } from "../../components/productList";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { ProductApi } from '@/services/productApi';
import { setProducts } from '@/lib/features/product/productSlice';

export function Product() {
    /*const data = await ProductApi.getProductList(24, 0)
    const products = data.products*/

    const initialized = useRef(false)
    if (!initialized.current) {
        initialized.current = true
    }

    const products = useAppSelector(state => state.products.products)
    const dispatch = useAppDispatch()

    const getApiData = async (limit: number, skip: number) => {
        return await ProductApi.getProductList(limit, skip)
    };

    useEffect(() => {
        getApiData(24, 0).then(data => dispatch(setProducts(data.products)));
    }, [dispatch]);

    return (<>
        <Filter />
        <ProductList productsData={products} />
    </>
    )
}