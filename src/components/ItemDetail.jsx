import React from 'react';
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import styles from './btn.module.css'; 




const ItemDetail = ({item, isLoading, addItem}) => {
  if (isLoading){
    return <h2>Cargando...</h2>;
  }
  
  if(!item){
    return "Producto no encontrado";
  }

  return <div className="card" style={{ backgroundColor: 'lightblue' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`../src/assets/img/${item.imageId}`} width={150} />
                <div style={{padding:"10px"}}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                  <p>Stock: {item.stock}</p>
                  <p>Categoria: {item.categoryId}</p>
                </div>
              </div>
              <button onClick={() => addItem(item, 1)} className={styles.buttonStyle}>Agregar al carrito</button>
        </div>;
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem:PropTypes.func,
};

export default ItemDetail
