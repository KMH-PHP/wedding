import {
  BrowserRouter as Router,
  Routes,
  Route,
  //useParams,
} from "react-router-dom";

import Home from './pages/home'
import Sale from "./pages/sale";
import About from "./pages/about";
import Service from "./pages/service";
import Contact_us from "./pages/contact_us";
import Booking from "./pages/booking";
import Sign_in from "./pages/sign_in";
import Register from "./pages/register";
import Navbar from "./pages/Navbar";





function App() {
  return (
    <>
  {/* <Home />
  <About />
  <Service />
  <Contact_us /> */}
    {/* <Register /> */}
    {/* <Navbar /> */}
    <Sale />
    {/* <Router>
       <Routes>    
          <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/sale" element={<Sale />}/>
          <Route path="/service" element={<Service />}/>
          <Route path="/contact_us" element={<Contact_us />}/>
          <Route path="/booking" element={<Booking />}/>
          </Route>
          <Route path="/sign_in" element={<Sign_in />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router> */}
     
    </>
  )
}

export default App
