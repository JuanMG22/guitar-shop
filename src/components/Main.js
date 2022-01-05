import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

const Main = () => {
    return (
        <main>
            
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenido a Guitar Shop" />}/>
                <Route path="/categoria/:id" element={<ItemListContainer greeting="Bienvenido a Guitar Shop"/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    )
}

export default Main;
