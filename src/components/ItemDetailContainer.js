import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = (props) => {




  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch("../productos.json")
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
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
       
      </>
    );
  }
}

export default ItemDetailContainer
