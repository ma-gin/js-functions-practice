// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

// callback functions
console.log("\nEx. 1\n")

const giveMeRandom = function(n){
    let newArray = []
    for (let i = 0; i <= n - 1; i++){
        number = Math.ceil(Math.random() * 10)
        newArray = [number].concat(newArray)
    }
    return newArray
}

const checkArray = (x) => {
    console.log(x) // an array of random numbers
    let newArray = [] //create empty array
    for (let i = 0; i < x.length; i++){
        const variable = x[i] > 5 ? true : false
        if (variable) {
            newArray.push(x[i])
        } else {
            continue
        }
    }
    return newArray.reduce((a, b) => a + b, 0) //reduce method performs function over array elements
}

console.log(checkArray(giveMeRandom(5)))

//to use continue use if statement instead of ternary

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/
console.log("\nEx. 2\n")


const shoppingCart = [
    {name: "item1", price: 2, id: 0001, toShip: 7},
    {name: "item2", price: 4, id: 0002, toShip: 5},
    {name: "item3", price: 3, id: 0003, toShip: 12},
    {name: "item4", price: 8, id: 0004, toShip: 2},
]

const shoppingCartTotal = (shoppingCart) => {
    let total = 0
    for (let i = 0; i <= shoppingCart.length - 1; i++){
        let itemTotal = shoppingCart[i].price * shoppingCart[i].toShip
        total += itemTotal
    }
    return total
}

console.log(shoppingCartTotal(shoppingCart))

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/
console.log("\nEx. 3\n")

const newItem = {
    name: "item5", price: 5, id: 0005, toShip: 5
}

const addItemReturnTotal = (newItem) => { //take object 
    let newCart = shoppingCart.push(newItem) // new array + object
    return newCart //return length of array
}

console.log(addItemReturnTotal(newItem))
/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/
console.log("\nEx. 4\n")

const maxShoppingCart = () => {

}

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/
// console.log("\nEx. 5\n")

const latestShoppingCart = []

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/
// console.log("\nEx. 6\n")

const loopUntil = () => {}

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/
// console.log("\nEx. 7\n")

const average = () => {}

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/
// console.log("\nEx. 8\n")

const longest = () => {}

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/
// console.log("\nEx. 9\n")

const spamFilter = () => {}

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/
// console.log("\nEx. 10\n")

const daysSince = () => {}

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
// console.log("\nEx. 11\n")

const matrixGenerator = () => {}

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
