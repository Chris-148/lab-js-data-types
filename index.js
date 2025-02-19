/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

let concaVar = s1+s2+s3+s4+s5;
console.log(concaVar);
// Print out the concatenated string

console.log(concaVar);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let part3 = part1[0].toUpperCase() + part1.slice(1) + part2[0].toUpperCase() + part2.slice(1);

// Print the cameLtaiL-formatted string
console.log(part3);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const discount = 0.15;
const tip = billTotal * discount;

// Print out the tipAmount
console.log(tip);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomInt = Math.ceil(Math.random()*10);

// Print the generated random number
console.log(randomInt);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // answer: false

const expression2 = a || b;  // answer: true

const expression3 = !a && b; // answer: false

const expression4 = !(a && b);// answer: true

const expression5 = !a || !b; // answer: true

const expression6 = !(a || b); // answer: false

const expression7 = a && a; // answer: true

//console.log(expression1+expression2+expression3+expression4+expression5+expression6+expression7);
console.log(`${expression1}+${expression2}+${expression3}+${expression4}+${expression5}+${expression6}+${expression7}`)