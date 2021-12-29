import { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      setTimeout(() => {
          fetch("https://juanmg22.github.io/guitar-shop/src/productos.json")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            setLoading(false);
      }, 2000);
}, [])

  if (loading) {
    return (
      <>
        <div className="flex justify-center align-center">
          <img
            src="http://soldadoresymotores.com/site/images/loader.gif"
            alt=""
          />
        </div>
      </>
    );
  } else {
    return (
      <div className="flex justify-evenly flex-wrap">
        {data?.map((producto) => {
          return (
            <Item
              key={producto.id}
              titulo={producto.titulo}
              precio={producto.precio}
              pictureUrl={producto.imagen}
            />
          );
        })}
      </div>
    );
  }
};

export default ItemList;
