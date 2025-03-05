import { setRecipes, setRecipeTags } from "@/lib/features/recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getApiDataRecipesTag, getApiTags } from "@/services/recipesApi";
import { useEffect, useState } from "react";
import { Button } from "../button";

export function Tags(props: { title: string }) {

    const [tagsVisible, setTagsVisible] = useState(false)
    const tags = useAppSelector(state => state.recipes.tags)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiTags().then(data => dispatch(setRecipeTags(data)));
    }, [dispatch]);

    function selectRecipesTag(tag: string) {
        getApiDataRecipesTag(tag).then(data => dispatch(setRecipes(data.recipes)))
    }

    return (
        <>
            <div className={`max-h-[130px] overflow-hidden ${tagsVisible && 'max-h-none'}`}>
                <ul className="flex flex-wrap gap-[10px] justify-between mx-[20px] lg:mx-[10px]">
                    <li className="cursor-pointer border py-[5px] px-[10px]" onClick={() => selectRecipesTag('')}>Все {props.title}</li>
                    {tags.map((item, i) => (
                        <li className="cursor-pointer border py-[5px] px-[10px]" key={i} onClick={() => selectRecipesTag(item)}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="text-center mt-[20px]">
                {!tagsVisible && <Button onclick={() => setTagsVisible(true)} title="Показать все теги" />}
            </div>
        </>
    )
}
