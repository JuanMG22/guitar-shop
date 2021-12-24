import { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const productos = [
    {
      precio: 550000,
      id: 1,
      titulo: "MUSICMAN JP-6",
      categoria: "Musicman",
      descripcion: "Guitarra Musicman signature John Petrucci",
      imagen:
        "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-7.png?1631591626",
    },
    {
      precio: 580000,
      id: 2,
      titulo: "MUSICMAN Majesty",
      categoria: "Musicman",
      descripcion: "Guitarra Musicman signature John Petrucci",
      imagen:
        "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-77.png?1631591609",
    },
  ];

  const getProductos = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
  };

  const fetchData = async () => {
    try {
      const res = await getProductos();
      setProducto(productos);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [producto, setProducto] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className="flex justify-start">
        {productos?.map((producto) => {
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
