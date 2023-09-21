import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../utils"; 
import { createOrder } from "../services";
import Form from "./Form";
import styles from './btn.module.css'; 


const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [inputValues, setInputValues] = useState({
      name: '',
      surname: '',
      email: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const {cart, clear} = useContext(CartContext);
    const total = getCartTotal(cart);
   
    const handleCheckout = (name, surname, email) =>{
        const order = {  
             buyer: {
                 name: inputValues.name,
                 surname: inputValues.surname,
                 email: inputValues.email,
               
             },
            items: mapCartToOrderItems(cart),
            total,
            date: serverTimestamp(),
        };
        setIsLoading(true);
        createOrder(order)
        .then((docRef) =>{
            setOrderId(docRef.id);
            setIsLoading(false);
            clear();
        });
    };

  return (
    <div style={{backgroundColor: "lightgray" }} className={styles.formStyle}>

      <h1>Resumen de la compra</h1>

      {orderId && <p>El ID de la orden es: <span style={{fontWeight: "bold", fontSize: 30}}> {orderId}</span></p>}

      {!orderId && (

        <>
         <div>
            <h2>Productos</h2>
              <ul>
                {cart.map((item)=>(
                    <li key={item.id}>
                        <p>{item.title}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: {item.price}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                    </li>
                ))}
              </ul>
         </div>

      <p style={{fontWeight: "bold", fontSize: 30}}>Total de la compra: {total}</p>
        <div>
        <Form inputValues={inputValues} setInputValues={setInputValues} />
        </div>

      <button onClick={handleCheckout} className={styles.buttonStyle}>Finalizar Compra</button>
      {isLoading && <p>Procesando compra...</p>}
      </>
  )}   
   </div>
  );
};

export default Checkout
