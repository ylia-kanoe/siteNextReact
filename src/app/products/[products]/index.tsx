'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ProductItem() {
    const pathname = usePathname()
    const productId = pathname.replace('/products/', '')

    useEffect(() => {

    }, [pathname])

    return (
        <>
            <p>{productId}</p>
        </>
    )
}