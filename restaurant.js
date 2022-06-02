// This module must import and invoke the function that is exported by the fish monger module.

const fishingBoat = require("./fishingBoat.js") //import and invoke?? the function that is exported by the fishing boat module.
//console.log(fishingBoat.boatInventory) //works! shows inventory
const inventory = fishingBoat.boatInventory()
//console.log(inventory) //now access array using var named inventory

const fishMonger = require("./fishMonger.js") //the function that is exported by the fishMonger module
//console.log(fishMonger.mongerInventory)  //works! shows array of inventory 

const mongInventory = fishMonger.mongerInventory(inventory, 7.5)
//console.log(mongInventory)  //works!

/*This module should also define a function that build an HTML version of their daily menu. 
The function should return the generated HTML string. The function must be named fishMenu.
*/



const fishMenu = (chefMaxPrice) => { 
    let htmlString = "" //will add to this using += for string concatanation
    
    for (const fishOfDay of mongInventory) { 
        if (chefMaxPrice >= fishOfDay.price) {
            htmlString += `<h1>Menu</h2>\n
            <article class="menu">
                <h2>${fishOfDay.species}</h2>\n
                <section class="menu_item">${fishOfDay.species} Soup</section>\n
                <section class="menu_item">${fishOfDay.species} Sandwich</section>\n
                <section class="menu_item">Grilled ${fishOfDay.species}</section>\n
            </article>\n`
        }   
    }
    return htmlString  //needs to return the HTML string
}

const todaysFood = fishMenu(4) //works! shows menu in html that accounts for chef max price
console.log(todaysFood)


exports.fishMenu = fishMenu 

/*
Each day, the chef visits the monger and specifies the maximum price she is able to spedn per fish.
If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory.
//parameter of fishType
//for of loop through mongInventory

//do I need to remove the number of fish chef buys from mongInventory???
//will the menu have 2 options if 2 fish meet chef budget requirements-- yes

Your HTML structure must match the example below. Use the same elements and the same class names.
<h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2> //string interpolation with fishObject.species
    <section class="menu__item">Tuna Soup</section> 
    <section class="menu__item">Tuna Sandwich</section> 
    <section class="menu__item">Grilled Tuna</section> 
</article>
*/
