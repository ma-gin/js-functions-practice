/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
console.log("\nEX. 1\n")

// const area = function(l1, l2){
//     return l1 * l2
// }

const area = (l1, l2) => l1 * l2

console.log(area(5, 7))


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log("\nEX. 2\n")

const crazySum = (numOne, numTwo) => (numOne === numTwo) ? (numOne + numTwo) * 3 : (numOne + numTwo)

console.log(crazySum(8, 5))


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
console.log("\nEX. 3\n")

const crazyDiff = (x) => (x <= 19) ? 19 - x : (x - 19) * 3

console.log(crazyDiff(20))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
console.log("\nEX. 4\n")

const boundary = (n) => ((n >= 20 && n <=100) || n === 400) ? true : false

console.log(boundary(100))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
console.log("\nEX. 5\n")

// How to accept string only?

let str = "dStrive school is cool.dd"
let strive = "Strive"

const checkFirstWord = function(str){ //startsWith method
    let runTime = str.split(" ").shift().length
    strive = strive.split("")  // split string into array
    let stringArray = str.split("")
    for(let i = 0; i <= runTime - 1; i++){ // a loop to compare if the first 5 array elements are equal
        if (stringArray[i] === strive[i]){
            if (i === 5)
                return true
            else
                continue
        } else {
            return false
        }
    } 
}

const strivify = (str) => checkFirstWord(str) ? str : "Strive " + str

console.log(strivify(str))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
console.log("\nEX. 6\n")

// How to make sure it's positive?

const check3and7 = function(x){
    if (x % 3 === 0){
        x % 7 === 0 ? console.log(`${x} is a multiple of 3 and 7.`) : console.log(`${x} is a multiple of 3.`)
    } else {
        x % 7 === 0 ? console.log(`${x} is a multiple of 7.`) : console.log("${x} is not a multiple of 3 or 7.")
    }
}

check3and7(16)
check3and7(15)
check3and7(14)
check3and7(21)
check3and7(25)

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
console.log("\nEX. 7\n")

const reverseString = (str) => str.split("").reverse().join("")

console.log(reverseString(str))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
console.log("\nEX. 8\n")

const upperFirst = function(str){
    let result = []
    let arrayOfWords = str.split(" ") //create array of words
    let runTime = arrayOfWords.length - 1
    for (let i = 0; i <= runTime; i++){ //return array with capital last word added
        let lastElement = arrayOfWords.pop().split("")
        let capitalFirstLetter = lastElement.shift().toUpperCase()
        let wordArray = [capitalFirstLetter].concat(lastElement)
        lastElement = wordArray.join("")
        result.unshift(lastElement)
    }
    return result.join(" ")
}

console.log(upperFirst(str))

//comment each key decision during development

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
console.log("\nEX. 9\n")

const cutString = (str) => str.slice(1, -1)

console.log(cutString(str))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
console.log("\nEX. 10\n")

const giveMeRandom = (n) => {
    let newArray = []
    for (let i = 0; i < n; i++){
        number = Math.ceil(Math.random() * 10)
        newArray = [number].concat(newArray)
    }
    return newArray
}

console.log(giveMeRandom(5))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
