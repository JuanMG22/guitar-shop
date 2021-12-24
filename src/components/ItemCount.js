import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const restarContador = () => setContador(contador - 1);
    const sumarContador = () => setContador(contador + 1);
    const stockContador = () => setContador(stock);

    const botonResta = contador > 0 ? restarContador : false;
    const botonSuma = contador < stock ? sumarContador : stockContador;
        
    return (
        <>
            <button onClick={botonResta} className="px-3 py-1 bg-gray-800 text-sm text-gray-100 font-semibold rounded"
            >-</button>
            <h3 className="text-3xl text-gray-200">{contador}</h3>
            <button onClick={botonSuma} className="px-3 py-1 bg-gray-800 text-sm text-gray-100 font-semibold rounded"
            >+</button>
            <button onClick={onAdd} className="px-3 py-1 bg-gray-800 text-sm text-gray-100 font-semibold rounded"
            >onADD</button>
        </>
    )
}

export default ItemCount
