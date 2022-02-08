import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";


const options = {
    settings: {
      hideControlsAfter: 1500,
      lightboxTransitionSpeed: 0.3,
      lightboxTransitionTimingFunction: 'backOut',
      slideAnimationType: 'slide',
      slideTransitionSpeed: 0.3,
      slideTransitionTimingFunction: 'backOut'
    },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false,
      size: '45px'
    }
}

const ItemDetail = ({ producto, isAdded }) => {
  return (
    <section className="min-h-[39.5rem]">
      <h2 className="text-3xl font-sans text-black text-center mt-5">
        Detalle de producto
      </h2>
      <div className="container p-5 mx-auto">
        <div className="flex justify-center">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/">Inicio</Link>
              <svg
                className="fill-current w-3 h-3 mx-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link to={`/productos`}>Productos</Link>
              <svg
                className="fill-current w-3 h-3 mx-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link to={`/categoria/${producto.categoria}`}>
                {producto.categoria}
              </Link>
              <svg
                className="fill-current w-3 h-3 mx-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <p className="text-gray-500" aria-current="page">
                {producto.titulo}
              </p>
            </li>
          </ol>
        </div>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full h-1/2 mt-6 hover:opacity-80 object-contain object-center border border-gray-200 cursor-pointer transition-all">
            <SRLWrapper options={options} className="h-screen">
              <img alt={producto.titulo} src={producto.imagen}  />
              <img alt={producto.titulo} src={producto.imagen2} className="hidden"/>
            </SRLWrapper>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {producto.categoria}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {producto.titulo}
            </h1>
            <p className="leading-relaxed">{producto.descripcion}</p>
            <div className="flex lg:flex-nowrap sm:flex-wrap my-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                $ {producto.precio.toLocaleString("es-AR")}
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
