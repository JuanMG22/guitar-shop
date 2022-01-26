import { collection, doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { db } from "../firebase/firebase";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { id } = useParams();

  const { addItem } = useContext(cartContext);
  const MySwal = withReactContent(Swal);

  const mostrarToast = () => {
    MySwal.fire({
      toast: true,
      position: "bottom-end",
      icon: "success",
      title: "Se agregó al carrito",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const onAdd = (count) => {
    addItem(producto, count);
    setAdded(true);
    mostrarToast();
  };
  useEffect(() => {
    const coleccionProductos = collection(db, "productos");
    const docRef = doc(coleccionProductos, id);
    const pedido = getDoc(docRef);
    pedido
      .then((resultado) => {
        const producto = resultado.data();
        setProducto({ ...producto, id });
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
