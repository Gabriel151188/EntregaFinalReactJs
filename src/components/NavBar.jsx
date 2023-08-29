import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import casa from "../assets/img/casa.png";



const NavBar = () =>{
  return(
    <div >
      <nav className="navbar navbar-expand-lg ">
         <div className="container-fluid" >
          {/* {Brand} */}
            <h1>
              <Link to="/">
              <img src={casa} style={{ width: '30%', height: 'auto' }}/>
              </Link>
            </h1>
          
          
       

          {/* {Links} */}
          <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink to="/category/sinalcohol" className="nav-link active">Sin Alcohol</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/aperitivos" className="nav-link active" >Aperitivos</NavLink>
              </li>
              <li className="nav-item">
                 <NavLink to="/category/wines" className="nav-link active">Vinoteca</NavLink>
              </li>
          </ul>

              {/* {CartWidget} */}
              <CartWidget />
              
          </div>
      </nav>
      


      </div>
  );
};

export default NavBar