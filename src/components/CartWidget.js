import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const CartWidget = () => {

    const { cartQuantity } = useContext(cartContext)
    return (
        <div>
            <p className="flex text-xl text-white p-2 items-center">
                <span className="mr-1">
                    {cartQuantity() > 0 ? cartQuantity() : 0}
                </span>
                 <FaShoppingCart />
            </p>
        </div>
    )
}

export default CartWidget;
