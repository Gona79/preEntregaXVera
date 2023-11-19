const Item = ({ item }) => {
    return (
      <div>
        <h3>{item.title}</h3>
        <p>Precio: ${item.price}</p>
        {/* Más detalles del ítem si es necesario */}
      </div>
    );
  };
  
  export default Item;