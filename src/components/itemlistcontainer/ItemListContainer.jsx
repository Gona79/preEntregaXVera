import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ItemList from '../itemlist/ItemList'; // Asegúrate de que la ruta sea correcta

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve([{ id: 1, title: "Producto 1", price: 100 }, { id: 2, title: "Producto 2", price: 200 }]); // Simula datos de productos
      }, 2000);
    });

    getItems.then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <ItemList items={items} /> {/* Muestra los productos */}
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;