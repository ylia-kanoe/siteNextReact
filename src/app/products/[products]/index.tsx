'use client'

import { ProductItem } from "@/components/productItem";
import { ProductRecommended } from "@/components/productRecommended";
import { setProduct, setProducts } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getApiDataCategory, getApiDataProduct } from "@/services/productApi";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Product() {
    const pathname = usePathname()
    const productId = pathname.replace('/products/', '')

    const product = useAppSelector(state => state.products.product)
    const products = useAppSelector(state => state.products.products)

    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiDataProduct(productId).then((data) => dispatch(setProduct(data)));
    }, [dispatch]);

    useEffect(() => {
        if (!product) {
            return
        }
        getApiDataCategory(product.category).then(data => { dispatch(setProducts(data.products)) })
    }, [product, dispatch]);

    return (
        <>{product &&
            <>
                <ProductItem {...product} />
                <ProductRecommended productsData={products} idProduct={+productId} />
            </> 
        }
        </>
    )
}
