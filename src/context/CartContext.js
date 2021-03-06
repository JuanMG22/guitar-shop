import { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  let cartLocalStorage = JSON.parse(localStorage.getItem("cartLocal"));

  
  const [cartList, setCartList] = useState(
    cartLocalStorage ? cartLocalStorage : []
  );
  
  localStorage.setItem("cartLocal", JSON.stringify(cartList));

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const indexUpdated = cartList.findIndex(
        (element) => element.item.id === item.id
      );
      cartList[indexUpdated].quantity =
        cartList[indexUpdated].quantity + quantity;
      setCartList([...cartList]);
    } else {
      const newObj = {
        item,
        quantity,
      };
      setCartList([...cartList, newObj]);
    }
  };

  const deleteItem = (id) => {
    const updatedCart = cartList.filter((element) => element.item.id !== id);
    setCartList(updatedCart);
  };

  const isInCart = (id) => {
    return cartList.some((element) => element.item.id === id);
  };

  const cartQuantity = () => {
    const cartQuantity = cartList.reduce(
      (accum, item) => (accum = accum + item.quantity),
      0
    );
    return cartQuantity;
  };

  const totalPrice = () => {
    return cartList.reduce(
      (accum, element) => accum + element.quantity * element.item.precio,
      0
    );
  };

  const clearCart = () => {
    setCartList([]);
  };

  const valorDelContexto = {
    cartList,
    addItem,
    deleteItem,
    clearCart,
    isInCart,
    cartQuantity,
    totalPrice,
  };

  return (
    <cartContext.Provider value={valorDelContexto}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
