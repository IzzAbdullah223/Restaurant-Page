import './style.css'


import { HomePage, ExploreBTN } from "./Home.js";

import { MenuPage } from './Menu.js';

import { Contactpage  } from "./Contact.js"

const homeBtn = document.querySelector(".Homebtn")

const contactBtn = document.querySelector(".Contactbtn")

const menuBtn = document.querySelector(".Menubtn")


homeBtn.addEventListener("click",()=>{
    HomePage()
})

ExploreBTN.addEventListener("click",()=>{
    MenuPage()
})

contactBtn.addEventListener("click",()=>{
    Contactpage()
})

menuBtn.addEventListener("click",()=>{
   MenuPage()
})

 


 


 