import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {

    return (
        <>
            <h2 className="text-3xl font-sans text-black text-center mt-4 h-100">{props.greeting}</h2>
            <h3 className="text-2xl font-sans text-black text-center mt-5">Lista de productos</h3>

            <ItemList />
        </>
    )
}

export default ItemListContainer
