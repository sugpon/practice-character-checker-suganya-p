const readlineSync = require('readline-sync');
// Prompt user for a string input
const userInput = readlineSync.question('Enter a string: ');
// Prompt user for an index number
const stringIndex = readlineSync.question('Enter an index number: ');
// Print out the character at the given index
console.log(`Character at index ${stringIndex}: ${userInput[stringIndex]}`);
