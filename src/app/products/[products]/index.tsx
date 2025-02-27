'use client'

import { ProductItem } from "@/components/productItem";
import { setCategorys, setProduct } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getApiCategory, getApiDataProduct } from "@/services/productApi";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Product() {
    const pathname = usePathname()
    const productId = pathname.replace('/products/', '')

    const product = useAppSelector(state => state.products.product)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiCategory().then(data => dispatch(setCategorys(data)));
        getApiDataProduct(productId).then((data) => dispatch(setProduct(data)));
    }, [dispatch]);

    return (
        <>
            <ProductItem {...product} />
        </>
    )
}