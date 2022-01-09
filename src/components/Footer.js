import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-100 bg-gray-800">
      <div className="container py-6">
        <h3 className="text-center text-lg font-bold lg:text-2xl">
          Suscribite y no te pierdas nuestros <br /> últimos productos,
          descuentos y más
        </h3>

        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                placeholder="Ingresa tu email"
              />
              <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">
                Enviar
              </button>
            </div>
          </div>
        </div>

        <hr className="h-px mt-6 bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <Link to="/" className="text-xl font-bold">
              Guitar Shop
            </Link>
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <Link to="/" className="px-4 text-sm">
                Inicio
              </Link>
              <Link to="/" className="px-4 text-sm">
                Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
