/*
data structures that need to be created
The boat will have many fish.
Each fish will be represented by an object.
Here are the properties of each fish.
Species
Weight
Price (prices range from $3.00 to $10.00 per fish)
Amount (how many of this species were caught today)
*/

//the fishing boat must have a function that the other modules can invoke in order to see today's catch.
//This function must be named boatInventory.
//The array of fish objects will be the return value when the function is invoked 
// When should the function be invoked?


const boatInventory = () => { //no parameter bc function has access to info it needs??
    const arrayOfFishObjects = [
        { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
        { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
        { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
        { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
        { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
        { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
        { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
        { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
    ]
return arrayOfFishObjects
}

const todaysInventory = boatInventory()
//console.log(todaysInventory) //works! shows array of fish

exports.boatInventory = boatInventory //from internet now--dont know, copied and pasted from instructions
// module.exports = { todaysInventory } //or is it this---variable name rather than invoking function?



