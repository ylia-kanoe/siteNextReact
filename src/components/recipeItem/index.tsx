import { recipeData } from "@/services/recipesApi/types";
import Image from "next/image";

export function RecipeItem(props: recipeData) {
    return (
        <>
            {props.name}
            <div>Калорий на порцию {props.caloriesPerServing}</div>

            <div>Кухня страны: {props.cuisine}</div>
            <div>Сложность {props.difficulty}</div>
            <div>{props.image && <Image className=""
                src={props.image}
                alt={props.name}
                width={200}
                height={200}
            />}
            </div>
            <div>
                <p>Ингредиенты
                </p>{props.ingredients.map((item, i) => (
                    <p key={i}>{item}</p>
                ))}</div>
            <div>
                <p>Инструкция</p>
                {props.instructions.map((item, i) => (
                    <p key={i}>{item}</p>
                ))}
            </div>
            <div>{props.mealType.map((item, i) => (
                <p key={i}>{item}</p>
            ))}</div>
            <div>Время подготовки к готовке {props.prepTimeMinutes}</div>
            <div>Время готовки {props.cookTimeMinutes}</div>
            <div>Рейтинг {props.rating}</div>
            <div>Количество отзывов {props.reviewCount}</div>
            <div>Количество порций {props.servings}</div>
            <div>{props.tags.map((item, i) => (
                <p key={i}>{item}</p>
            ))}</div>
            <div>Пользователь (автор) {props.userId}</div>
        </>
    )
}