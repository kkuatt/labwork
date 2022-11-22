import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
    // Set state
    // Make Handleclick Function
  
    render() {
      return (
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Kuat logo</h1>

          <ul className="nav-menu">
            {MenuItems.map((item, index) =>{
                return(
                    <li key={index}>
                <Link className=
                {item.cName} to={item.url}>
                    <i className={item.icon}>
                    </i>{item.title}
                </Link>
            </li>
                )
            })}
            <button>Sign Up</button>
          </ul>
        </nav>
      );
    }
  }
  
  export default Navbar;