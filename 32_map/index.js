const dates = [
  "2024-1-10",
  "2024-2-14",
  "2024-3-17",
  "2024-4-1",
  "2024-5-5",
  "2024-6-14",
  "2024-7-4",
  "2024-8-26",
  "2024-9-2",
  "2024-10-14",
  "2024-11-11",
  "2024-12-25",
];

const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
