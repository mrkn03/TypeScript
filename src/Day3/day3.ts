// Alias type
type Users = {
    firstName: string,
    age: number
    role: Role
}

// Union type
function userInput(input1:number | string, input2: number | string){
    let result 

    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }

    return result
}


const combinePrices = userInput(10, 20)

console.log(combinePrices)

const combineName = userInput("Apple", "Avocado")

console.log(combineName)

// Literal type
let productPrice:10 | 20 | 30

productPrice = 10
productPrice = 20
productPrice = 30

let productSize: 's' | 'm' | 'l'

productSize = 's'
productSize = 'm'
productSize = 'l'

// Intersection

type Admin = {
    firstName: string,
    age:number
}

type JobRole = {
    id: number,
    role: string
}

type Employee = Admin & JobRole

const employee: Employee = {
    firstName: 'Marcos',
    role: 'Developer',
    id: 1,
    age: 22
}