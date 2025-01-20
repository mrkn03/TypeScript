"use strict";
// Tipo any
let price = 40;
let item = 'apple';
let inStore = true;
let value;
value = 10;
value = 'juice';
// As array
let values = [10, 20, 40, 60];
// Tuples
let itemTuple = ['Apple', 3, true];
// Enum
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
    Role[Role["intern"] = 4] = "intern";
})(Role || (Role = {}));
const user = {
    firstName: "Marcos",
    age: 40,
    role: Role.intern
};
console.log(user);
// Function return
function add(num1, num2) {
    return num1 + num2;
}
// Function void
function result(price) {
    console.log(`The result is ${price}`);
}
result(add(6, 5));
// Objetos
const userObject = {
    firstName: 'Marcos',
    age: 22,
    lastName: ''
};
userObject.lastName = 'Fernandes';
// O unknown
let itemInput;
let itemName;
itemInput = 10;
itemInput = 'Apple';
if (itemInput === 'string') {
    itemName = itemInput;
}
// O never
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError('The application crashed', 500);
console.log(generateError('The application crashed', 500));
