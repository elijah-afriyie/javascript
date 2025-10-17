class Student {
    constructor(studentName, scores) {
        this.studentName = studentName;
        this.scores = scores;
    }

    avrScore() {
        const total = this.scores.reduce((acc, current) => acc + current);
        return `${this.studentName}'s average score is ${(total / this.scores.length).toFixed(0)}`
    }
}

const kelvin = new Student("Kelvin", [75, 85, 95]);
const leila = new Student("Leila", [99, 90, 89]);
const farouk = new Student("Farouk", [53, 70, 65]);

console.log(kelvin.avrScore())
console.log(leila.avrScore())
console.log(farouk.avrScore())