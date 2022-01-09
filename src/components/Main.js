import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Cart from "./Cart";

const Main = () => {
    return (
        <main className="min-h-[39.72rem]">
            
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenido a Guitar Shop" />}/>
                <Route path="/categoria/:id" element={<ItemListContainer greeting="Bienvenido a Guitar Shop"/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </main>
    )
}

export default Main;
