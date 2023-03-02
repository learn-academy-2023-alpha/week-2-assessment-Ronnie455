// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Alpha 2023"
// console.log(cohort.split(""))

// a) Your answer: so I'll be using a console.log which calls on the function. the function I'll be calling on is cohort which has an assigned string. I will then use .split("") wich will breakup the string into individual letters and put them into an array. [A,l,p,h,a 2,0,2,3]
// b) Verify and explain: After running the log it came out to [
  // 'A', 'l', 'p', 'h',
  // 'a', ' ', '2', '0',
  // '2', '3']
// I was correct but there is a little more to the process than what I said. the split() method divides a tring into an ordered list of substrings and returns them back in an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//  console.log(greeter("LEARN Student"))

// a) Your answer: This function will return undefined because there is no return command so the function has nothing to call on
// b) Verify and explain: This function is using string interpolation. The variable is declared and it's calling on the parameter (name). The command within the code block is the string. when entering the console.log, it is declaring the function greeter. in the parentheses it is declaring the parameter to be "LEARN Student"). When this is logged it will return `Hello, ${name}!` since the log is calling the variable and the parameter within the log and if I add return before `hello, it'll return `Hello, LEARN Student`

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: The variable in this HOF well call upon the array, which will then map the numbers and multiply each one by two returning a new array with each number inside of it doubled

// b) Verify and explain: My explanation was a bit shaky but had the correct outcome. The map method populates a new array from calling on a function for every variable with an array and applies a transformation function for every value. in this case it takes every value in the function and multiplies it by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: the function is going to filter any number that doesn't evenly divide into 0 and will return them into the terminal alone without the values that do divide into 0 evenly.
// b) Verify and explain: I was correct. .filter filters down an array to just the elements that the function provides.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:It's going to return "Javascript"
// b) Verify and explain: I was correct. This function is using a method called object. An object usually consists of multiple variables and functions. In this case when you console.log the function followed with the languages variable and it's index 0 it returns the string within the array at index 0 which is Javascript.
