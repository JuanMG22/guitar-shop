import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
