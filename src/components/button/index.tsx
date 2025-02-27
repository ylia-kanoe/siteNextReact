export function Button(props: { title: string, onclick: () => void }) {

    return (
        <>
            <button className="px-6 py-2 uppercase rounded bg-teal-500 hover:bg-teal-600 text-white"
                onClick={props.onclick}>

                {props.title}</button>
        </>
    )
}