import React from "react";
import worksImg from '../../../Assets/images/works-img.png'
import '../Works/works.css'

function Works (){
    return(
    <section className="works">
          <div className="container">
              <img src={worksImg} alt="several people working on computers"  width={720} height={550}/>

              <div className="works__box">

                 <h2 className="works__headding">
                    How It Works?
                 </h2>

                 <p className="works__desc">
                   Lorem Ipsum is simply dummy text of the printing typesetting industry.
                 </p>

                 <ul className="works__list">
                      <li className="works__item">
                          <div className="works__item--box">
                               <span className="step__number">
                                    1
                               </span>

                               <h3 className="works__item--headding">
                                  Step One
                               </h3>
                           </div>
                               <p className="works__item--desc">
                                  Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum is simply dummy text of the printing typesetting industry.
                               </p>
                          
                      </li>

                      <li className="works__item">
                          <div className="works__item--box">
                               <span className="step__number">
                                    1
                               </span>

                               <h3 className="works__item--headding">
                                  Step One
                               </h3>
                           </div>
                               <p className="works__item--desc">
                                  Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum is simply dummy text of the printing typesetting industry.
                               </p>
                          
                      </li>

                      <li className="works__item">
                          <div className="works__item--box">
                               <span className="step__number">
                                    1
                               </span>

                               <h3 className="works__item--headding">
                                  Step One
                               </h3>
                           </div>
                               <p className="works__item--desc">
                                  Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum is simply dummy text of the printing typesetting industry.
                               </p>
                          
                      </li>
                 </ul>
              </div>
          </div>
    </section>
    )
}

export default Works;