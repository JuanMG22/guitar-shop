import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
  
  useEffect(() => {
      setTimeout(() => {
          fetch("https://juanmg22.github.io/guitar-shop/src/productos.json")
            .then((response) => response.json())
            .then((json) => {
              if (!id) {
                setData(json);
              } else {
                const filterCategoria = json.filter(e => e.categoria === id);
                  setData(filterCategoria);
              }
            })
            setLoading(false);
      }, 150);
}, [id])


    if (loading) {
    return (
      <>
        <div className="flex justify-center align-center">
          <img
            src="http://soldadoresymotores.com/site/images/loader.gif"
            alt="loader"
          />
        </div>
      </>
    );
  } else {
      return (
          <>
              <h2 className="text-3xl font-sans text-black text-center mt-4 h-100">{props.greeting}</h2>
              <h3 className="text-2xl font-sans text-black text-center mt-5">Lista de productos</h3>
    
              <ItemList productos={data}/>
          </>
      )
  }

}

export default ItemListContainer
