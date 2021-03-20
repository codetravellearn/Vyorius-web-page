import React from "react";
import Logo from "../../assests/logo.png";
import "./styles.scss"
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div className="logo">
                        <img  src={Logo} alt="logo..." />
                    </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Why Vyorius?
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Solutions
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Product
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Use Cases
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Team
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Partners
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Contact us
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                <button class="btn btn-primary" type="submit" id = "btn">Launch Vyorius > </button>
               </ul>
                
                </div>
            </div>
        </nav>
    )

}

export default Navbar;