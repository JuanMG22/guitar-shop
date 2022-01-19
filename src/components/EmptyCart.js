import { useContext } from "react";
import { Link } from "react-router-dom"
import { cartContext } from "../context/CartContext";

const EmptyCart = () => {
  const { cartQuantity } = useContext(cartContext);
    return (
        <section className="container w-3/4 mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-full bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Carrito de compras</h1>
                <h2 className="font-semibold text-2xl">
                  {cartQuantity()} Productos
                </h2>
              </div>
              <div className="flex">
                <h3 className="font-light text-2xl">No hay productos en el carrito aún</h3>
              </div>
              <Link
                to="/"
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                <h3>Ir a comprar</h3>
              </Link>
            </div>
          </div>
        </section>
    )
}

export default EmptyCart
