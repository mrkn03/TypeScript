// Day 5 - Exercise 5

interface UserSchema{
    name: string
}

class User implements UserSchema{
    constructor(public name: string, readonly id: number){}
}

const user = new User('Dog', 1)
