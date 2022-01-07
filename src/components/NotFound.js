import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h2 className="text-9xl font-bold text-purple-400">404</h2>
            <h3 className="text-6xl font-medium py-8">Página no encontrada</h3>
            <p className="text-2xl pb-8 px-12 font-medium">
              Oops! La página a la que estás intentando acceder no existe 
            </p>
            <Link to="/" className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-gray-500 hover:to-gray-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
