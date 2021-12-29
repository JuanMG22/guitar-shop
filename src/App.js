import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Guitar Shop" />
      <ItemDetailContainer />
    </>
  );
}

export default App;
