import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {




  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          fetch("https://juanmg22.github.io/guitar-shop/src/productos.json")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            setLoading(false);
      }, 300);
}, [])

  if (loading) {
    return (
      <>
        <div className="flex justify-center align-center">
          <img
            src="http://soldadoresymotores.com/site/images/loader.gif"
            alt=""
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <ItemDetail producto={data}/>
      </>
    );
  }
}

export default ItemDetailContainer
