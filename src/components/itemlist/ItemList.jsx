import Item from "../item/Item"; // Asegúrate de que la ruta sea correcta

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;