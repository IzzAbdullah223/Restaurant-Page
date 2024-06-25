
import HomeBackground from './background-home.png'

import ShopLogo from './Logo.png'

 
 
  export  const ExploreBTN= document.createElement("Button")

 ExploreBTN.textContent="Explore Menu"
 

  export function HomePage(){
document.body.style.backgroundImage=`url(${HomeBackground})`
document.body.style.backgroundRepeat="no-repeat"
document.body.style.backgroundPosition="center"
document.body.style.backgroundAttachment="fixed"
document.body.style.backgroundSize="cover"
document.body.style.overflow="hidden"

const Content = document.querySelector(".content")

Content.replaceChildren() // To remove the content of the page 

const HomeLogo = document.createElement("img")
HomeLogo.src=ShopLogo

const LogoText=document.createElement("p")
LogoText.textContent="Stat your day with a cup of "

const ColoredText = document.createElement("span")
ColoredText.textContent="Coffe!"



HomeLogo.classList.add("Homeimg")
LogoText.classList.add("Homep")
ColoredText.classList.add("Homespan")
ExploreBTN.classList.add("Homebutton")

Content.appendChild(HomeLogo)
Content.appendChild(LogoText)
LogoText.appendChild(ColoredText)
Content.appendChild(ExploreBTN)


}

HomePage()