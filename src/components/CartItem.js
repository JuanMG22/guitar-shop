import { Link } from "react-router-dom"

const CartItem = ( { titulo, precio, pictureUrl, categoria, quantity, id, deleteItem } ) => {

  const precioTotal = precio * quantity
    return (
      <>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <Link to={"/item/" + id}>
              <div className="w-40">
                <img
                  className="h-100"
                  src={pictureUrl}
                  alt={titulo}
                />
              </div>
              </Link>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">
                    <Link to={`/item/${id}`}>
                      {titulo}
                    </Link>
                  </span>
                  <span className="text-red-500 text-xs">
                    <Link to={`/categoria/${categoria}`}>
                      {categoria}
                    </Link>
                  </span>
                <button
                  onClick={() => deleteItem(id)}
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs text-left"
                >
                 Eliminar Producto
                </button>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <input
                className="mx-2 border text-center w-8"
                type="text"
                defaultValue={quantity}
              />
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
             $ {precio}
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
             $ {precioTotal}
            </span>
          </div>
      </>
    )
}

export default CartItem
