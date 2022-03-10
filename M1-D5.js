const readline = require("readline")

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

const calculateArea = async () => {
  console.log("\nEX. 1\n")
  readlineInterface.question("Calculate area:\nEnter length: ", (l1) => {
    if (l1 == isNaN) return
    readlineInterface.question("Enter height: ", (l2) => {
      console.log(`Area = ${l1 * l2}`)
      readlineInterface.close()
    })
  })
}

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = async () => {
  console.log("\nEX. 2\n")
  readlineInterface.question(
    "Calcuate crazySum: return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.\nEnter first paramater: ",
    (l1) => {
      if (l1 == isNaN) return
      readlineInterface.question("Enter second parameter: ", (l2) => {
        console.log(`crazy sum = ${l1 === l2 ? (l1 + l2) * 3 : l1 + l2}`)
      })
    }
  )
}
// const crazySum2 = (int1, int2) =>
//   int1 === int2 ? (int1 + int2) * 3 : int1 + int2

// console.log(crazySum2(8, 5))

// /* EXERCISE 3
//  Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
//  It should return triple their absolute difference if the given number is greater than 19.
// */
// console.log("\nEX. 3\n")

// const crazyDiff = (x) => (x <= 19 ? 19 - x : (x - 19) * 3)

// console.log(crazyDiff(20))
// console.log(crazyDiff(5))

// /* EXERCISE 4
//  Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
// */
// console.log("\nEX. 4\n")

// const boundary = (n) => ((n >= 20 && n <= 100) || n === 400 ? true : false)

// console.log(boundary(100))
// console.log(boundary(200))
// console.log(boundary(400))

// /* EXERCISE 5
//  Write a function called "strivify" which accepts a string as a parameter.
//  It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
// */
// console.log("\nEX. 5\n")

// let str = "Test Strive"
// let str2 = "Strive"

// const strivify = (str) => (str.startsWith("Strive") ? str : "Strive " + str)

// console.log(strivify(str))
// console.log(strivify(str2))

// /* EXERCISE 6
//  Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
//  HINT: Modulus Operator
// */
// console.log("\nEX. 6\n")

// const check3and7 = function (x) {
//   if (x <= 0) return
//   if (x % 3 === 0) {
//     x % 7 === 0
//       ? console.log(`${x} is a multiple of 3 and 7.`)
//       : console.log(`${x} is a multiple of 3.`)
//   } else {
//     x % 7 === 0
//       ? console.log(`${x} is a multiple of 7.`)
//       : console.log("${x} is not a multiple of 3 or 7.")
//   }
// }

// check3and7(0)
// check3and7(16)
// check3and7(15)
// check3and7(14)
// check3and7(21)
// check3and7(25)

// /* EXERCISE 7
//  Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
// */
// console.log("\nEX. 7\n")

// const reverseString = (str) => str.split("").reverse().join("")

// console.log(reverseString(str))

// /* EXERCISE 8
//  Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
// */
// console.log("\nEX. 8\n")

// const str3 = "this is a very boring sentance."

// const upperFirst = function (str) {
//   let string = str.split(" ")
//   let result = []
//   const arrLength = string.length
//   for (let i = 0; i < arrLength; i++) {
//     let firstLetterCapitalized = string[i]
//       .split("")
//       .shift()
//       .toUpperCase()
//       .split()
//     let wordCapitalized = firstLetterCapitalized
//       .concat(string[i].slice(1))
//       .join("")
//     result.push(wordCapitalized)
//   }
//   return result.join(" ")
// }

// console.log(upperFirst(str3))

// /* EXERCISE 9
//  Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
// */
// console.log("\nEX. 9\n")

// const cutString = (str) => str.slice(1, -1)

// console.log(cutString(str))

// /* EXERCISE 10
//  Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
// */
// console.log("\nEX. 10\n")

// const giveMeRandom = (n) => {
//   let newArray = []
//   for (let i = 0; i < n; i++) {
//     number = Math.ceil(Math.random() * 10)
//     newArray = [number].concat(newArray)
//   }
//   return newArray
// }

// console.log(giveMeRandom(5))

// /* EXTRA 1
//  Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
//  The function should return the sum of just the numbers bigger than 5.
// */
// console.log("\nEx. 1 EXTRA\n")

// const checkArray = (arr) => {
//   let sum = []
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     const variable = arr[i] > 5 ? true : false
//     result.push(variable)
//     if (!variable) continue
//     sum.push(arr[i])
//   }
//   return arr + " " + result + " " + sum.reduce((a, b) => a + b, 0)
// }

// console.log(checkArray(giveMeRandom(5)))

// /* EXTRA 2
//  In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
//  Create a function called "shoppingCartTotal" which calculates the total due to the shop.
// */
// console.log("\nEx. 2 EXTRA\n")

// const shoppingCart = [
//   { name: "item1", price: 2, id: 0001, toShip: 7 },
//   { name: "item2", price: 4, id: 0002, toShip: 5 },
//   { name: "item3", price: 7, id: 0003, toShip: 12 },
//   { name: "item4", price: 8, id: 0004, toShip: 2 },
// ]

// const shoppingCartTotal = (shoppingCart) => {
//   let total = 0
//   for (let i = 0; i <= shoppingCart.length - 1; i++) {
//     let itemTotal = shoppingCart[i].price * shoppingCart[i].toShip
//     total += itemTotal
//   }
//   return total
// }

// console.log(shoppingCartTotal(shoppingCart))

// /* EXTRA 3
//  In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
//  Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
// */
// console.log("\nEx. 3 EXTRA\n")

// const newItem = {
//   name: "item5",
//   price: 6,
//   id: 0005,
//   toShip: 7,
// }
// const newItem2 = {
//   name: "item6",
//   price: 3,
//   id: 0005,
//   toShip: 1,
// }

// const addItemReturnTotal = (newItem) => {
//   let itemsTotal = shoppingCart.push(newItem)
//   return itemsTotal //return length of array
// }

// console.log(addItemReturnTotal(newItem))
// console.log(addItemReturnTotal(newItem2))

// /* EXTRA 4
//  In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
//  Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
// */

// console.log("\nEx. 4 EXTRA\n")

// const maxShoppingCart = (arr) => {
//   let currentPrice = 0
//   let maxItemName
//   for (let i = 0; i < arr.length; i++) {
//     let itemPrice = arr[i].price
//     if (itemPrice >= currentPrice) {
//       currentPrice = itemPrice
//       maxItemName = arr[i].name
//     }
//   }
//   return `The most expensive item is ${maxItemName}, and it costs $${currentPrice}.`
// }

// console.log(maxShoppingCart(shoppingCart))

// /* EXTRA 5
//  In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
//  Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
// */
// console.log("\nEx. 5 EXTRA\n")

// const latestShoppingCart = (arr) => arr.slice(-1)

// console.log(latestShoppingCart(shoppingCart))

// /* EXTRA 6
//  Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
//  The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
// */
// console.log("\nEx. 6 EXTRA\n")

// const loopUntil = (num) => {
//   if (num < 0 || num > 9) return
//   let count = 0
//   let counter = 0
//   do {
//     counter++
//     const randomNumber = Math.floor(Math.random() * 9)
//     randomNumber
//     if (randomNumber > num) count++
//     else count = 0
//   } while (count < 3)
//   return `${counter} tries were needed.`
// }

// console.log(loopUntil(5))

// /* EXTRA 7
//  Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
// */
// console.log("\nEx. 7 EXTRA\n")

// const average = (arr) => {
//   let result = []
//   for (const e of arr) {
//     if (typeof e == "number") result.push(e)
//   }
//   result = result.reduce((a, b) => a + b, 0) / result.length
//   return result
// }

// console.log(average([1, 5, "", "word", 5, null, undefined, 7]))

// /* EXTRA 8
//  Write a function called "longest" to find the longest string from a given array of strings.
// */
// console.log("\nEx. 8 EXTRA\n")

// let longestLength = 0
// const testStr = [
//   "array",
//   "of",
//   "test",
//   "123",
//   "javascript",
//   "is",
//   "fun",
//   "foobar----",
// ]

// const longest = (arr) => {
//   for (const e of arr) {
//     if (e.length > longestLength) longestLength = e.length
//   }
//   return arr.filter((item) => item.length === longestLength)
// }

// const longestStr = (arr) => {
//   const result = arr.reduce((a, b) => (b.length > a.length ? (a = b) : a))
//   return result
// }

// console.log(longest(testStr))
// console.log(longestStr(testStr))

// /* EXTRA 9
//  Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
//  The function should return true if the emailContent string does not contain the words SPAM or SCAM.
// */
// console.log("\nEx. 9 EXTRA\n")

// const spamFilter = (emailContent) =>
//   emailContent.includes("spam") || emailContent.includes("scam") ? true : false

// console.log(spamFilter("hello, email content"))
// console.log(spamFilter("here is some spam for you."))

// /* EXTRA 10
//  Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
// */
// console.log("\nEx. 10 EXTRA\n")

// const daysSince = (value) => {
//   const oneDay = 60 * 60 * 24 * 1000
//   const date = new Date(value)
//   const today = new Date()
//   const timeDiff = today.getTime() - date.getTime()
//   const result = Math.round(timeDiff / oneDay)
//   return `${result} days since ${value}`
// }

// console.log(daysSince("2000-01-01"))

calculateArea()
crazySum()
