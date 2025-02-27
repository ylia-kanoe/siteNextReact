import Image from "next/image";
import { productData } from "@/services/productApi/types";
import { Button } from "../button";
import { RaitingStars } from "../raitingStars";
import { useEffect, useState } from "react";

export function ProductItem(props: productData) {
    const [mainImage, setMainImage] = useState(0)
    const [like, setLike] = useState(false)
    const [imageTranslateY, setImageTranslateY] = useState(0)

    const massMonth: string[] = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'October', 'november', 'december']

    function returnData(date: string) {
        const changedDate = new Date(date)
        return changedDate.getDate() + ' ' + massMonth[changedDate.getMonth()] + ' ' + changedDate.getFullYear()
    }

    useEffect(() => {
        if (props.images && (mainImage !== (props.images.length - 1))) {
            setImageTranslateY(mainImage * 155)
        }
    }, [mainImage])

    return (
        <>
            <div className="flex flex-col items-center w-[1200px] m-auto">
                <div className="mb-[20px] self-start flex flex-col w-[100%]">
                    <div className="flex justify-between text-xl font-medium">
                        <div>
                            <p className="uppercase border-b border-dashed border-red-800 w-max">{props.brand}</p>
                            {props.title}
                        </div>
                        <div onClick={() => like ? setLike(false) : setLike(true)} className={`flex gap-[5px] items-center text-[25px] cursor-pointer hover:text-red-600 ${like ? 'text-red-600' : 'text-zinc-300'}`}>♥ <span className="text-sm">В избранное</span></div>
                    </div>
                    <div className="flex items-end">
                        <div className="text-sm font-bold text-yellow-600">{props.rating}</div>
                        <div className="flex items-center">
                            <RaitingStars raiting={props.rating} ratingType="all" />
                            <div className="text-zinc-500 text-sm ml-[5px]"> • {props.reviews?.length} отзыва</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[30px] w-[100%]" >
                    <div className="flex gap-[20px] grow">
                        <div className="flex flex-col items-center justify-center">
                            <button onClick={() => setMainImage(mainImage - 1)}
                                className={`text-2xl ${mainImage === 0 && "invisible"}`}
                                disabled={mainImage === 0 && true}>
                                <svg className="-rotate-90" aria-hidden="true" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                                    <path d="m12.841 8.0967-5.3528-5.3528 0.7071-0.7071 6.0599 6.06-6.0599 6.0599-0.7071-0.7071 5.3528-5.3528z"></path>
                                </svg>
                            </button>
                            <div className=" h-[320px] overflow-hidden">
                                <div className="flex flex-col gap-[10px] duration-700" style={{ transform: `translateY(-${imageTranslateY}px)` }}>
                                    {props.images && props.images.map((item, i) => (
                                        <Image key={i} className={`max-h-[150px] w-auto cursor-pointer ${mainImage === i && "border rounded-lg border-zinc-950"}`}
                                            src={item}
                                            alt={props.title + i}
                                            width={250}
                                            height={250}
                                            onClick={() => setMainImage(i)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button onClick={() => setMainImage(mainImage + 1)}
                                className={`text-2xl ${props.images && (mainImage === (props.images.length - 1)) && "invisible"}`}
                                disabled={props.images && (mainImage === (props.images.length - 1)) && true}>
                                <svg className="rotate-90" aria-hidden="true" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                                    <path d="m12.841 8.0967-5.3528-5.3528 0.7071-0.7071 6.0599 6.06-6.0599 6.0599-0.7071-0.7071 5.3528-5.3528z"></path>
                                </svg>
                            </button>
                        </div>
                        {props.images &&
                            <>
                                <div className="group relative grow">
                                    <button onClick={() => setMainImage(mainImage - 1)}
                                        className={`absolute h-[40px] w-[40px] top-[50%] left-[-10px] border rounded-full bg-white shadow-xl text-red-950 text-2xl invisible 
                                            ${mainImage > 0 && "group-hover:visible"}`}
                                        disabled={mainImage === 0 && true}>⮜</button>
                                    <Image className="m-auto max-h-[500px] w-auto"
                                        src={props.images[mainImage]}
                                        alt={props.title}
                                        width={500}
                                        height={500}
                                    />
                                    <button onClick={() => setMainImage(mainImage + 1)}
                                        className={`absolute h-[40px] w-[40px] top-[50%] right-[-10px] border rounded-full bg-white shadow-[0_0_10px_3px_rgba(34,60,80,0.2)] text-red-950 text-2xl invisible 
                                            ${(mainImage < (props.images.length - 1)) && "group-hover:visible"}`}
                                        disabled={(mainImage === (props.images.length - 1)) && true}>⮞</button>
                                </div>
                            </>
                        }
                    </div>
                    <div className="max-w-[450px] flex-none">
                        <div className="text-zinc-600">
                            <p className="mb-[5px] font-bold">О товаре</p>
                            <p className="flex justify-between font-bold">
                                <span>Код продукта </span>
                                <span className="grow border-b border-dashed border-zinc-200"></span>
                                <span className="font-normal"> {props.sku}</span></p>
                            <p className="flex justify-between font-bold">
                                <span>Наличие </span>
                                <span className="grow border-b border-dashed border-zinc-200"></span>
                                <span className="font-normal"> {props.availabilityStatus === "Out of Stock" ? "Нет в наличии" : `${props.stock} шт.`}</span></p>
                            <p className="font-bold">Описание: <span className="font-normal">{props.description}</span></p>
                        </div>
                        <div className="mt-[20px]">
                            <p>
                                <span className="font-bold text-xl mr-[10px]">{props.discountPercentage} $</span>
                                <s>{props.price} $</s>
                                <span className={`ml-[5px] text-sm font-bold ${props.discountPercentage < props.price ? 'text-green-600' : 'text-red-600'}`}>
                                    {props.discountPercentage < props.price ?
                                        `${(100 - ((props.discountPercentage * 100) / props.price)).toFixed()}% 🡇` :
                                        `${(((props.discountPercentage * 100) / props.price) - 100).toFixed()}% 🡅`}
                                </span>
                            </p>
                            <div className="mt-[20px]">
                                <Button onclick={() => console.log(1)} title='В корзину' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1200px] mt-[40px] mb-[40px]">
                    <p className="grow font-bold text-xl mb-[20px]">Отзывы пользователей</p>
                    <div className="flex flex-wrap gap-[10px]">
                        {props.reviews && props.reviews.map((item, i) => (
                            <div key={i} className="py-4 px-8 w-[300px] border rounded-lg border-zinc-200">
                                <div className="flex justify-between">
                                    <div className="font-bold text-base">{item.reviewerName}</div>
                                    <div className="text-sm text-zinc-500">{returnData(item.date)}</div>
                                </div>
                                <RaitingStars raiting={item.rating} ratingType="all" />
                                <div className="mt-[10px] pb-[20px] min-h-[100px] ">{item.comment}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
