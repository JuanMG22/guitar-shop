import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { db } from "../firebase/firebase";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { id } = useParams();

  const { addItem } = useContext(cartContext)

  const onAdd = (count) => {
    addItem(producto, count);
    setAdded(true);
  };
  useEffect(() => {

      const coleccionProductos = collection(db, "productos");
      const pedido = getDocs(coleccionProductos);
      pedido
      .then((resultado) => {
        const docs = resultado.docs;
        const docs_formateado = docs.map((doc) => {
          const producto = {
            id: doc.id,
            ...doc.data(),
          };
          return producto;
        });
        const ProductoSeleccionado = docs_formateado.find((e) => e.id === id);
        setProducto(ProductoSeleccionado);
      })
      .finally(() => setLoading(false));

  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ItemDetail producto={producto} added={added} onAdd={onAdd} />
      )}
    </>
  );
};

export default ItemDetailContainer;
