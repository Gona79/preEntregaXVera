import PropTypes from "prop-types";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
