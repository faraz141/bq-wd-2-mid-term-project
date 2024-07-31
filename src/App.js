import React, { useEffect} from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./component/layout/navbar/Navbar";
import Home from "./component/layout/home/home";
import About from "./component/layout/about/About";
import Services from "./component/layout/services/Services";
import Contact from "./component/layout/contact/Contact";
import Properties from "./component/layout/properties/properties";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to home if "learn more" in properties is clicked
    if (location.state && location.state.fromProperties) {
      navigate("/");
    }
  }, [location.state, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
};

export default App;
