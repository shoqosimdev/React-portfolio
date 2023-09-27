import React from "react";

import '../Footer/footer.css'
import Logo from "../../Assets/images/Whitelogo.svg"
function Footer (){
    return(
        <footer className="footer">
             <div className="container">
                <div className="wrapper">
                    <div className="logo__box">
                        <img src={Logo} alt="site logo" width={160}  height={28}/>

                        <p className="logo__box--desc">
                          Lorem Ipsum is simply the dummy text of the printing type. 
                        </p>
                    </div>

                    <ul className="company__list">
                       <h3 className="company__headding">
                            Company
                       </h3>

                       <li className="company__item">
                           <a href="">
                              About
                           </a>
                       </li>

                       <li className="company__item">
                           <a href="">
                           Careers
                           </a>
                       </li>

                       <li className="company__item">
                           <a href="">
                              Press
                           </a>
                       </li>
                    </ul>

                    <ul className="Community__list">
                       <h3 className="Community__headding">
                            Team Plans
                       </h3>

                       <li className="Community__item">
                           <a href="">
                              Blog
                           </a>
                       </li>

                       <li className="Community__item">
                           <a href="">
                           Studets
                           </a>
                       </li>

                       <li className="Community__item">
                           <a href="">
                           Scholarships
                           </a>
                       </li>
                    </ul>

                    <ul className="Teaching__list">
                       <h3 className="Teaching__headding">
                         Teaching
                       </h3>

                       <li className="Teaching__item">
                           <a href="">
                           Become A Teacher
                           </a>
                       </li>

                       <li className="Teaching__item">
                           <a href="">
                           Teaching Academy
                           </a>
                       </li>

                    </ul>

                    <ul className="Social__list">
                       <h3 className="Social__headding">
                       Be social
                       
                       </h3>

                       <li className="Social__item">
                           <a href="">
                           Facebook
                           </a>
                       </li>

                       <li className="Social__item">
                           <a href="">
                           Twitter
                           </a>
                       </li>

                       <li className="Social__item">
                           <a href="">
                           Instagram
                           </a>
                       </li>

                       <li className="Social__item">
                           <a href="">
                            Linkedin
                           </a>
                       </li>
                    </ul>
                </div>

                <span className="copyright">Copyright 2020.com, All rights reserved.</span>
             </div>
        </footer>
    )
}

export default Footer