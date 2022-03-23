import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ItemSearch from "./ItemSearch";
import Helmet from "react-helmet";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const handleSearchChange = (e) => {
    setSearchData(e.target.value);
  };

  let filtroBusqueda =
    data && searchData
      ? data.filter((p) =>
          p.titulo.toLowerCase().includes(searchData.toLowerCase()) ||
          p.categoria.toLowerCase().includes(searchData.toLowerCase())
        )
      : data;

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

  const title = id ? id : 'Productos'

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>{`Guitar Shop - ${title}`}</title>
          </Helmet>
          <h3 className="text-2xl font-sans text-gray-60 text-center mt-5">
            Lista de productos
          </h3>
          <ItemSearch handleSearchChange={handleSearchChange} />
          <ItemList productos={filtroBusqueda} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
