import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ProductCard from './components/ProductCard'
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Guitar Shop" />
      <ProductCard titulo="Musicman JP-6" precio={550000} />
    </>
  );
}

export default App;
