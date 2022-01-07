import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {


  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
      setTimeout(() => {
          fetch("https://juanmg22.github.io/guitar-shop/src/productos.json")
            .then((response) => response.json())
            .then((json) => {
              const ProductoSeleccionado = json.find(e => e.id === parseInt(id))
              setProducto(ProductoSeleccionado);
                console.log(ProductoSeleccionado);
            })
            setLoading(false);
      }, 300);
      
}, [id])

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
      <section className="min-h-[39.5rem]">
        <ItemDetail producto={producto}/>
      </section>
    );
  }
}

export default ItemDetailContainer
