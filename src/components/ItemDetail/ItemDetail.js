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
              {producto.categoria}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {producto.titulo}
            </h1>
            <p className="leading-relaxed">
              {producto.descripcion}
            </p>
            <div className="flex lg:flex-nowrap sm:flex-wrap my-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                $ {producto.precio.toLocaleString('es-AR')}
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
