import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { FaTrash } from "react-icons/fa";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CartForm from "./CartForm";
import Helmet from "react-helmet";

const Cart = () => {
  const { cartQuantity, cartList, deleteItem, clearCart, totalPrice } =
    useContext(cartContext);

  const onSubmit = (datosComprador) => crearOrden(datosComprador);

  const mostrarModalConfirmaciĆ³n = (nombre, id, email) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: `Gracias por comprar ${nombre}`,
      html: `
        <h3>Tu codigo de compra es: ${id}</h3>
        <h3>Hemos enviado un correo a ${email}</h3>
      `,
      icon: "success",
      iconColor: "#374151",
      confirmButtonColor: "#374151",
    });
  };

  const navigate = useNavigate();
  const volverHome = () => navigate("/");

  const crearOrden = (datosComprador) => {
    const coleccionProductos = collection(db, "ordenes");
    const orden = {
      datosComprador,
      cartList,
      total: totalPrice(),
      fechaPedido: serverTimestamp(),
    };
    const pedido = addDoc(coleccionProductos, orden);
    pedido.then((resultado) => {
      mostrarModalConfirmaciĆ³n(datosComprador.nombre, resultado.id, datosComprador.email);
      clearCart();
      volverHome();
    });
  };

  return (
    <>
      <Helmet>
        <title>Guitar Shop - Carrito</title>
      </Helmet>
      {cartQuantity() === 0 ? (
        <EmptyCart />
      ) : (
        <section className="sm:container sm:mx-auto mt-10 w-full">
          <div className="flex flex-wrap shadow-md my-10">
            <div className="xl:w-3/4 w-full bg-white px-3 sm:px-10 py-10">
              <div className="flex justify-between border-b pb-8 ">
                <h1 className="font-semibold text-2xl">Carrito de compras</h1>
                <h2 className="font-semibold text-2xl">
                  {cartQuantity()} Productos
                </h2>
              </div>
              <div className="flex mt-10 mb-5 overflow-auto">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Productos
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ml-12 sm:ml-0">
                  Cantidad
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase hidden w-1/5 sm:block">
                  Precio
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ml-12 sm:ml-0">
                  Total
                </h3>
              </div>
              <div className="overflow-x-auto">
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
              </div>

              <button
                onClick={() => clearCart()}
                className="mt-5 font-semibold hover:text-red-800 text-gray-500 text-xs flex items-center"
              >
                <FaTrash className="mr-2" /> Vaciar Carrito
              </button>
              <Link
                to="/productos"
                className="flex font-semibold text-gray-500 hover:text-red-800 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-gray-500 hover:text-red-800 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Seguir Comprando
              </Link>
            </div>
            <CartForm
              cartQuantity={cartQuantity}
              totalPrice={totalPrice}
              onSubmit={onSubmit}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
