import MenuBackground from './background-menu.png'

export function MenuPage(){

    document.body.style.backgroundImage=`url(${MenuBackground})`
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.backgroundPosition="center"
    document.body.style.backgroundAttachment="fixed"
    document.body.style.backgroundSize="cover"
    document.body.style.overflow="hidden"

    const Content = document.querySelector(".content")
        
        Content.replaceChildren()


        Content.style.height="90vh"

    const GridContainer = document.createElement("div")
          GridContainer.classList.add("GridContainer")
          Content.appendChild(GridContainer)
       

    const GridItem = document.createElement("div")
          GridItem.classList.add("GridItem")
          GridContainer.appendChild(GridItem)
   

    const Top = document.createElement("div")
          Top.classList.add("Top")
          GridItem.appendChild(Top)
       


    const DrinkName = document.createElement("h2")
          DrinkName.classList.add("Top")
          DrinkName.textContent="Espresso"
          Top.appendChild(DrinkName)

    const Price = document.createElement("h2")
          Price.classList.add("Top")
          Price.textContent="$ 3.00"
          Top.appendChild(Price)

    const DrinkText = document.createElement("span")
          DrinkText.textContent="Rich and bold shot of pure coffe"
          GridItem.appendChild(DrinkText)
 
        //End of first item

        const GridItem2 = document.createElement("div")
          GridItem2.classList.add("GridItem")
          GridContainer.appendChild(GridItem2)
        

    const Top2 = document.createElement("div")
          Top2.classList.add("Top")
          GridItem2.appendChild(Top2)
         


    const DrinkName2 = document.createElement("h2")
          DrinkName2.classList.add("Top")
          DrinkName2.textContent="Americano"
          Top2.appendChild(DrinkName2)

    const Price2 = document.createElement("h2")
          Price2.classList.add("Top")
          Price2.textContent="$ 3.50"
          Top2.appendChild(Price2)

    const DrinkText2 = document.createElement("span")
          DrinkText2.textContent="Espresso with hot water for a smooth taste"
          GridItem2.appendChild(DrinkText2)

          //End of secondItem

          const GridItem3 = document.createElement("div")
          GridItem3.classList.add("GridItem")
          GridContainer.appendChild(GridItem3)
       

    const Top3 = document.createElement("div")
          Top3.classList.add("Top")
          GridItem3.appendChild(Top3)
         


    const DrinkName3 = document.createElement("h2")
          DrinkName3.classList.add("Top")
          DrinkName3.textContent="Latte"
          Top3.appendChild(DrinkName3)

    const Price3 = document.createElement("h2")
          Price3.classList.add("Top")
          Price3.textContent="$ 4.50"
          Top3.appendChild(Price3)

    const DrinkText3 = document.createElement("span")
          DrinkText3.textContent="Espresso, steamed milk, and light foam"
          GridItem3.appendChild(DrinkText3)

          //End of Item 3 

          const GridItem4 = document.createElement("div")
          GridItem4.classList.add("GridItem")
          GridContainer.appendChild(GridItem4)
           

    const Top4 = document.createElement("div")
          Top4.classList.add("Top")
          GridItem4.appendChild(Top4)
          


    const DrinkName4= document.createElement("h2")
          DrinkName4.classList.add("Top")
          DrinkName4.textContent="Cappuccino"
          Top4.appendChild(DrinkName4)

    const Price4 = document.createElement("h2")
          Price4.classList.add("Top")
          Price4.textContent="$ 4.50"
          Top4.appendChild(Price4)

    const DrinkText4 = document.createElement("span")
          DrinkText4.textContent="Espresso, steamed milk, and foam, with cocoa"
          DrinkText4.style.width="80%"
          GridItem4.appendChild(DrinkText4)

          // end of item 4 

          const GridItem5 = document.createElement("div")
          GridItem5.classList.add("GridItem")
          GridContainer.appendChild(GridItem5)
           

    const Top5 = document.createElement("div")
          Top5.classList.add("Top")
          GridItem5.appendChild(Top5)
          


    const DrinkName5= document.createElement("h2")
          DrinkName5.classList.add("Top")
          DrinkName5.textContent="Flat White"
          Top5.appendChild(DrinkName5)

    const Price5 = document.createElement("h2")
          Price5.classList.add("Top")
          Price5.textContent="$ 4.75"
          Top5.appendChild(Price5)

    const DrinkText5 = document.createElement("span")
          DrinkText5.textContent="Smooth blend of espresso and steamed milk"
          GridItem5.appendChild(DrinkText5)
          DrinkText5.style.width="80%"

          //End of item 5 

          const GridItem6 = document.createElement("div")
          GridItem6.classList.add("GridItem")
          GridContainer.appendChild(GridItem6)
           

    const Top6 = document.createElement("div")
          Top6.classList.add("Top")
          GridItem6.appendChild(Top6)
          


    const DrinkName6= document.createElement("h2")
          DrinkName6.classList.add("Top")
          DrinkName6.textContent="Mocha"
          Top6.appendChild(DrinkName6)

    const Price6 = document.createElement("h2")
          Price6.classList.add("Top")
          Price6.textContent="$ 5.00"
          Top6.appendChild(Price6)

    const DrinkText6 = document.createElement("span")
          DrinkText6.textContent="Espresso, chocolte syrup, steamed milk, whipped cream"
          DrinkText6.style.width="80%"
          GridItem6.appendChild(DrinkText6)

          //End of item 6 

          const GridItem7 = document.createElement("div")
          GridItem7.classList.add("GridItem")
          GridContainer.appendChild(GridItem7)
           

    const Top7 = document.createElement("div")
          Top7.classList.add("Top")
          GridItem7.appendChild(Top7)
          


    const DrinkName7= document.createElement("h2")
          DrinkName7.classList.add("Top")
          DrinkName7.textContent="Macchiato"
          Top7.appendChild(DrinkName7)

    const Price7 = document.createElement("h2")
          Price7.classList.add("Top")
          Price7.textContent="$ 4.00"
          Top7.appendChild(Price7)

    const DrinkText7 = document.createElement("span")
          DrinkText7.textContent="Espresso with a small amount of foamed milk"
          GridItem7.appendChild(DrinkText7)

          //End of item 7

          const GridItem8 = document.createElement("div")
          GridItem8.classList.add("GridItem")
          GridContainer.appendChild(GridItem8)
           

    const Top8 = document.createElement("div")
          Top8.classList.add("Top")
          GridItem8.appendChild(Top8)
          


    const DrinkName8= document.createElement("h2")
          DrinkName8.classList.add("Top")
          DrinkName8.textContent="Cold Brew"
          Top8.appendChild(DrinkName8)

    const Price8 = document.createElement("h2")
          Price8.classList.add("Top")
          Price8.textContent="$ 4.00"
          Top8.appendChild(Price8)

    const DrinkText8 = document.createElement("span")
          DrinkText8.textContent="Slow-steeped coffee served cold and refreshing"
          GridItem8.appendChild(DrinkText8)

          //End of item 8

          const GridItem9 = document.createElement("div")
          GridItem9.classList.add("GridItem")
          GridContainer.appendChild(GridItem9)
           

    const Top9 = document.createElement("div")
          Top9.classList.add("Top")
          GridItem9.appendChild(Top9)
          


    const DrinkName9= document.createElement("h2")
          DrinkName9.classList.add("Top")
          DrinkName9.textContent="Chai Latte"
          Top9.appendChild(DrinkName9)

    const Price9 = document.createElement("h2")
          Price9.classList.add("Top")
          Price9.textContent="$ 4.75"
          Top9.appendChild(Price9)

    const DrinkText9 = document.createElement("span")
          DrinkText9.textContent="Spiced tea concentrate with steamed milk"
          GridItem9.appendChild(DrinkText9)

          //End of item 9

          const GridItem10 = document.createElement("div")
          GridItem10.classList.add("GridItem")
          GridContainer.appendChild(GridItem10)
           

    const Top10 = document.createElement("div")
          Top10.classList.add("Top")
          GridItem10.appendChild(Top10)
          


    const DrinkName10= document.createElement("h2")
          DrinkName10.classList.add("Top")
          DrinkName10.textContent="Affogato"
          Top10.appendChild(DrinkName10)

    const Price10 = document.createElement("h2")
          Price10.classList.add("Top")
          Price10.textContent="$ 5.50"
          Top10.appendChild(Price10)

    const DrinkText10 = document.createElement("span")
          DrinkText10.textContent="Espresso poured over vanilla ice cream"
          GridItem10.appendChild(DrinkText10)

        //End of item 10


        const GridItem11 = document.createElement("div")
        GridItem11.classList.add("GridItem")
        GridContainer.appendChild(GridItem11)
         

  const Top11 = document.createElement("div")
        Top11.classList.add("Top")
        GridItem11.appendChild(Top11)
        


  const DrinkName11= document.createElement("h2")
        DrinkName11.classList.add("Top")
        DrinkName11.textContent="Irish Coffee"
        Top11.appendChild(DrinkName11)

  const Price11 = document.createElement("h2")
        Price11.classList.add("Top")
        Price11.textContent="$ 6.00"
        Top11.appendChild(Price11)

  const DrinkText11 = document.createElement("span")
        DrinkText11.textContent="Coffee, Irish whiskey, sugar, and cream"
        GridItem11.appendChild(DrinkText11)

        //End of Item 11

        const GridItem12 = document.createElement("div")
        GridItem12.classList.add("GridItem")
        GridContainer.appendChild(GridItem12)
         

  const Top12 = document.createElement("div")
        Top12.classList.add("Top")
        GridItem12.appendChild(Top12)
        


  const DrinkName12= document.createElement("h2")
        DrinkName12.classList.add("Top")
        DrinkName12.textContent="Turkish Coffee"
        Top12.appendChild(DrinkName12)

  const Price12 = document.createElement("h2")
        Price12.classList.add("Top")
        Price12.textContent="$ 5.00"
        Top12.appendChild(Price12)

  const DrinkText12 = document.createElement("span")
        DrinkText12.textContent="Rich and bold shot of pure coffe"
        GridItem12.appendChild(DrinkText12)

        //End of item 12
}