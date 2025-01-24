// Tipo any

let price = 40
let item = 'apple'
let inStore = true

let value

value = 10
value = 'juice'

// As array

let values: number[] = [10, 20, 40, 60]

// Tuples

let itemTuple: [string, number, boolean] = ['Apple', 3, true]

// Enum

enum Role {
    admin = 1,
    read = 2,
    backup = 3,
    intern = 4
}

// const user:Users = {
//     firstName: "Marcos",
//     age: 40,
//     role: Role.intern
// }

// console.log(user)

// Function return

function add(num1: number, num2: number): number {
    return num1 + num2
}

// Function void

function result(price: number): void {
    console.log(`The result is ${price}`)
}

result(add(6, 5))

// Objetos

const userObject = {
    firstName: 'Marcos',
    age: 22,
    lastName: ''
}

userObject.lastName = 'Fernandes'

// O unknown

let itemInput: unknown
let itemName: string

itemInput = 10
itemInput = 'Apple'

if (itemInput === 'string') {
    itemName = itemInput
}

// O never

function generateError(message: string, code: number): never{
    throw {
        message: message,
        errorCode: code
    }
}

generateError('The application crashed', 500)

console.log(generateError('The application crashed', 500))
