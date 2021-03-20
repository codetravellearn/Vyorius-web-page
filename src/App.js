import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
 import MapImage from "./assests/MapImage.png";

 import './default.scss';

function App() {
  return ( 
    <>
    <Navbar />
    
    <div className="wrap">
      
        <div className="item" id= "intro">
            <Intro />
        </div>
       
       
        <div className="item">
          <img src={MapImage} alt = "image" id ="mapImg" />
        </div>
        
    </div>
    
    <Footer />

    </>
  );
}

export default App;
