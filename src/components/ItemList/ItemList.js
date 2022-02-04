import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <section className="flex justify-center flex-wrap">
      {productos?.map((producto) => {
        return (
          <Item
            key={producto.id}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
            precio={producto.precio}
            pictureUrl={producto.imagen}
            id={producto.id}
          />
        );
      })}
      {productos && productos.length === 0 && (
        <h3 className="flex justify-center items-center mt-40 text-xl text-gray-800">
          No se encontró ningún producto
        </h3>
      )}
    </section>
  );
};

export default ItemList;
