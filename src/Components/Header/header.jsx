
import React from "react";
import '../Header/header.css';
import '../Header/header.css'
import logo from '../../Assets/images/logo.svg';

// =============Component Header========== 

function Header (){
    return(
        <header className="header">
            <div className="container">
                <a href="#">
                    <img src={logo} alt="site logo" width={152} height={27} />
                </a>

                <nav className="nav">
                     <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#">
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#">
                            Course
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#">
                                Features
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#">
                                Blog
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#">
                                Contact
                            </a>
                        </li>
                     </ul>
                </nav>

                <div className="header__right">

                    <a className="login__link" href="">
                        Login
                    </a>
                    <a className="signup__link" href="">
                        Signup
                    </a>
                    
                </div>
            </div>
        </header>
        )
    }

    export default Header;