import ItemCount from "./ItemCount"

const ProductCard = (props) => {

    const onAdd = () => {}
    return (
        <>
            <div className="max-w-xs bg-white border border-gray-900 rounded-lg overflow-hidden my-10 ml-5 hover:shadow-lg hover:shadow-gray-900 hover:scale-105 transition-all">
                <div className="px-4 py-2">
                    <h1 className="text-gray-900 font-bold text-3xl uppercase">{props.titulo}</h1>
                    <p className="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                </div>
                <img className="h-56 w-full object-contain mt-2" src="https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-7.png?1631591626" alt="Guitar"/>
                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-gray-200 font-bold text-xl">$ {props.precio}</h1>
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </div>
            </div>
        </>
    )
}

export default ProductCard
