import React from "react";

import '../Courses/courses.css'
import imageOne from '../../../Assets/images/Courses-img1.png'
import imageTwo from '../../../Assets/images/Courses-img2.png'
import imageThree from '../../../Assets/images/Courses-img3.png'
import Left from '../../../Assets/images/left.svg'
import Right from '../../../Assets/images/right.svg'

function Courses (){
    return(
        <section className="courses">
            <div className="container">
                <h2 className="courses__headding">
                   Our Popular Courses
                </h2>

                <p className="courses__desc">
                    Amet minim mollit non deserunt ullamco est sit  aliqua dolor <br /> do amet sint. Velit officia consequat.
                </p>

                <ul className="courses__list">
                    <li className="courses__item">
                        <img src={imageOne} alt="" width={360} height={190} />

                        <div className="courses__box">
                           <h4 className="courses__name">
                            UX UI Design
                           </h4>
                             
                             <span className="limit">
                                (3 Set available)
                             </span>
                        </div>
                    </li>

                    <li className="courses__item">
                        <img src={imageTwo} alt="" width={360} height={190} />

                        <div className="courses__box">
                           <h4 className="courses__name">
                            UX UI Design
                           </h4>
                             
                             <span className="limit">
                             (9 Set available)
                             </span>
                        </div>
                    </li>

                    <li className="courses__item">
                        <img src={imageThree} alt="" width={360} height={190} />

                        <div className="courses__box">
                           <h4 className="courses__name">
                            UX UI Design
                           </h4>
                             
                             <span className="limit">
                                (12 Set available)
                             </span>
                        </div>
                    </li>
                </ul>

                <div className="btn__wrapper">
                    <button className="left__btn" type="button">
                       <img  src={Left} alt="carusel left icon" width={25} height={25} />
                    </button>
                   
                   <button className="right__btn" type="button">
                       <img  src={Right} alt="carusel right icon" />   
                   </button>
                </div>
            </div>
        </section>
    )
}

export default Courses ;