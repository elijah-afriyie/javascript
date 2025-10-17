# question

Create a base class Person with properties firstName and lastName. Add a method getFullName() that returns the full name by combining first and last names.
Then, create an Employee class that extends Person and adds properties salary and hireDate (a Date object). Override getFullName() in Employee to append " (Employee)" to the full name.
Next, create a Manager class that extends Employee with an added property team (an array of Employee instances).

Add these methods to Manager:

- addTeamMember(employee): adds an employee to the team.
- getTeamSize(): returns the number of team members.
- Override getFullName() to append " (Manager of X people)" where X is the team size.

Finally, create a Manager instance with the following data and call getFullName():

Test Data

- Manager: FirstName: "Aiden", LastName: "Smith", Salary: 7500, Hire Date: "2020-01-15"
- Team Members:
  - Employee 1: FirstName: "Ruby", LastName: "Jones", Salary: 5000, Hire Date: "2021-05-10"
  - Employee 2: FirstName: "Liam", LastName: "Brown", Salary: 4800, Hire Date: "2019-08-23"
  - Employee 3: FirstName: "Maya", LastName: "Davis", Salary: 5100, Hire Date: "2022-03-11"
    Use this data to build your classes and test the behavior of the getFullName() method on the manager.
