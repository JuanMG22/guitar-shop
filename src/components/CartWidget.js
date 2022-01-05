import { FaShoppingCart } from "react-icons/fa";

const CartWidget = (props) => {
    return (
        <div>
            <p className="flex text-xl text-white p-2">
                {props.cantidad} <FaShoppingCart />
            </p>
        </div>
    )
}

export default CartWidget;
