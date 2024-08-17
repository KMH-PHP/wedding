import {

  Link,
  Outlet
} from "react-router-dom";

// import Home from './home'
// import Sale from "./sale";
// import About from "./about";
// import Service from "./service";
// import Contact_us from "./contact_us";
// import Booking from "./booking";
// import Sign_in from "./sign_in";
import logo from "../assets/wedding_img/Logo.svg";
// import Register from "./register";

const Header = () => {
  return (
      <>
        <div className="bg-[#CDB886]">
        <nav className="flex justify-between items-center w-[92%] mx-auto ">
          <div className="items-center">
            <Link to="/"><img src={logo} alt="logo" className="logo max-w-full h-auto"/></Link>
          </div>
          <div>
                <ul className="flex items-center gap-[4vW]">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/sale">Sale</Link></li>
                  <li><Link to="/service">Service</Link></li>
                  <li><Link to="/contact_us">Contact Us</Link></li>                
                </ul>
          </div>
          <div>
                 <button className="rounded-md px-6 py-2 border m-4"><Link to="/booking">Booking</Link></button>
                 <button className="rounded-md px-6 py-2 bg-[#463A1C] text-white"><Link to="/sign_in">Sign in</Link></button>              
          </div>
          <Outlet />
        </nav>
        </div>
      </>
  )
}

export default Header