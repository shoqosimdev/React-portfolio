
import React from "react";
import Hero from "./Hero/hero";
import Courses from "./Courses/courses";
import Works from './Works/works'
import Mentors from "./Mentors/mentor";
import Choosen from "./Choosen/choose";
import News from "./News/news";


import './main.css'

function Main (){
    return(
    <main>
       <Hero/> 
       <Courses/>
       <Works/>
       <Mentors/>
       <Choosen/>
       <News/>
    </main>
    )
}

export default Main;