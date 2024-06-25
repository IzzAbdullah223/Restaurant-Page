import Faceicon from './facebook-icon.svg'

import Instaicon from './instagram-icon.svg'

import Twittericon from './twitter-icon.svg'

import ContactBackground from './background-contact.png'

export  function Contactpage(){

    document.body.style.backgroundImage=`url(${ContactBackground})`
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.backgroundPosition="center"
    document.body.style.backgroundAttachment="fixed"
    document.body.style.backgroundSize="cover"
    document.body.style.overflow="hidden"
    const Content = document.querySelector(".content")

      Content.replaceChildren()

    const firstP = document.createElement("p")
          firstP.textContent = "We love hearing from our customers! Whether you have questions, want to place an order, or provide feedback, please get in touch with us"
          Content.appendChild(firstP)
          firstP.classList.add("Contactp")




    const secondP = document.createElement("p")
          secondP.textContent = " Address: 123 Coffee Street, Brewtown, CA 45678";
          Content.appendChild(secondP)
          secondP.classList.add("Contactp")



    const thirdP = document.createElement("p")
          thirdP.textContent = " (123) 456-7890 "
          Content.appendChild(thirdP)
          thirdP.classList.add("Contactp")


    const fourthP = document.createElement("p")
          fourthP.textContent = " Email: info@brewhaven.com "
          Content.appendChild(fourthP)
          fourthP.classList.add("Contactp")


      const IconsContainer = document.createElement("div")
            IconsContainer.classList.add("IconsContainer")
            Content.appendChild(IconsContainer)

      const faceIcon = document.createElement("img")
            faceIcon.src = Faceicon
            IconsContainer.appendChild(faceIcon)
 
      const InstaIcon = document.createElement("img")
            InstaIcon.src = Instaicon
            IconsContainer.appendChild(InstaIcon)

      const TwitterIcon = document.createElement("img")
            TwitterIcon.src =  Twittericon
            IconsContainer.appendChild(TwitterIcon)
            
    }