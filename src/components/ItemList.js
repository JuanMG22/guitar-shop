import { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <section className="flex justify-evenly flex-wrap">
      {productos?.map((producto) => {
        return (
          <Item
            key={producto.id}
            titulo={producto.titulo}
            precio={producto.precio}
            pictureUrl={producto.imagen}
            id={producto.id}
          />
        );
      })}
    </section>
  );
};

export default ItemList;
