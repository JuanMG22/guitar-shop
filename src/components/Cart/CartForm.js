const CartForm = ({
  cartQuantity,
  totalPrice,
  handleInputChange,
  crearOrden,
}) => {
  return (
    <form
      className="lg:w-full xl:w-1/4 w-full px-8 py-10"
      onSubmit={crearOrden}
    >
      <h2 className="font-semibold text-2xl border-b pb-8">
        Resumen del pedido
      </h2>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          {cartQuantity()} Productos
        </span>
        <span className="font-semibold text-sm">$ {totalPrice().toLocaleString('es-AR')}</span>
      </div>
      <div>
        <label
          className="font-medium inline-block mb-3 text-sm uppercase"
          htmlFor="nombre"
        >
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          id="nombre"
          className="block border border-gray-300 p-2 text-gray-600 bg-gray-50 w-full text-sm"
          onChange={handleInputChange}
          required
        />

        <label
          className="font-medium inline-block mb-3 text-sm uppercase"
          htmlFor="apellido"
        >
          Apellido
        </label>
        <input
          type="text"
          name="apellido"
          placeholder="Ingresa tu apellido"
          id="apellido"
          className="block border border-gray-300 p-2 text-gray-600 bg-gray-50 w-full text-sm"
          onChange={handleInputChange}
          required
        />

        <label
          htmlFor="email"
          className="font-medium inline-block mb-3 text-sm uppercase"
        >
          Email
        </label>
        <input
          type="mail"
          name="email"
          id="email"
          placeholder="Ingresa tu email"
          className="block border border-gray-300 p-2 text-gray-600 bg-gray-50 w-full text-sm"
          onChange={handleInputChange}
          required
        />

        <label
          htmlFor="telefono"
          className="font-medium inline-block mb-3 text-sm uppercase"
        >
          Telefono
        </label>
        <input
          type="phone"
          name="telefono"
          id="telefono"
          placeholder="Ingresa tu telefono"
          className="block border border-gray-300 p-2 text-gray-600 bg-gray-50 w-full text-sm"
          min={0}
          maxLength={11}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Precio Total</span>
        <span>$ {totalPrice().toLocaleString('es-AR')}</span>
      </div>
      <div className="border-t mt-8">
        <button
          type="submit"
          className="bg-gray-800 font-semibold hover:bg-gray-700 py-3 text-sm text-white uppercase w-full focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none rounded-md transition-all"
        >
          Proceder con el pago
        </button>
      </div>
    </form>
  );
};

export default CartForm;
