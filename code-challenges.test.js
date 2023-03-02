// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

//Pseudocode:
//input - create working jest test(It will initially return undefined) then implement function
// output - the tast will pass when function is added
// Creat a function variable called diBy3. make a describe method for jest test. input the given it statement and put it into a string. Make expect values for each given object. make the comparison function .toString(I was stuck on this for a couple hours until I had the bright idea to change it to string)
// create a function with divBy3 and return object values that are equally divided into 3.

// a) Create a test with expect statements for each of the variables provided.
// const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
 // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
 // Expected output: "-7 is not divisible by three"
// describe(divBy3, (obj) => {
//     it("take an object as an argument and decide if the number inside it is evenly divisible by three or not", () => {
//       expect(divBy3(object1)).toString("15 is divisible by three"),
//       expect(divBy3(object2)).toString("0 is divisible by three"),
//       expect(divBy3(object3)).toString("-7 is not divisible by three") //ReferenceError: divBy3 is not defined
//     }) 
//    })
//   b) Create the function that makes the test pass.
//     function divBy3(obj)  {
//         return obj.number % 3=== 0
//     } console.log(divBy3(object1));
     //Test Suites: 1 passed, 1 total
    //Tests:       1 passed, 1 total
 


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//Pseudocode:
// input - build a jest test using the given variables. After building the test create a function.
//Output- the function will cause the test to pass and return each letter in every word capitalized in the array.
// create a test with the describe function being capitalizeWords. Within the describe method input take in an array of words and returns an array with all the words capitalized." For the expect method call upon function capitalizeWords with the values being the given variables randomNouns1 and randomNouns2. When logging just the test it comes back as undefined.
// Create a function  using the variable capitalizeWords with array in the parameter. Make a return using array.map. When building the function method use word instead of string when using an array.(This was the mistake I was running into)  use word.charAt(0) to isolate the first letter in the string and use .toUpperCase() to capitalize it. next use slice to extract a section of the string and return it as a new string without modifying the original.
//console.log the variable and call upon the parameter to display the new arrays in the terminal.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// describe(capitalizeWords, () => {
//         it("take in an array of words and returns an array with all the words capitalized.", () => {
//           expect(capitalizeWords(randomNouns1)).toString("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"),
//           expect(capitalizeWords(randomNouns2)).toString("Temperature", "Database", "Chopsticks", "Mango")
//         }) 
//          })   //Output: ReferenceError: capitalizeWords is not defined //Test Suites: 1 failed, 1 total
         //Tests:       0 total
       
         
// // // b) Create the function that makes the test pass.

// function capitalizeWords (array) {
//    return array.map(word => word.charAt(0).toUpperCase() + word.slice(1))
// }   console.log(capitalizeWords(randomNouns1));
// console.log(capitalizeWords(randomNouns2));

//  Output:[ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]
//       at Object.log (code-challenges.test.js:73:21)
//   console.log
//     [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]
//       at Object.log (code-challenges.test.js:74:17)
//  PASS  ./code-challenges.test.js
//   capitalizeWords
//     ✓ take in an array of words and returns an array with all the words capitalized. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

//Pseudocode: input - Create a jest test with variable firstVowel. Create a function with variable firstVowel
//Output -  The function will allow the test to pass and return the index of the first vowel in each given variable.
//after running the test create a variable within the function called vowels = [] with a,e,i,o,u in the array. create a for loop within the same code block that calls on the index of one of the given vowel variables. create a new code block and make a return index. outside of the function console.log each of the given variables so that the terminal displays each of the expected return values for each variable.

 // a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
//  // Expected output: 1
//  const vowelTester2 = "academy"
//  // Expected output: 0
//  const vowelTester3 = "challenges"
//  // Expected output: 2

// describe(firstVowel, () => {
//         it("take in a string and logs the index of the first vowel.", () => {
//           expect(firstVowel(vowelTester1)).toString("1"),
//           expect(firstVowel(vowelTester2)).toString("0"),
//           expect(firstVowel(vowelTester3)).toString("2")
//         }) // output: ReferenceError: capitalizeVowel is not defined Test Suites: 1 failed, 1 total
//         //Tests:       0 total
//     })
// // b) Create the function that makes the test pass.
// function firstVowel(string) {
//     const vowels = ["a", "e", "i", "o", "u"]
//      for (let i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])) {
//            return i 
//         }
//     }
// } console.log(firstVowel(vowelTester1));
// console.log(firstVowel(vowelTester2));
// console.log(firstVowel(vowelTester3));

// // output: 1

//       at Object.log (code-challenges.test.js:127:11)

//       console.log
//         0
    
//           at Object.log (code-challenges.test.js:128:9)
    
//       console.log
//         2
    
//           at Object.log (code-challenges.test.js:129:9)
    
//      PASS  ./code-challenges.test.js
//       firstVowel
//         ✓ take in a string and logs the index of the first vowel. (1 ms)
    
//     Test Suites: 1 passed, 1 total
//     Tests:       1 passed, 1 total
