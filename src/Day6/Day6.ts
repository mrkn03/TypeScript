// Readonly
class Movies {

    constructor(
        public readonly id: number,
        public name: string,
        private _price: number) { }
}

let movie1 = new Movies(1, 'Dejavu', 20)
console.log(movie1)


class HotelRooms {
    [roomNamber: string]: string
}

let room = new HotelRooms()

room.A201 = 'Marcos'
room.A202 = 'Julio'
room.A17 = 'Jose'

// Herança

class uPerson {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number
    ) { }

    get greet(){
        return this.firstName + ' ' + this.lastName
    }
}

class Clients extends uPerson{
    override get greet(){
        return 'Dear ' + super.greet
    }
}

class Staff extends uPerson{
    override get greet(){
        return 'Hi ' + super.greet
    }
}

let client1 = new Clients('Marcos', 'Fernandes', 22)
let staff1 = new Staff('Jose', 'Fernandes', 22)