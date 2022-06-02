/*
Since the fish monger needs to see what the fresh catch of the day is, 
it will need to import the function that is defined in the fishing boat module. 
You use the require() function to grab what another module exported.

Example
const { functionVariable } = require("./fishingBoat.js")
*/


const fishingBoat = require("./fishingBoat.js") //import and invoke?? the function that is exported by the fishing boat module.
//console.log(fishingBoat.boatInventory) //works! shows inventory
const inventory = fishingBoat.boatInventory()
//console.log(inventory) //now access array using var named inventory

/*
define and export its own function that generates its own inventory 
that restaurants can use to purchase fish for their daily menus. 
*/


    
/*
Each day, the fishmonger buys exactly 10 of each inexpensive (see below) fish caught by the fishing boat. 

If any of the fishing boat's fish quantity is less than 10, the fish monger does not buy it.
-if statement amount< 10 buy=false

The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.
-for of loop through param
if statement price<= 7.50.
.push to fishObject

The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. 
For example, a chef can tell the monger that she can only spend $5.00 per fish. 
The function should then return only fish that cost $5.00 or less.
-if fish.price <= chef budget input
then push to fishObject
if fish.price > chef budget input .
another && statement add <= chef budget input

Each fish object provided by the fish monger should have a quantity of 10 
instead of the original quantity from the fishing boat.
-fish.quantity = 10
*/

const mongerInventory = (fishOptionsFromBoat, chefBudgetInput) => {
    let arrayOfMongerOptions = []
        for (fishObject of fishOptionsFromBoat) {
             if (fishObject.amount > 10 && fishObject.price <= 7.50 && fishObject.price <= chefBudgetInput) {
                arrayOfMongerOptions.push(fishObject)     //Works! adds fish that meet above criteria to arrayOfMongerOptions
                }
            fishObject.amount = 10
        }   
        return arrayOfMongerOptions //returned inventory should be an array of objects
}
//const todayMonger = mongerInventory(inventory, 7.5) //const from fishingBoat.js
//console.log(todayMonger) //works! shows array of options based on parameters

exports.mongerInventory = mongerInventory 


