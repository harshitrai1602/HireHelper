// Sidebar Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('hidden');
});

// Calendar Generator
const monthSelect = document.getElementById('monthSelect');
const yearSelect = document.getElementById('yearSelect');
const calendarTable = document.getElementById('calendarTable');

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const now = new Date();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();

// Populate dropdowns
months.forEach((m, i) => {
  let option = document.createElement("option");
  option.value = i;
  option.text = m;
  if (i === currentMonth) option.selected = true;
  monthSelect.appendChild(option);
});

for (let y = 2000; y <= 2030; y++) {
  let option = document.createElement("option");
  option.value = y;
  option.text = y;
  if (y === currentYear) option.selected = true;
  yearSelect.appendChild(option);
}

function generateCalendar(month, year) {
  calendarTable.innerHTML = "";

  let firstDay = new Date(year, month).getDay();
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  let table = "<tr>";
  const days = ["Su","Mo","Tu","We","Th","Fr","Sa"];
  days.forEach(d => table += `<th>${d}</th>`);
  table += "</tr><tr>";

  let cellCount = 0;
  for (let i = 0; i < firstDay; i++) {
    table += "<td></td>";
    cellCount++;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if (cellCount % 7 === 0 && cellCount !== 0) table += "</tr><tr>";
    table += `<td>${day}</td>`;
    cellCount++;
  }

  table += "</tr>";
  calendarTable.innerHTML = table;
}

generateCalendar(currentMonth, currentYear);

monthSelect.addEventListener("change", () => {
  generateCalendar(parseInt(monthSelect.value), parseInt(yearSelect.value));
});
yearSelect.addEventListener("change", () => {
  generateCalendar(parseInt(monthSelect.value), parseInt(yearSelect.value));
});
