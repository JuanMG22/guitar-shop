import { Link } from "react-router-dom";

const Item = ({ titulo, descripcion, precio, pictureUrl, id }) => {
  return (
    <article className="max-w-xs bg-white border-t border-gray-100 shadow-lg shadow-gray-400 my-5 xl:mx-2 sm:my-7 sm:ml-0 hover:shadow-lg hover:shadow-gray-900 hover:scale-105 rounded-md transition-all w-[19rem]">
      <div className="px-4 py-2 text-left">
        <h3 className="text-gray-900 font-bold text-2xl uppercase">{titulo}</h3>
        <div className="h-200">
          <p className="text-gray-600 text-sm mt-1 text-left truncate">
            {descripcion}
          </p>
        </div>
      </div>
      <Link to={`/item/${id}`}>
        <img
          className="h-56 w-full object-contain mt-2 transition-all"
          src={pictureUrl}
          alt="Guitar"
        />
      </Link>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-b-md">
        <h3 className="text-gray-200 font-bold text-xl">$ {precio.toLocaleString('es-AR')}</h3>
        <Link
          to={`/item/${id}`}
          className="bg-gray-700 font-semibold hover:bg-gray-600 py-2 px-3 text-sm text-white rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none transition-all"
        >
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default Item;
