//import { useAppDispatch, useAppSelector } from "@/lib/hooks"

import { propsPagination } from "./types";

export function Pagination(props: propsPagination) {
    const listItems: number[] = []

    for (let i = 0; i <= 198; i++) {
        if (i % props.limitProd == 0) {
            listItems.push(i)
        }
    }

    return (
        <>
            <div>
                <ul className="mt-6 mb-10 inline-flex -space-x-px text-sm">
                    {listItems.map((item, i) => (
                        <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                            key={i} onClick={() => props.nextPage(item)}>{i + 1}</li>
                    ))}
                    <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                        onClick={() => props.forwardPage()}>Вперед</li>
                </ul>
            </div>
        </>

    )
}