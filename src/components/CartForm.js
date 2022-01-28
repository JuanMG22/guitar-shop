const CartForm = ({ crearOrden, cartQuantity, totalPrice }) => {
  return (
    <form className="lg:w-full xl:w-1/4 w-full px-8 py-10">
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
        <label className="font-medium inline-block mb-3 text-sm uppercase" htmlFor="nombre">
          Nombre
        </label>
        <input type="text" placeholder="Ingresa tu nombre" id="nombre" className="block border border-gray-300 p-2 text-gray-600 w-full text-sm" required />
        
        <label className="font-medium inline-block mb-3 text-sm uppercase" htmlFor="apellido">
          Apellido
        </label>
        <input type="text" placeholder="Ingresa tu apellido" id="apellido" className="block border border-gray-300 p-2 text-gray-600 w-full text-sm" required />
        
        <label htmlFor="email" className="font-medium inline-block mb-3 text-sm uppercase">
          Email
        </label>
        <input type="mail" placeholder="Ingresa tu email" id="email" className="block border border-gray-300 p-2 text-gray-600 w-full text-sm" required />
        
        <label htmlFor="telefono" className="font-medium inline-block mb-3 text-sm uppercase">
          Telefono
        </label>
        <input type="number" placeholder="Ingresa tu telefono" id="telefono" className="block border border-gray-300 p-2 text-gray-600 w-full text-sm" min={0} maxLength={11} required />
      </div>
      <div className="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Precio Total</span>
        <span>$ {totalPrice()}</span>
      </div>
      <div className="border-t mt-8">
        <button
          className="bg-gray-800 font-semibold hover:bg-gray-700 py-3 text-sm text-white uppercase w-full transition-all"
          onSubmit={crearOrden}
        >
          Proceder con el pago
        </button>
      </div>
    </form>
  );
};

export default CartForm;
