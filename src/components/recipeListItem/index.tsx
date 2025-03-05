import { recipeData } from "@/services/recipesApi/types";
import Link from "next/link";
import Image from "next/image";

export function RecipeListItem(props: recipeData) {
    return (
        <>
            <li className="flex-1 min-w-[32%] max-w-[400px] lg:max-w-[32%] rounded-xl overflow-hidden shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] duration-700 hover:scale-[1.1] hover:z-10 " >
                <Link href={`/recipes/${props.id}`}>
                    <div className="w-auto max-h-[200px] overflow-hidden">
                        {props &&
                            <Image className="translate-y-[-85px]"
                                src={props.image}
                                alt={props.name}
                                width={400}
                                height={400}
                            />}
                    </div>
                </Link>
                <div className="text-lg font-semibold px-[15px] py-[10px] bg-white">{props.name}</div>
            </li>
        </>
    )
}