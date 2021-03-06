import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const links = [
  { id: 1, text: "Productos", link: "/productos" },
  { id: 2, text: "Guitarras", link: "/categoria/Guitarras" },
  { id: 3, text: "Bajos", link: "/categoria/Bajos" },
  { id: 4, text: "Pedales", link: "/categoria/Pedales" },
  { id: 5, text: "Amps", link: "/categoria/Amps" },
  { id: 6, text: "Contacto", link: "/contacto" },
];

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const openCloseMenu = () => setOpenMenu(!openMenu);
  const closeMenu = () => setOpenMenu(false);
  const isOpenMenu = openMenu ? "" : "hidden";

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between px-1 sm:px-0">
            <div className="inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={openCloseMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {openMenu ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
          <div className="flex">

            <Link to="/">
              <div className="flex items-center justify-center sm:justify-between" onClick={closeMenu}>
                <img
                  className="w-10"
                  src="https://www.nicepng.com/png/full/89-897917_bass-guitar-bass-guitar-logo-png.png"
                  alt="guitar shop logo"
                />
                <h1 className="text-white ml-2">GUITAR SHOP</h1>
              </div>
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {links?.map((data) => {
                  return (
                    <Link
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      key={data.id}
                      to={`${data.link}`}
                    >
                      {data.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <Link
            to="/cart"
            onClick={closeMenu}
            className="px-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            <CartWidget />
          </Link>
          </div>
        </div>
      </div>

      <div className={`${isOpenMenu} sm:hidden transition-all`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links?.map((data) => {
            return (
              <Link
                onClick={openCloseMenu}
                className="text-gray-300 bg-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                key={data.id}
                to={`${data.link}`}
              >
                {data.text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
