import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
