// Day 5 - Exercise 2

interface Person1{
    name: string
    age: number
}

class Person2 implements Person1{
    constructor(public name: string, public age: number) {}
}

const jane = new Person2('Jane', 31)

console.log(`${jane.name} is ${jane.age} years old`)