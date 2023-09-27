
import React from "react";
import herobg from '../../../Assets/images/hero-bg.png'

import '../Hero/hero.css'

function Hero (){
    return(
        <section className="hero">
            <div className="container">
                <div className="hero__box">
                    <h1 className="hero__headding">
                        Digital <br /> <span className="headding__word">Learning</span> School
                    </h1>
                        
                        <p className="hero__desc">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non .
                        </p>

                        <a className="hero__link" href="#">
                            Get Started 
                        </a>
                </div>

                <img src={herobg} alt="several people looking at the phone" width={600} height={550}  />
            </div>
        </section>
    )
}

export default Hero;