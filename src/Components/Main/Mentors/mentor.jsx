import React from "react";

import '../Mentors/mentor.css'
import imageOne from '../../../Assets/images/mentor1.png'
import imageTwo from '../../../Assets/images/mentor2.png'
import imageThree from '../../../Assets/images/mentor3.png'
import imageStar from '../../../Assets/images/Star.svg'


function Mentors (){
    return(
        <section className="mentor">
            <div className="container">
                <h2 className="mentor__headding">
                   Our Top Mentors
                </h2>

                <p className="mentor__desc">
                    Amet minim mollit non deserunt ullamco est sit  aliqua dolor <br /> do amet sint. Velit officia consequat.
                </p>

                <ul className="mentor__list">
                    <li className="mentor__item">
                        <img src={imageOne} alt="" width={360} height={190} />

                        <div className="mentor__box">
                           <h4 className="mentor__name">
                           Jenny Wilson
                           </h4>
                             
                             <span className="limit">
                             UX UI Designer
                             </span>

                             <div className="star__wr">
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <span className="limit">(132 reviews)</span>
                             </div>
                             
                        </div>
                    </li>

                    <li className="mentor__item">
                        <img src={imageTwo} alt="" width={360} height={190} />

                        <div className="mentor__box">
                           <h4 className="mentor__name">
                           Guy Hawkins
                           </h4>
                             
                             <span className="limit">
                             Developer
                             </span>

                             <div className="star__wr">
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <span className="limit">(132 reviews)</span>
                             </div>
                        </div>
                    </li>

                    <li className="mentor__item">
                        <img src={imageThree} alt="" width={360} height={190} />

                        <div className="mentor__box">
                           <h4 className="mentor__name">
                           Robert Fox
                           </h4>
                             
                             <span className="limit">
                             Digital Marketer
                             </span>

                             <div className="star__wr">
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <img src={imageStar} alt="" width={16} height={16}/>
                               <span className="limit">(132 reviews)</span>
                             </div>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default Mentors ;