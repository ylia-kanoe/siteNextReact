import { recipeData } from "@/services/recipesApi/types";
import Image from "next/image";
import { RaitingStars } from "../raitingStars";

export function RecipeItem(props: recipeData) {
    return (
        <>
            <div className="flex-col lg:flex-row flex gap-[20px] mb-[40px]">
                <div className="flex-none relative h-[300px] overflow-hidden lg:h-auto lg:overflow-visible">
                    <div className="absolute font-bold uppercase flex">
                        {props.mealType && props.mealType.map((item, i) => (
                            <p className="py-[5px] px-[10px] bg-yellow-300 mr-[10px]" key={i}>
                                {item === 'Lunch' ? 'Обед' : item === 'Dinner' ? 'Ужин' : ''}
                            </p>
                        ))}
                    </div>
                    {props.image && <Image className="w-[100%] translate-y-[-85px] lg:w-auto lg:translate-y-[0px]"
                        src={props.image}
                        alt={props.name}
                        width={400}
                        height={400}
                    />}
                </div>
                <div className="flex-1 flex flex-col mx-[10px]">
                    <div className="mb-[10px]">
                        <div className="flex justify-between">
                            <p className="text-xl font-bold">{props.name}</p>
                            <div><span className="font-bold">Автор:</span> {props.userId}</div>
                        </div>
                        <div className="flex">
                            <RaitingStars raiting={props.rating} ratingType="all" />
                            <span className="pl-[5px]">{props.rating}</span>
                            <span className="pl-[5px]">{props.reviewCount} отзывов</span>
                        </div>
                    </div>
                    <div className="mb-[10px] border p-[15px] rounded-md">
                        <div className="flex mb-[10px]">
                            <div className="flex-1">
                                <p className="font-bold text-base">Время на кухне</p>
                                <p className="flex items-center gap-[5px] text-sm">
                                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7" fill="rgb(255,222,0)" stroke="rgb(255,222,0)" strokeWidth="2"></circle><path d="M8 5v2.959a.1.1 0 0 0 .03.07L9.5 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path></svg>
                                    <span>{props.prepTimeMinutes} минут</span></p>
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-base">Будет готово через</p>
                                <p className="flex items-baseline gap-[5px] text-sm">
                                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.624 14c.05-.002.098.023.144.073.045.05.087.122.122.216.035.093.062.203.081.325a2.545 2.545 0 0 1 0 .772 1.665 1.665 0 0 1-.081.325.669.669 0 0 1-.122.216c-.046.05-.095.075-.144.073H.376c-.05.002-.098-.023-.144-.073a.668.668 0 0 1-.122-.216 1.663 1.663 0 0 1-.081-.325 2.539 2.539 0 0 1 0-.772c.019-.122.046-.232.081-.325a.668.668 0 0 1 .122-.216c.046-.05.095-.075.144-.073h15.248ZM9.125 0a.358.358 0 0 1 .317.184.377.377 0 0 1 .001.373l-.494.876-.443.784V3C12.686 3.266 16 6.826 16 11.172c0 .52-.043 1.032-.136 1.526a.373.373 0 0 1-.126.217.359.359 0 0 1-.232.085H.5a.36.36 0 0 1-.234-.087.373.373 0 0 1-.124-.22c-.09-.492-.142-1-.142-1.521 0-4.44 3.468-8.06 7.778-8.183v-.772l-.05-.081-.398-.703-.49-.876a.377.377 0 0 1 .132-.506A.358.358 0 0 1 7.153 0h1.972Zm-.46 4.573a.36.36 0 0 0-.259.105.375.375 0 0 0-.008.525.36.36 0 0 0 .255.113c.792.012 2.088.684 3.12 1.788 1.032 1.103 1.816 2.607 1.8 4.196 0 .098.038.193.106.263a.36.36 0 0 0 .514.004.375.375 0 0 0 .108-.262c.018-1.84-.874-3.502-2.005-4.712-1.132-1.21-2.49-2.003-3.631-2.02Z" fill="rgb(255,222,0)"></path></svg>
                                    <span>{props.cookTimeMinutes} минут</span></p>
                            </div>
                        </div>
                        <div className="text-xs text-zinc-500">Учитывайте, что время готовки может меняться из-за особенностей вашей техники.</div>
                        <div className="flex mb-[10px] mt-[10px]">
                            <div className="flex-1">
                                <p className="font-bold text-base">Сложность:</p>
                                <p className="text-sm">{props.difficulty}</p>
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-base">Кухня страны:</p>
                                <p className="text-sm">{props.cuisine}</p>
                            </div>
                        </div>
                        <div className="text-xs text-zinc-500">Убедитесь, что у вас нет индивидуальной непереносимости других ингредиентов.</div>
                    </div>
                    <div className="flex mb-[10px]">
                        <div className="flex-1">
                            <p className="font-bold text-base">Калорий на порцию</p>
                            <p className="text-sm">{props.caloriesPerServing} ККАЛ</p>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-base">Количество порций</p>
                            <p className="text-sm">{props.servings}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-[10px] basis-full items-end">
                        {props.tags && props.tags.map((item, i) => (
                            <p className="h-[38px] border py-[5px] px-[10px]" key={i}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row mx-[10px] gap-[10px]">
                <div className="flex-1 mb-[30px] lg:mb-[0px]">
                    <p className="font-bold text-base mb-[10px]">Ингредиенты:</p>
                    <div className="">
                        {props.ingredients && props.ingredients.map((item, i) => (
                            <>
                                <p className="mb-[10px]" key={i}>{i + 1 + ')'} {item}</p>
                            </>
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <p className="font-bold text-base mb-[10px]">Инструкция</p>
                    {props.instructions && props.instructions.map((item, i) => (
                        <>
                            <p className="inline py-[5px] px-[10px] bg-yellow-300 font-bold uppercase">Шаг {i + 1}</p>
                            <p className="mt-[10px] mb-[10px]" key={i}>{item}</p>
                        </>

                    ))}
                </div>
            </div>




        </>
    )
}