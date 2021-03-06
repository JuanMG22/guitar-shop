import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Guitar Shop - Home</title>
      </Helmet>
      <section className="my-5">
        <div className="container mx-auto px-6">
          <div className="h-64 rounded-md overflow-hidden bg-cover bg-right sm:bg-center bg-[url('https://vertabelo.com/blog/a-data-model-for-an-online-musical-equipment-shop/row-of-different-electric-guitars-hanging-in-a-modern-musical-shop.jpg')]">
            <div className="bg-gray-900 bg-opacity-60 sm:bg-opacity-60 hover:bg-opacity-50  flex items-center h-full transition-all">
              <article className="mx-5 py-4 px-5 max-w-xl bg-gray-800 rounded-md opacity-80">
                <Link
                  to="/productos"
                  className="text-2xl text-white font-semibold"
                >
                  Equipamiento Musical
                </Link>
                <p className="mt-2 text-gray-100">
                  En Guitar Shop encontrarás el mejor equipamiento musical de las
                  mejores marcas como Musicman, Ibanez, Fender, entre otros.
                </p>
                <Link
                  to="/productos"
                  className="flex items-center mt-4 px-3 py-2  text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none w-1/2 sm:w-1/4 "
                >
                  <span>Ver más</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </article>
            </div>
          </div>
          <div className="md:flex mt-8 md:-mx-4">
            <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md: bg-[url('https://www.itl.cat/pngfile/big/150-1507809_john-petrucci-slide-electric-guitar.jpg')]">
              <div className="bg-gray-900 bg-opacity-60 sm:bg-opacity-60 hover:bg-opacity-50  flex items-center h-full">
                <article className="mx-5 py-4 px-5 max-w-xl bg-gray-800 rounded-md opacity-80">
                  <Link
                    to="/categoria/Guitarras"
                    className="text-2xl text-white font-semibold"
                  >
                    Guitarras Electricas
                  </Link>
                  <p className="mt-2 text-gray-100">
                    En Guitar Shop encontrarás las mejores guitarras eléctricas de
                    las principales marcas
                  </p>
                  <Link
                    to="/categoria/Guitarras"
                    className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none w-1/2 sm:w-1/4 "
                  >
                    <span>Ver Más</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </article>
              </div>
            </div>
            <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md: bg-[url('https://www.itl.cat/pngfile/big/318-3180622_bass-guitar-hd-wallpapers-jaguar-bass-guitar-kit.jpg')]">
              <div className="bg-gray-900 bg-opacity-60 sm:bg-opacity-60 hover:bg-opacity-50  flex items-center h-full">
                <article className="mx-5 py-4 px-5 max-w-xl bg-gray-800 rounded-md opacity-80">
                  <Link
                    to="/categoria/Bajos"
                    className="text-2xl text-white font-semibold"
                  >
                    Bajos Eléctricos
                  </Link>
                  <p className="mt-2 text-gray-100">
                    En Guitar Shop encontrarás los mejores bajos eléctricas de las
                    principales marcas
                  </p>
                  <Link
                    to="/categoria/Bajos"
                    className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none w-1/2 sm:w-1/4 "
                  >
                    <span>Ver Más</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </article>
              </div>
            </div>
          </div>
          <div className="md:flex mt-8 md:-mx-4">
            <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md: bg-[url('https://blog.madridhifi.com/wp-content/uploads/2021/12/mejor-looper-para-guitarra.jpg')]">
              <div className="bg-gray-900 bg-opacity-60 sm:bg-opacity-60 hover:bg-opacity-50  flex items-center h-full">
                <article className="mx-5 py-4 px-5 max-w-xl bg-gray-800 rounded-md opacity-80">
                  <Link
                    to="/categoria/Pedales"
                    className="text-2xl text-white font-semibold"
                  >
                    Pedales
                  </Link>
                  <p className="mt-2 text-gray-100">
                    En Guitar Shop encontrarás los mejores pedales de las
                    principales marcas.
                  </p>
                  <Link
                    to="/categoria/Pedales"
                    className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none w-1/2 sm:w-1/4 "
                  >
                    <>Ver Más</>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </article>
              </div>
            </div>
            <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md: bg-[url('https://wallpapercave.com/wp/wp3784109.jpg')]">
              <div className="bg-gray-900 bg-opacity-60 sm:bg-opacity-60 hover:bg-opacity-50  flex items-center h-full">
                <article className="mx-5 py-4 px-5 max-w-xl bg-gray-800 rounded-md opacity-80">
                  <Link
                    to="/categoria/Amps"
                    className="text-2xl text-white font-semibold"
                  >
                    Amplificadores
                  </Link>
                  <p className="mt-2 text-gray-100">
                    En Guitar Shop encontrarás los mejores amplificadores de las
                    principales marcas
                  </p>
                  <Link
                    to="/categoria/Amps"
                    className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none w-1/2 sm:w-1/4"
                  >
                    <span>Ver Más</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
