export function RaitingStars(props: { raiting: number }) {

    return (
        <>
            <div style={{ width: `${props.raiting * 100 / 5}px`, overflow: "hidden" }} >
                <div className="flex w-[100px]">
                    <svg viewBox="0 -6 448.28512 448" xmlns="http://www.w3.org/2000/svg"><path d="m445.085938 175.179688c2.746093-2.058594 3.871093-5.640626 2.796874-8.902344-1.074218-3.261719-4.109374-5.472656-7.542968-5.496094h-146.054688c-3.363281-.003906-6.363281-2.105469-7.511718-5.265625l-54.570313-150.101563c-1.148437-3.164062-4.152344-5.273437-7.519531-5.273437-3.363282 0-6.371094 2.109375-7.519532 5.273437l-54.566406 150.0625c-1.148437 3.160157-4.152344 5.261719-7.511718 5.265626h-147.082032c-3.417968-.003907-6.457031 2.167968-7.570312 5.398437-1.109375 3.230469-.046875 6.8125 2.652344 8.914063l121.199218 94.261718c2.644532 2.058594 3.726563 5.542969 2.710938 8.738282l-46.839844 147.199218c-1.046875 3.300782.148438 6.90625 2.964844 8.921875 2.816406 2.019531 6.613281 1.996094 9.402344-.058593l127.417968-93.878907c2.820313-2.078125 6.667969-2.078125 9.488282 0l125.941406 92.800781c2.839844 2.089844 6.714844 2.078126 9.539062-.035156 2.828125-2.113281 3.933594-5.828125 2.726563-9.144531l-52.902344-145.519531c-1.214844-3.332032-.089844-7.066406 2.765625-9.175782zm0 0" fill="#ffb655" style={{ fill: "rgb(255, 233, 87)" }}></path></svg>
                    <svg viewBox="0 -6 448.28512 448" xmlns="http://www.w3.org/2000/svg"><path d="m445.085938 175.179688c2.746093-2.058594 3.871093-5.640626 2.796874-8.902344-1.074218-3.261719-4.109374-5.472656-7.542968-5.496094h-146.054688c-3.363281-.003906-6.363281-2.105469-7.511718-5.265625l-54.570313-150.101563c-1.148437-3.164062-4.152344-5.273437-7.519531-5.273437-3.363282 0-6.371094 2.109375-7.519532 5.273437l-54.566406 150.0625c-1.148437 3.160157-4.152344 5.261719-7.511718 5.265626h-147.082032c-3.417968-.003907-6.457031 2.167968-7.570312 5.398437-1.109375 3.230469-.046875 6.8125 2.652344 8.914063l121.199218 94.261718c2.644532 2.058594 3.726563 5.542969 2.710938 8.738282l-46.839844 147.199218c-1.046875 3.300782.148438 6.90625 2.964844 8.921875 2.816406 2.019531 6.613281 1.996094 9.402344-.058593l127.417968-93.878907c2.820313-2.078125 6.667969-2.078125 9.488282 0l125.941406 92.800781c2.839844 2.089844 6.714844 2.078126 9.539062-.035156 2.828125-2.113281 3.933594-5.828125 2.726563-9.144531l-52.902344-145.519531c-1.214844-3.332032-.089844-7.066406 2.765625-9.175782zm0 0" fill="#ffb655" style={{ fill: "rgb(255, 233, 87)" }}></path></svg>
                    <svg viewBox="0 -6 448.28512 448" xmlns="http://www.w3.org/2000/svg"><path d="m445.085938 175.179688c2.746093-2.058594 3.871093-5.640626 2.796874-8.902344-1.074218-3.261719-4.109374-5.472656-7.542968-5.496094h-146.054688c-3.363281-.003906-6.363281-2.105469-7.511718-5.265625l-54.570313-150.101563c-1.148437-3.164062-4.152344-5.273437-7.519531-5.273437-3.363282 0-6.371094 2.109375-7.519532 5.273437l-54.566406 150.0625c-1.148437 3.160157-4.152344 5.261719-7.511718 5.265626h-147.082032c-3.417968-.003907-6.457031 2.167968-7.570312 5.398437-1.109375 3.230469-.046875 6.8125 2.652344 8.914063l121.199218 94.261718c2.644532 2.058594 3.726563 5.542969 2.710938 8.738282l-46.839844 147.199218c-1.046875 3.300782.148438 6.90625 2.964844 8.921875 2.816406 2.019531 6.613281 1.996094 9.402344-.058593l127.417968-93.878907c2.820313-2.078125 6.667969-2.078125 9.488282 0l125.941406 92.800781c2.839844 2.089844 6.714844 2.078126 9.539062-.035156 2.828125-2.113281 3.933594-5.828125 2.726563-9.144531l-52.902344-145.519531c-1.214844-3.332032-.089844-7.066406 2.765625-9.175782zm0 0" fill="#ffb655" style={{ fill: "rgb(255, 233, 87)" }}></path></svg>
                    <svg viewBox="0 -6 448.28512 448" xmlns="http://www.w3.org/2000/svg"><path d="m445.085938 175.179688c2.746093-2.058594 3.871093-5.640626 2.796874-8.902344-1.074218-3.261719-4.109374-5.472656-7.542968-5.496094h-146.054688c-3.363281-.003906-6.363281-2.105469-7.511718-5.265625l-54.570313-150.101563c-1.148437-3.164062-4.152344-5.273437-7.519531-5.273437-3.363282 0-6.371094 2.109375-7.519532 5.273437l-54.566406 150.0625c-1.148437 3.160157-4.152344 5.261719-7.511718 5.265626h-147.082032c-3.417968-.003907-6.457031 2.167968-7.570312 5.398437-1.109375 3.230469-.046875 6.8125 2.652344 8.914063l121.199218 94.261718c2.644532 2.058594 3.726563 5.542969 2.710938 8.738282l-46.839844 147.199218c-1.046875 3.300782.148438 6.90625 2.964844 8.921875 2.816406 2.019531 6.613281 1.996094 9.402344-.058593l127.417968-93.878907c2.820313-2.078125 6.667969-2.078125 9.488282 0l125.941406 92.800781c2.839844 2.089844 6.714844 2.078126 9.539062-.035156 2.828125-2.113281 3.933594-5.828125 2.726563-9.144531l-52.902344-145.519531c-1.214844-3.332032-.089844-7.066406 2.765625-9.175782zm0 0" fill="#ffb655" style={{ fill: "rgb(255, 233, 87)" }}></path></svg>
                    <svg viewBox="0 -6 448.28512 448" xmlns="http://www.w3.org/2000/svg"><path d="m445.085938 175.179688c2.746093-2.058594 3.871093-5.640626 2.796874-8.902344-1.074218-3.261719-4.109374-5.472656-7.542968-5.496094h-146.054688c-3.363281-.003906-6.363281-2.105469-7.511718-5.265625l-54.570313-150.101563c-1.148437-3.164062-4.152344-5.273437-7.519531-5.273437-3.363282 0-6.371094 2.109375-7.519532 5.273437l-54.566406 150.0625c-1.148437 3.160157-4.152344 5.261719-7.511718 5.265626h-147.082032c-3.417968-.003907-6.457031 2.167968-7.570312 5.398437-1.109375 3.230469-.046875 6.8125 2.652344 8.914063l121.199218 94.261718c2.644532 2.058594 3.726563 5.542969 2.710938 8.738282l-46.839844 147.199218c-1.046875 3.300782.148438 6.90625 2.964844 8.921875 2.816406 2.019531 6.613281 1.996094 9.402344-.058593l127.417968-93.878907c2.820313-2.078125 6.667969-2.078125 9.488282 0l125.941406 92.800781c2.839844 2.089844 6.714844 2.078126 9.539062-.035156 2.828125-2.113281 3.933594-5.828125 2.726563-9.144531l-52.902344-145.519531c-1.214844-3.332032-.089844-7.066406 2.765625-9.175782zm0 0" fill="#ffb655" style={{ fill: "rgb(255, 233, 87)" }}></path></svg>
                </div>
            </div>
        </>
    )
}
