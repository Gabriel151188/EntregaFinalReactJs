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

          <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink to="/category/sin alcohol" className="nav-link active">Sin Alcohol</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/aperitivos" className="nav-link active" >Aperitivos</NavLink>
              </li>
              <li className="nav-item">
                 <NavLink to="/category/vinoteca" className="nav-link active">Vinoteca</NavLink>
              </li>
          </ul>           
              
          </div>
      </nav>

      <CartWidget />

      </div>
  );
};

export default NavBar