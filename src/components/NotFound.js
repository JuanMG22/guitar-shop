import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Guitar Shop - Error 404</title>
      </Helmet>
      <div className="bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="w-9/12 m-auto py-10 flex items-center justify-center h-[40.76rem]">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
            <div className="border-t border-gray-200 text-center pt-8">
              <h2 className="text-9xl font-bold text-purple-400">404</h2>
              <h3 className="text-6xl font-medium py-8">Página no encontrada</h3>
              <p className="text-2xl pb-8 px-12 font-medium">
                Oops! La página a la que estás intentando acceder no existe
              </p>
              <Link
                to="/"
                className="bg-gray-700 font-semibold hover:bg-gray-600 py-2 px-3 text-xl text-white rounded-md mr-6"
              >
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
