import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateProvider";
import Search from "./Search";



const Header = () => {
 //context
  const {state: {cart}} = useStateContext();

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          {/* logo */}
          <Link to="/">
            <a className="navbar-brand text-white" href="#">
             SHOPPING CART
            </a>
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </Link>
            </li>
          </ul>
                
          {/* search component */}
          <Search/>

          {/* cart */}
          <Link to="/cart">
            <AiOutlineShoppingCart size={26} />
            <span className="">{cart.length} </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
