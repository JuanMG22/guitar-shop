import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { FaSearch } from "react-icons/fa";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const handleSearchChange = (e) => {
    setSearchData(e.target.value,);
  };

  const submitBusqueda = (e) => {
    e.preventDefault();
    filtrar(searchData);
  }

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
  }, [id, searchData]);

  const filtrar = (terminoBusqueda) => {
  let resultadosBusqueda = data.filter((elemento) => {
    if (elemento.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
      return elemento;
     }
   });
   setData(resultadosBusqueda);
}


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3 className="text-2xl font-sans text-gray-60 text-center mt-5">
            Lista de productos
          </h3>
          <form className="flex items-center max-w-md mx-auto rounded-md mt-5" onSubmit={submitBusqueda} >
            <div className="w-full">
              <input
                type="search"
                className="w-full h-full px-4 py-2 text-gray-800 rounded-md bg-gray-100 focus:outline-none"
                placeholder="Buscar"
                name="search"
                x-model="search"
                onChange={handleSearchChange}
              />
            </div>
            <button
              type="submit"
              className="flex items-center bg-gray-100 justify-center w-10 py-2 text-gray-900 rounded-r-md"
            >
              <FaSearch />
            </button>
          </form>
          <ItemList productos={data} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
