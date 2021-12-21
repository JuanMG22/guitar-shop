import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const restarContador = () => setContador(contador - 1)
    const sumarContador = () => setContador(contador + 1)
    const resetContador = () => setContador(0)
    const stockContador = () => setContador(stock)
        
    return (
        <>
            <button onClick={contador > 0 ? restarContador : resetContador} className="px-3 py-1 bg-gray-800 text-sm text-gray-100 font-semibold rounded"
            >-</button>
            <h3 className="text-3xl text-gray-200">{contador}</h3>
            <button onClick={contador < stock ? sumarContador : stockContador} className="px-3 py-1 bg-gray-800 text-sm text-gray-100 font-semibold rounded"
            >+</button>
            <button onClick={onAdd} className="px-3 py-1 bg-gray-800 text-sm text-gray-100 font-semibold rounded"
            >onADD</button>
        </>
    )
}

export default ItemCount
