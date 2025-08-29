// Generate Calendar for Request Page
function generateCalendar() {
  const calendarDiv = document.getElementById("calendar");
  if (!calendarDiv) return;

  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  let table = `<h4 style="margin:5px 0;color:#ff9800">${months[month]} ${year}</h4>`;
  table += `<table><tr>
              <th>S</th><th>M</th><th>T</th>
              <th>W</th><th>T</th><th>F</th><th>S</th>
            </tr><tr>`;

  for (let i = 0; i < firstDay; i++) {
    table += "<td></td>";
  }

  for (let day = 1; day <= lastDate; day++) {
    const today = new Date();
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    table += `<td style="${isToday ? 'background:#ff9800;color:#000;border-radius:50%' : ''}">${day}</td>`;

    if ((day + firstDay) % 7 === 0) {
      table += "</tr><tr>";
    }
  }

  table += "</tr></table>";
  calendarDiv.innerHTML = table;
}

document.addEventListener("DOMContentLoaded", generateCalendar);
