// Day 7 - Exercise 2

// Day 7 - Exercise 2

class Animal {
    constructor(public name: string) { }
    move(meters: number) {
        console.log(`${this.name} moved ${meters}m.`)
    }
}

class Snake extends Animal {
    override move(meters: number = 0) {
        console.log('Slithering...')
        super.move(meters)
    }
}

class Pony extends Animal {
    override move(meters: number = 0) {
        console.log('Galloping...')
        super.move(meters)
    }
}


const sammy = new Snake("Sammy the Snake")
sammy.move()

const pokey = new Pony("Pokey the Pony")
pokey.move(34)