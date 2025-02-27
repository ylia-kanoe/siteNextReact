import { productData } from "@/services/productApi/types";
import { ProductListItem } from "../productListItem";
import { useState } from "react";


export function ProductRecommended(props: { productsData: productData[], idProduct: number }) {
    const [activeRecomendProduct, setActiveRecomendProduct] = useState(0)

    return (
        <>
            <div className="flex flex-col items-center w-[1200px] m-auto mt-[40px] mb-[40px]">
                <div className="grow font-bold text-xl mb-[20px] self-start">Рекомендуемые товары</div>
                <div className="w-[100%] relative">
                    <button onClick={() => setActiveRecomendProduct(activeRecomendProduct - 1)}
                        className={`z-[1] absolute h-[40px] w-[40px] top-[50%] left-[-10px] border rounded-full bg-white shadow-xl text-red-950 text-2xl 
                            ${activeRecomendProduct < 1 && "invisible"}`}
                        disabled={activeRecomendProduct < 1 && true}>⮜</button>
                    <div className="w-[100%] overflow-hidden py-[50px]">
                        <ul className="flex duration-700"
                            style={{ transform: `translateX(-${300 * activeRecomendProduct}px)` }}>
                            {props.productsData.map((item) => (
                                props.idProduct !== item.id &&
                                <ProductListItem key={item.id} {...item} />
                            ))}
                        </ul>
                    </div>
                    <button onClick={() => (props.productsData && (activeRecomendProduct < props.productsData.length - 5)) && setActiveRecomendProduct(activeRecomendProduct + 1)}
                        className={`z-[1] absolute h-[40px] w-[40px] top-[50%] right-[-10px] border rounded-full bg-white shadow-[0_0_10px_3px_rgba(34,60,80,0.2)] text-red-950 text-2xl
                             ${(props.productsData && (activeRecomendProduct >= props.productsData.length - 5)) && "invisible"}`}
                        disabled={(props.productsData && (activeRecomendProduct >= props.productsData.length - 5)) && true}>⮞</button>
                </div>
            </div>

        </>
    )
}