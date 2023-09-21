import React from "react";
import { Link } from "react-router-dom";


const MyComponent = ({ items, isLoading}) => {
  if(isLoading){
    return <h2>Cargando...</h2>;
  }
  
  return (
    <div className="row" style={{ backgroundColor: 'lightblue'}}>

      {items.map((item) => (
        <div key={item.id} className="col-md-4 mb-4" >
          <div className="card" style={{ backgroundColor: 'lightgreen'}}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">${item.price}</p>
              <p className="card-text">{item.categoryId}</p>
              <img src={`../src/assets/img/${item.imageId}`} width={100} />
              <div >
              <Link to={`/item/${item.id}`} className="btn btn-primary">
                VER DETALLE
              </Link></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
