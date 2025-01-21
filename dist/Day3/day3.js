"use strict";
// Union type
function userInput(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinePrices = userInput(10, 20);
console.log(combinePrices);
const combineName = userInput("Apple", "Avocado");
console.log(combineName);
// Literal type
let productPrice;
productPrice = 10;
productPrice = 20;
productPrice = 30;
let productSize;
productSize = 's';
productSize = 'm';
productSize = 'l';
const employee = {
    firstName: 'Marcos',
    role: 'Developer',
    id: 1,
    age: 22
};
