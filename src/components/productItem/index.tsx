import Image from "next/image";
import { productData } from "@/services/productApi/types";
import { Button } from "../button";
import { RaitingStars } from "../raitingStars";
import { useState } from "react";

export function ProductItem(props: productData) {
    const [mainImage, setMainImage] = useState(props.images && props.images[0])

    const massMonth: string[] = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    function returnData(date: string) {
        const changedDate = new Date(date)
        return changedDate.getDate() + ' ' + massMonth[changedDate.getMonth()] + ' ' + changedDate.getFullYear()
    }

    return (
        <>
            <div>
                <div className="flex flex-col gap-[10px]">
                    <div className="text-xl font-medium">
                        <span className="uppercase mr-[5px] border-b border-dashed border-red-800 ">{props.brand}</span>
                        {props.title}
                    </div>
                    <div className="flex items-center">
                        <RaitingStars raiting={props.rating} ratingType="one" /><span className="text-sm">{props.rating}</span>
                        <div className="self-end text-zinc-500 text-sm ml-[5px]"> • {props.reviews?.length}</div>
                    </div>
                </div>

                <div className="flex gap-[20px]">
                    <div className="flex">
                        <div className="flex flex-col">
                            {props.images && props.images.map((item, i) => (
                                <Image key={i} className="max-h-[180px] w-auto"
                                    src={item}
                                    alt={props.title + i}
                                    width={300}
                                    height={300}
                                    onClick={() => setMainImage(item)}

                                />

                            ))}
                        </div>
                        <div>
                            <Image className="max-h-[500px] w-auto"
                                src={mainImage}
                                alt={props.title}
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="max-w-[450px]">
                        <p className="font-bold">О товаре</p>
                        <p className="font-bold">Код продукта <span className="font-normal">{props.sku}</span></p>
                        <p className="font-bold">Наличие <span className="font-normal">{props.availabilityStatus === "In Stock" ? `В наличии ${props.stock}` : "Нет в наличии"}</span></p>
                        <p className="font-bold">Описание: <span className="font-normal">{props.description}</span></p>
                    </div>
                    <div>
                        <p>
                            <span className="font-bold text-xl mr-[10px]">{props.discountPercentage} $</span>
                            <s>{props.price} $</s>
                            <span className="mr-[5px] ml-[10px]">{(100 - ((props.discountPercentage * 100) / props.price)).toFixed()}%</span>
                            <span>СКИДКА</span>
                        </p>
                        <div>
                            <Button onclick={() => console.log(1)} title='В корзину' />
                        </div>
                    </div>
                </div>
                <div><p className="grow font-bold text-xl ">Отзывы покупателей</p>
                    <div className="flex flex-wrap gap-[10px]">
                        {props.reviews && props.reviews.map((item, i) => (
                            <div key={i} className="py-4 px-8 w-[300px] border rounded-lg border-zinc-200">
                                <div>
                                    <div className="font-bold text-base">{item.reviewerName}</div>
                                    <div className="text-sm text-zinc-500">{returnData(item.date)}</div>
                                </div>
                                <RaitingStars raiting={item.rating} ratingType="all" />
                                <div>{item.comment}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}