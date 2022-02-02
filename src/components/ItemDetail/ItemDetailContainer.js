import { collection, doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebase";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ItemCount from "./ItemCount";

const MySwal = withReactContent(Swal);
const mostrarToast = () => {
  MySwal.fire({
    toast: true,
    position: "bottom-end",
    icon: "success",
    iconColor: "#374151",
    title: "Se agregó al carrito",
    showConfirmButton: false,
    timer: 3000,
  });
};

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { id } = useParams();

  const { addItem } = useContext(cartContext);

  const onAdd = (count) => {
    addItem(producto, count);
    setAdded(true);
    mostrarToast();
  };

  const isAdded = added ? (
    <Link
      className="mx-5 px-3 py-1 bg-gray-800 text-sm text-gray-100 font-semibold"
      to="/cart"
    >
      Ir al Carrito
    </Link>
  ) : (
    <ItemCount stock={5} initial={1} onAdd={onAdd} />
  );

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
        <ItemDetail producto={producto} isAdded={isAdded} />
      )}
    </>
  );
};

export default ItemDetailContainer;
