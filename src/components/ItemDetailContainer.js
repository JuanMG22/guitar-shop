import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = (props) => {




  const [data, setData] = useState();
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
      <>
      <h2 className="text-3xl font-sans text-black text-center mt-5">Detalle de producto</h2>
        {data?.map((producto) => {
          return (
            <ItemDetail
              key={producto.id}
              titulo={producto.titulo}
              precio={producto.precio}
              pictureUrl={producto.imagen}
            />
          );
        })}
      </>
    );
  }
}

export default ItemDetailContainer
