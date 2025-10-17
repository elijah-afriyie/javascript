class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, salary, hireDate) {
        super(firstName, lastName);
        this.salary = salary;
        this.hireDate = new Date(hireDate);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} (Employee)`;
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, salary, hireDate, team) {
        super(firstName, lastName, salary, hireDate);
        this.team = [];
    }

    addTeamMember(employee) {
        if (employee instanceof Employee) {
            this.team.push(employee);
        } else {
            throw new Error("Only instances of Employee can be added to the team");
        }
    }

    getTeamSize() {
        return `Team size: ${this.team.length}`;
    };

    getFullName() {
        return `${this.firstName} ${this.lastName} (Manager of ${this.getTeamSize()} people)`;
    }
}

const manager = new Manager("Aiden", "Smith", 7500, "2020 - 01 - 15");

const employee1 = new Employee("Ruby", "Jones", 5000, "2021 - 05 - 10");
const employee2 = new Employee("Liam", "Brown", 4800, "2019 - 09 - 23");
const employee3 = new Employee("Maya", "Davis", 5100, "2022 - 03 - 11");

manager.addTeamMember(employee1);
manager.addTeamMember(employee2);
manager.addTeamMember(employee3);

// display full names
console.log(manager.getFullName());
console.log(employee1.getFullName());
console.log(employee2.getFullName());
console.log(employee3.getFullName());

// display team size
console.log(manager.getTeamSize());