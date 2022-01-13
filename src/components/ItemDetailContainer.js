import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { id } = useParams();

  const onAdd = (count) => setAdded(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://juanmg22.github.io/guitar-shop/src/productos.json")
        .then((response) => response.json())
        .then((json) => {
          const ProductoSeleccionado = json.find((e) => e.id === parseInt(id));
          setProducto(ProductoSeleccionado);
        });
      setLoading(false);
    }, 300);
  }, [id]);

  return <>{loading ? <Loader /> : <ItemDetail producto={producto} added={added} onAdd={onAdd} />}</>;
};

export default ItemDetailContainer;
