import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar componentes de react-router-dom

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Alfa y Omega Estética 🌸" />} />
          {/* Aquí puedes agregar más rutas según lo necesites */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
