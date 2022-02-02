import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const coleccionProductos = collection(db, "productos");
    let pedido;

    if (id) {
      const filtro1 = where("categoria", "==", id);
      const consulta = query(coleccionProductos, filtro1);
      pedido = getDocs(consulta);
    } else {
      pedido = getDocs(coleccionProductos);
    }
    pedido
      .then((resultado) => {
        setData(resultado.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3 className="text-2xl font-sans text-black text-center mt-5">
            Lista de productos
          </h3>
          <ItemList productos={data} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
