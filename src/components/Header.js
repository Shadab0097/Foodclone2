import { LOGO } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo_containor">
          <img className=" logo" src={LOGO}/>
        </div>
        <div className="nav_item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
  
  
      </div>
    )
  };

  export default Header;