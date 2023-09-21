import { useContext } from "react";
import CartContext from "../context/CartContext";
import { getCartQuantity } from "../utils";
import { Link } from 'react-router-dom';


const CartWidget = () =>{
    const {cart} = useContext(CartContext)

    const quantity = getCartQuantity(cart)

     return <div className="d-flex justify-content-end"> 
        
        <button className="btn btn-outline-primary position-relative ">
            <Link to="/checkout">
                <i className="bi bi-cart2">
                </i>
            </Link>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">    
            <span className="visually-hidden">productos en cart</span>
        {quantity > 0 ? quantity : ""}
        </span>
        </button> 
    </div>;
};

export default CartWidget;