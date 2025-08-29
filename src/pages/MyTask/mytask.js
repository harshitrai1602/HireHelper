// Simple Calendar Render
const calendarEl = document.getElementById("calendar");
const date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  let firstDay = new Date(year, month, 1).getDay();
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  let calendarHTML = `
    <select id="monthSelect">${months.map((m,i)=>
      `<option value="${i}" ${i===month?"selected":""}>${m}</option>`).join("")}
    </select>
    <select id="yearSelect">
      ${Array.from({length: 10}, (_,i)=>year-5+i).map(y=>
        `<option value="${y}" ${y===year?"selected":""}>${y}</option>`).join("")}
    </select>
    <table>
      <thead>
        <tr>
          <th>Su</th><th>Mo</th><th>Tu</th><th>We</th>
          <th>Th</th><th>Fr</th><th>Sa</th>
        </tr>
      </thead>
      <tbody>
  `;

  let day = 1;
  for (let i=0;i<6;i++) {
    calendarHTML += "<tr>";
    for (let j=0;j<7;j++) {
      if (i===0 && j<firstDay) {
        calendarHTML += "<td></td>";
      } else if (day>daysInMonth) {
        break;
      } else {
        calendarHTML += `<td>${day}</td>`;
        day++;
      }
    }
    calendarHTML += "</tr>";
  }
  calendarHTML += "</tbody></table>";
  calendarEl.innerHTML = calendarHTML;

  document.getElementById("monthSelect").addEventListener("change", e=>{
    month = parseInt(e.target.value);
    renderCalendar();
  });
  document.getElementById("yearSelect").addEventListener("change", e=>{
    year = parseInt(e.target.value);
    renderCalendar();
  });
}

renderCalendar();
