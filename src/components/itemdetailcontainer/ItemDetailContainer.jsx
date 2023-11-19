import { useState, useEffect } from "react";
import ItemDetail from "../itemdetail/ItemDetail"; // Asegúrate de que la ruta sea correcta

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: itemId, title: "Producto Detallado", price: 300 }); // Datos simulados
      }, 2000);
    });

    getItem.then((data) => {
      setItem(data);
    });
  }, [itemId]);

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;