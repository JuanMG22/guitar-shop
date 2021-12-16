const ProductCard = (props) => {
    return (
        <>
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 ml-5">
                <div className="px-4 py-2">
                    <h1 className="text-gray-900 font-bold text-3xl uppercase">{props.titulo}</h1>
                    <p className="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                </div>
                <img className="h-56 w-full object-contain mt-2" src="https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-7.png?1631591626" alt="NIKE AIR"/>
                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-gray-200 font-bold text-xl">$ {props.precio}</h1>
                    <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"></button>
                </div>
            </div>
        </>
    )
}

export default ProductCard
