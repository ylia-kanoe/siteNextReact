export function RaitingStars(props: { raiting: number, ratingType: 'one' | 'all' }) {

    return (
        <>
            {props.ratingType === 'all' ?
                <div style={{ width: `${props.raiting * 65 / 5}px`, overflow: "hidden" }} >
                    <ul className="flex w-[65px] text-yellow-600">
                        <li>★</li>
                        <li>★</li>
                        <li>★</li>
                        <li>★</li>
                        <li>★</li>
                    </ul>
                </div> :
                <div>
                    <div className="flex w-[20px] h-[20px] text-yellow-600">
                        ★
                    </div>
                </div>
            }

        </>
    )
}
