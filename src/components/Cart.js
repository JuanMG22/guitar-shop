import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartQuantity, cartList, deleteItem, clearCart, totalPrice } = useContext(cartContext);
  console.log(cartList)
  return (
    <>
      {cartQuantity() === 0 ? (
        <EmptyCart />
      ) : (
        <section className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Carrito de compras</h1>
                <h2 className="font-semibold text-2xl">
                  {cartQuantity()} Productos
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Productos
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Cantidad
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Precio
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {cartList?.map((producto) => {
                return (
                  <CartItem
                    key={producto.item.id}
                    titulo={producto.item.titulo}
                    categoria={producto.item.categoria}
                    quantity={producto.quantity}
                    precio={producto.item.precio}
                    pictureUrl={producto.item.imagen}
                    id={producto.item.id}
                    deleteItem={deleteItem}
                  />
                );
              })}

              <button
                onClick={() => clearCart()}
                className="mt-5 font-semibold hover:text-red-500 text-gray-500 text-xs flex items-center"
              >
                <FaTrash className="mr-2" /> Vaciar Carrito
              </button>
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
                Seguir Comprando
              </Link>
            </div>

            <div className="w-1/4 px-8 py-10">
              <h2 className="font-semibold text-2xl border-b pb-8">
                Resumen del pedido
              </h2>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  {cartQuantity()} Productos
                </span>
                <span className="font-semibold text-sm">$ {totalPrice()}</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Envio
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Envio standard - $ 5000</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Codigo de descuento
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Ingresa un codigo"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Aplicar
              </button>
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Precio Total</span>
                <span>$ {totalPrice()}</span>
              </div>
              <div className="border-t mt-8">
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Proceder con el pago
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
