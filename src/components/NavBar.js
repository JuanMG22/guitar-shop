import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    { id: 1, link: "Guitarras" },
    { id: 2, link: "Bajos" },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/">
              <div className="flex-shrink-0 flex items-center">
                  <img
                    className="w-10"
                    src="https://www.nicepng.com/png/full/89-897917_bass-guitar-bass-guitar-logo-png.png"
                    alt="guitar shop logo"
                  />
                  <h1 className="font-sans text-white ml-4">GUITAR SHOP</h1>
              </div>
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to={`/`}
                >
                  Productos
                </Link>
                {links?.map((data) => {
                  return (
                    <Link
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      key={data.id}
                      to={`/categoria/${data.link}`}
                    >
                      {data.link}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Inicio
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Productos
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Acerca de
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
