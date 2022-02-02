import { SRLWrapper } from "simple-react-lightbox";

const ItemDetail = ({ producto, isAdded }) => {
  return (
    <section className="min-h-[39.5rem]">
      <h2 className="text-3xl font-sans text-black text-center mt-5">
        Detalle de producto
      </h2>
      <div className="container p-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full h-1/2 mt-6 hover:opacity-80 object-contain object-center border border-gray-200 cursor-pointer transition-all">
            <SRLWrapper>
              <img alt={producto.titulo} src={producto.imagen} />
            </SRLWrapper>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {producto?.categoria}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {producto.titulo}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">
              {producto.descripcion}
            </p>
            <div className="flex lg:flex-nowrap sm:flex-wrap my-5">
              <span className="title-font font-medium text-2xl sm:2xl text-gray-900">
                $ {producto.precio}
              </span>
              {isAdded}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
