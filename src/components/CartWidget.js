import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const CartWidget = () => {

    const { cartQuantity } = useContext(cartContext)
    return (
        <div>
            <p className="flex text-xl text-white p-2">
                {cartQuantity() > 0 && cartQuantity()} <FaShoppingCart />
            </p>
        </div>
    )
}

export default CartWidget;
