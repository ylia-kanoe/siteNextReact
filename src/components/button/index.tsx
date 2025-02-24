export function Button(props: {title: string}){

    return (
        <>
        <button className="mt-6 px-6 py-2 uppercase rounded bg-teal-500 hover:bg-teal-600 text-white">    
            
            {props.title}</button>
        </>
    )
}