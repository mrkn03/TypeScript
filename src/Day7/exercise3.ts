// Day 7 - Exercise 3

class Furniture {
    constructor(protected manufacturer: string = 'IKEA') { }
    kind():void { }
}

class Desk extends Furniture {
    override kind() {
        console.log(`This is a desk made by ${this.manufacturer}`)
    }
}

class Chair extends Furniture {
    override kind() {
        console.log(`This is a chair made by ${this.manufacturer}`)
    }
}

const desk = new Desk()
desk.kind()
// desk.manufacturer // Deve retornar um erro

const chair = new Chair()
chair.kind()
// chair.manufacturer // Deve retornar um erro