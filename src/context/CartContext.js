import { createContext, useState } from "react";


export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      const newObj = {
        item,
        quantity
      }
      setCartList([...cartList, newObj])
    }
  }

  const deleteItem = (id) => {
    const updatedCart = cartList.filter(element => element.item.id !== id);
    setCartList(updatedCart);
  }

  const clearCart = () => {
    setCartList([]);
  }

  const isInCart = (id) => {
    return cartList.some(element => element.item.id === id);
  }

  const cartQuantity = () => {
    return cartList.reduce((accum, item) => accum = accum + item.quantity, 0)
  }

  function totalPrice(){//precio total de mi carrito
        return cartList.reduce((accum, valor)=>(accum+(valor.quantity*valor.cartItem.price)),0)
    }

  const valorDelContexto = { 
        cartList,
        addItem,
        deleteItem,
        clearCart,
        isInCart,
        cartQuantity,
        totalPrice
    }

  return (
        <cartContext.Provider value={valorDelContexto}>
            {children}
        </cartContext.Provider>
    )
};

export default CartProvider;
