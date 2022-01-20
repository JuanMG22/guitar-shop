import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    const coleccionProductos = collection(db, "productos")
    const pedido = getDocs(coleccionProductos)

    pedido
            .then((resultado)=>{
                const docs = resultado.docs
                const docs_formateado = docs.map(doc=>{
                    const producto = {
                        id : doc.id,
                        ...doc.data()
                    }
                    return producto
                })
                if (!id) {
                  setData(docs_formateado)
                } else {
                  const filterCategoria = docs_formateado.filter((e) => e.categoria === id);
                  setData(filterCategoria);
                }
            })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <h2 className="text-3xl font-sans text-black text-center mt-4 h-100">
            {props.greeting}
          </h2>
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
