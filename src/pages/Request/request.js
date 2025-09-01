// Calendar + tabs + accept/decline
(function () {
  // Calendar
  const grid = document.getElementById("calGrid");
  const label = document.getElementById("calLabel");
  const prev = document.getElementById("prevMonth");
  const next = document.getElementById("nextMonth");
  if (grid) {
    let current = new Date();
    let selectedKey = null;

    function render() {
      const y = current.getFullYear();
      const m = current.getMonth();
      label.textContent = `${current.toLocaleString("default",{month:"long"})} ${y}`;
      grid.innerHTML = "";

      const wd = ["Su","Mo","Tu","We","Th","Fr","Sa"];
      wd.forEach(d => {
        const c = document.createElement("div");
        c.className = "cell muted";
        c.textContent = d;
        grid.appendChild(c);
      });

      const first = new Date(y,m,1);
      const start = first.getDay();
      const days = new Date(y,m+1,0).getDate();

      for (let i=0;i<start;i++){
        const b = document.createElement("div");
        b.className = "cell muted";
        grid.appendChild(b);
      }

      for (let d=1; d<=days; d++){
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cell day";
        btn.textContent = d;

        const isToday = d===new Date().getDate() && m===new Date().getMonth() && y===new Date().getFullYear();
        if (isToday) btn.classList.add("today");

        const key = `${y}-${m}-${d}`;
        if (key===selectedKey) btn.classList.add("selected");

        btn.addEventListener("click", ()=> { selectedKey = key; render(); });
        grid.appendChild(btn);
      }
    }

    render();
    prev.addEventListener("click", ()=>{ current.setMonth(current.getMonth()-1); render(); });
    next.addEventListener("click", ()=>{ current.setMonth(current.getMonth()+1); render(); });
  }

  // Tabs (visual only)
  document.querySelectorAll(".tab").forEach(t=>{
    t.addEventListener("click", ()=>{
      document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
      t.classList.add("active");
    });
  });

  // Accept / Decline
  document.querySelectorAll(".req-card").forEach(card=>{
    card.querySelector(".accept").addEventListener("click", ()=>{
      card.dataset.state = "accepted";
      card.classList.remove("declined"); card.classList.add("accepted");
    });
    card.querySelector(".decline").addEventListener("click", ()=>{
      card.dataset.state = "declined";
      card.classList.remove("accepted"); card.classList.add("declined");
    });
  });
})();
