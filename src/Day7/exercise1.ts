// Day 7 - Exercise 1

interface IUser{
    name: string
    age: number
    occupation: string
}

interface IAdmin{
    name: string
    age: number
    role: string
}

type Person = IUser | IAdmin

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
]

function logPerson(person: Person) {
    let additionalInformation: string
    if ('role' in person) {
        additionalInformation = person.role
    } else {
        additionalInformation = person.occupation
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`)
}