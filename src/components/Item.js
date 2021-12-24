const Item = ({ titulo, precio, pictureUrl }) => {
  return (
    <>
      <div className="max-w-xs bg-white border border-gray-900 rounded-lg overflow-hidden my-10 ml-5 hover:shadow-lg hover:shadow-gray-900 hover:scale-105 transition-all">
        <div className="px-4 py-2">
          <h1 className="text-gray-900 font-bold text-2xl uppercase">
            {titulo}
          </h1>
          <p className="text-gray-600 text-sm mt-1">
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
          <button className="px-3 py-1 bg-gray-800 text-sm text-gray-100 font-semibold rounded">
            Ver más
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
