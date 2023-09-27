
import React from "react";

import '../News/news.css'

function News (){
    return(
    <section className="news">
          <div className="container">
               <h2 className="news__headding">
                   Subscribe For Get Update News
               </h2>

               <p className="news__desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit
               </p>

               <a className="news__link" href="#">
                  Subscribe Now  
               </a>
          </div>
    </section>
    )
}

export default News