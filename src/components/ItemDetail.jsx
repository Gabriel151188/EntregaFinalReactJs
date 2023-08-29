import React from 'react';
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";


const ItemDetail = ({item, isLoading}) => {
  if (isLoading){
    return <h2>Cargando...</h2>;
  }
  
  if(!item){
    return "Producto no encontrado";
  }

  return <div className="card" style={{ backgroundColor: 'lightgreen'}}>
    
    <h1>{item.name}</h1>
    <p>${item.price}</p>
    <p>{item.category}</p>
   
    
  </div>;
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail
