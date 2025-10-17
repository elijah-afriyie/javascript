class Employee {
    constructor() {
        this.employees = [];
    }

    addEmployee(person) {
        this.employees.push(person);
    }
}

const employeeList = new Employee();
employeeList.addEmployee({id: 1, name: "Erika", department: "HR"});
employeeList.addEmployee({id: 2, name: "Nathan", department: "HR"});
employeeList.addEmployee({id: 3, name: "Kyle", department: "IT"});
employeeList.addEmployee({id: 5, name: "Simon", department: "IT"});
employeeList.addEmployee({id: 7, name: "Liam", department: "HR"});
employeeList.addEmployee({id: 9, name: "Mason", department: "IT"});
employeeList.addEmployee({id: 12, name: "Isabella", department: "HR"});
employeeList.addEmployee({id: 13, name: "James", department: "IT"});
employeeList.addEmployee({id: 16, name: "Charlotte", department: "HR"});
employeeList.addEmployee({id: 17, name: "Alexander", department: "IT"});
employeeList.addEmployee({id: 20, name: "Emily", department: "HR"});
employeeList.addEmployee({id: 21, name: "Ethan", department: "IT"});
employeeList.addEmployee({id: 22, name: "Ava", department: "HR"});
employeeList.addEmployee({id: 23, name: "Noah", department: "IT"});
employeeList.addEmployee({id: 24, name: "Sophia", department: "HR"});
employeeList.addEmployee({id: 25, name: "Mason", department: "IT"});
employeeList.addEmployee({id: 26, name: "Olivia", department: "HR"});
employeeList.addEmployee({id: 27, name: "Logan", department: "IT"});
employeeList.addEmployee({id: 28, name: "Grace", department: "HR"});
employeeList.addEmployee({id: 29, name: "Lucas", department: "IT"});


const hrEmployees = employeeList.employees.filter((employee) => employee.department === "HR").map((employee) => employee.name.toUpperCase()).sort((a, b) => a.localeCompare(b));
const itEmployees = employeeList.employees.filter((employee) => employee.department === "IT").map((employee) => employee.name.toUpperCase()).sort((a, b) => b.localeCompare(a));

console.log(hrEmployees);
console.log(itEmployees);
