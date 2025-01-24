// Day 5 - Exercise 1

interface Cart {
    id: number,
    title: string,
    variantId?: number

    addToCart(title:string): void

}



const shoes: Cart = {
    id: 1,
    title: 'shoes',

    addToCart(title:string) {
        console.log(`Adding "${title}" to cart`)
    }
}