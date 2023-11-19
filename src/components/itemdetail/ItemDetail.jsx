import ItemCount from "../itemcount/ItemCount"; // Asegúrate de que la ruta sea correcta

const ItemDetail = ({ item }) => {
  const onAdd = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} de ${item.title}`);
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <p>Precio: ${item.price}</p>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
      {/* Más detalles del ítem */}
    </div>
  );
};

export default ItemDetail;