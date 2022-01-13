import { Link } from "react-router-dom";

const Item = ({ titulo, precio, pictureUrl, id }) => {
  return (
    <>
      <article className="max-w-xs bg-white border border-gray-900 -lg overflow-hidden my-10 ml-5 hover:shadow-lg hover:shadow-gray-900 hover:scale-105 transition-all">
        <div className="px-4 py-2 text-center">
          <h1 className="text-gray-900 font-bold text-2xl uppercase">
            {titulo}
          </h1>
          <p className="text-gray-600 text-sm mt-1 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </p>
        </div>
        <img
          className="h-56 w-full object-contain mt-2"
          src={pictureUrl}
          alt="Guitar"
        />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-gray-200 font-bold text-xl">$ {precio}</h1>
          <Link
            to={"/item/" + id}
            className="bg-gray-700 font-semibold hover:bg-gray-600 py-2 px-3 text-sm text-white"
          >
            Ver más
          </Link>
        </div>
      </article>
    </>
  );
};

export default Item;
