import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://juanmg22.github.io/guitar-shop/src/productos.json")
      .then((response) => response.json())
      .then((json) => {
        if (!id) {
          setData(json);
        } else {
          const filterCategoria = json.filter((e) => e.categoria === id);
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
