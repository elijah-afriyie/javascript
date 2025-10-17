const grades = [75, 50, 90, 80, 65, 95, 10];

const maximum = grades.reduce(getMax);
console.log(`maximum score: ${maximum}`);

const minimum = grades.reduce(getMin);
console.log(`minimum score: ${minimum}`);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
