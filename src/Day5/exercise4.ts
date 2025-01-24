// Day 5 - Exercise 4

class Employee {
    constructor(public title: string, public salary: number){}
}

const employee = new Employee('Engineer', 50000)

console.log(`The new employee's title is ${employee.title} and the salary is $${employee.salary}`)