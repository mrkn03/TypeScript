class UserList {
    name: string
    private balance: number
    singleTransactions: number = 0
    static totalTransactions: number = 0

    constructor(name: string, balance: number) {
        this.name = name
        this.balance = balance
        this.singleTransactions++
        UserList.totalTransactions++
    }

    addMoney(ammount: number) {
        this.balance += ammount
    }
}

const user1 = new UserList('Marcos', 10)

user1.addMoney(100)


interface Item {
    name: string
    price: number

    itemMessage(message: string): void
}

let productOne: Item = {
    name: 'Apple',
    price: 2,

    itemMessage(message: string) {
        console.log(`${message} ${this.name}`)
    }
}

productOne.itemMessage('You just bought a ')