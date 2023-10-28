import './App.css'; // Importando los estilos
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Alfa y Omega Estética 🌸" />
      {/* Aquí puedes agregar más componentes según lo necesites */}
    </div>
  );
}

export default App;
