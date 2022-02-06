import ItemListContainer from "./ItemList/ItemListContainer";
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Cart from "./Cart/Cart";
import Home from "./Home";
import Contacto from "./Contacto";
import Success from "./Success";

const Main = () => {
  return (
    <main className="min-h-[39.5rem]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/success" element={<Success />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
