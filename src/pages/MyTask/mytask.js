// Calendar + simple interactions (duplicated per-page as requested)
(function () {
  const grid = document.getElementById("calGrid");
  const label = document.getElementById("calLabel");
  const prev = document.getElementById("prevMonth");
  const next = document.getElementById("nextMonth");
  if (!grid) return;

  let current = new Date();
  let selectedKey = null;

  function render() {
    const y = current.getFullYear();
    const m = current.getMonth();
    label.textContent = `${current.toLocaleString("default",{month:"long"})} ${y}`;

    grid.innerHTML = "";

    // Weekdays
    const wd = ["Su","Mo","Tu","We","Th","Fr","Sa"];
    wd.forEach(d => {
      const c = document.createElement("div");
      c.className = "cell muted";
      c.textContent = d;
      grid.appendChild(c);
    });

    const first = new Date(y, m, 1);
    const startDay = first.getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();

    // Leading blanks
    for (let i = 0; i < startDay; i++) {
      const b = document.createElement("div");
      b.className = "cell muted";
      b.textContent = "";
      grid.appendChild(b);
    }

    // Days
    for (let d = 1; d <= daysInMonth; d++) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "cell day";
      cell.textContent = d;

      const isToday =
        d === new Date().getDate() &&
        m === new Date().getMonth() &&
        y === new Date().getFullYear();
      if (isToday) cell.classList.add("today");

      const key = `${y}-${m}-${d}`;
      if (key === selectedKey) cell.classList.add("selected");

      cell.addEventListener("click", () => {
        selectedKey = key;
        render();
      });

      grid.appendChild(cell);
    }
  }

  render();
  prev.addEventListener("click", () => { current.setMonth(current.getMonth() - 1); render(); });
  next.addEventListener("click", () => { current.setMonth(current.getMonth() + 1); render(); });
})();
