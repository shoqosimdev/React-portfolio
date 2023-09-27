import React from "react";
import chooseImg from '../../../Assets/images/choosenimg.png'
import '../Choosen/choose.css'

function Choose (){
    return(
    <section className="choose">
          <div className="container">
              
          <div className="choose__box">

<h2 className="choose__headding">
    Why Choose Us
</h2>

<p className="choose__desc">
    Lorem Ipsum is simply dummy text of the printing typesetting industry.
</p>

<div className="choosen__box">
<ul className="choose__list">
     <li className="choose__item">
         <h3>
            12+
         </h3>
        <p className="choose__item--desc">
           Years Experience
        </p>
         
     </li>

     <li className="choose__item">
         <h3>
         350+
         </h3>
        <p className="choose__item--desc">
           Teachers
        </p>
         
     </li>

     <li className="choose__item">
         <h3>
            30k+
         </h3>
        <p className="choose__item--desc">
          Students 
        </p>
         
     </li>

     <li className="choose__item">
         <h3>
            40+
         </h3>
        <p className="choose__item--desc">
        Total Courses
        </p>
         
     </li>
</ul>
</div>
</div>

              <img className="choose__img" src={chooseImg} alt="several people working on computers"  width={620} height={550}/>
          </div>
    </section>
    )
}

export default Choose;