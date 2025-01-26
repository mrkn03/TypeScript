// Day 7 - Exercise 4

let multiply = function (x: number, y: number): number {
    return x * y
}

let capitalize = function (value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

console.log(capitalize(`nifty ${multiply(5, 10)}`));