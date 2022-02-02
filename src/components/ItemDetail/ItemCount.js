import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";


const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const restarContador = () => setContador(contador - 1);
  const sumarContador = () => setContador(contador + 1);
  const stockContador = () => setContador(stock);

  const botonResta = contador > initial ? restarContador : undefined;
  const botonSuma = contador < stock ? sumarContador : stockContador;

  return (
    <>
      <button
        onClick={botonResta}
        className="mx-5 px-3 py-1 bg-gray-800 text-xs sm:text-sm text-gray-100 font-semibold"
      >
        <FaMinus />
      </button>
      <h3 className="text-xl sm:text-3xl text-gray-800">{contador}</h3>
      <button
        onClick={botonSuma}
        className="mx-5 px-3 py-1 bg-gray-800 text-xs sm:text-sm text-gray-100 font-semibold"
      >
        <FaPlus />
      </button>
      <button
        onClick={() => onAdd(contador)}
        className="mx-5 px-3 py-1 bg-gray-800 text-xs sm:text-sm text-gray-100 font-semibold"
      >
        Agregar
      </button>
    </>
  );
};

export default ItemCount;
