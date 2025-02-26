'use client'

import Image from "next/image";
import { productData } from "@/services/productApi/types";
import { Button } from "../button";
import { RaitingStars } from "../raitingStars";
import Link from "next/link";

export function ProductListItem(props: productData) {

    return (
        <>
            <li className="flex flex-col justify-center items-center hover:shadow-2xl py-4 px-8 w-[300px]" key={props.id}>
                <Link href={`/products/${props.id}`}>
                    <Image className="max-h-[180px] w-auto"
                        src={props.images[0]}
                        alt={props.title}
                        width={300}
                        height={300}
                    />
                    <p className="text-lg font-semibold self-start">{props.brand}</p>
                    <p className="text-base self-start">{props.title}</p>
                    <div className="flex mt-6 text-base text-gray-600 self-start">
                        <RaitingStars raiting={props.rating} ratingType="all"/>
                        <div className="self-end text-zinc-500 ml-[5px]">{props.reviews.length}</div>
                    </div>
                    <p className="mt-6 text-lg font-semibold self-start">{props.discountPercentage} $
                        <s className='text-sm text-zinc-500 ml-[10px]'>{props.price}</s>
                    </p>
                    <Button title="В корзину" onclick={() => { }} />
                </Link>
            </li>
        </>
    )
}