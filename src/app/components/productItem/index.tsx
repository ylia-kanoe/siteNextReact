import Image from "next/image";
import { productData } from "@/app/services/productApi/types";
import { Button } from "../button";

export function ProductItem(props: productData) {

    return (
        <>
            <li className="flex flex-col justify-center items-center hover:shadow-2xl py-4 px-8 max-w-[250px]" key={props.id}>

                <Image className="max-h-[180px] w-auto"
                    src={props.images[0]}
                    alt={props.title}
                    width={300}
                    height={300}
                />

                <p className="text-lg font-semibold self-start">{props.brand}</p>
                <p className="text-base self-start">{props.title}</p>
                <p className="mt-6 text-base text-gray-600 self-start">{props.rating}
                    <span className="text-xs text-zinc-500">{props.reviews.length}</span>
                </p>
                <p className="mt-6 text-base font-semibold self-start">{props.discountPercentage}
                    <s className='text-sm text-zinc-500'>{props.price}</s>
                </p>
                <Button title="В корзину" />

            </li>
        </>
    )
}