import { createContext, useContext, useState } from "react";


const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartContext = () => {
  const [cartList, setCartList] = useState([]);
  const [idOrder, setIdOrder] = useState("");

  return (
        <>
            
        </>
    )
};

export default CartContext;
