'use client'

import Image from "next/image";
import { productData } from "@/services/productApi/types";
import { Button } from "../button";
import { RaitingStars } from "../raitingStars";
import Link from "next/link";
import { useState } from "react";

export function ProductListItem(props: productData) {
    const [like, setLike] = useState(false)

    return (
        <>
            <li className="group flex flex-col justify-center items-center hover:border py-4 px-8 w-[300px] flex-none" key={props.id}>
                <div onClick={() => like ? setLike(false) : setLike(true)} className={`self-end text-[25px] cursor-pointer hover:text-red-600 ${like ? 'text-red-600' : 'text-zinc-300'}`}>♥</div>
                <Link href={`/products/${props.id}`}>
                    <Image className="max-h-[180px] w-auto m-auto"
                        src={props.images[0]}
                        alt={props.title}
                        width={300}
                        height={300}
                    />
                    <p className="text-lg font-semibold self-start">{props.brand}</p>
                    <p className="text-base self-start">{props.title}</p>
                    <div className="flex mt-[5px] text-base text-gray-600 self-end">
                        <span className="font-bold text-yellow-600">{props.rating}</span>
                        <RaitingStars raiting={props.rating} ratingType="one" />
                        <div className="self-end text-zinc-500">{props.reviews.length} оценки</div>
                    </div>
                    <p className="mt-6 text-lg font-semibold self-start">{props.discountPercentage} $
                        <s className='text-sm text-zinc-500 ml-[10px]'>{props.price}</s>
                        <span className={`ml-[5px] text-sm font-bold ${props.discountPercentage < props.price ? 'text-green-600' : 'text-red-600'}`}>
                            {props.discountPercentage < props.price ?
                                `${(100 - ((props.discountPercentage * 100) / props.price)).toFixed()}% 🡇` :
                                `${(((props.discountPercentage * 100) / props.price) - 100).toFixed()}% 🡅`}
                        </span>
                    </p>
                    <div className='text-center mt-[20px] invisible group-hover:visible'>
                        <Button title="В корзину" onclick={() => { }} />
                    </div>
                </Link>
            </li>
        </>
    )
}