// Calendar + table checkboxes + demo rows
(function () {
  // Insert demo rows so the table looks like the screenshot
  const rows = document.getElementById("rows");
  if (rows) {
    const data = [
      { id:"TASK-8782", title:"You can't compress the program without quantifying the open-source SSD pixel!", status:"In Progress", priority:"Medium" },
      { id:"TASK-7878", title:"Try to calculate the EXE feed, maybe it will index the multi-byte pixel!", status:"Backlog", priority:"Medium" },
      { id:"TASK-7839", title:"We need to bypass the neural TCP card!", status:"Todo", priority:"High" },
      { id:"TASK-5562", title:"The SAS interface is down, bypass the open-source PIX!", status:"Backlog", priority:"Medium" },
      { id:"TASK-8686", title:"I'll parse the wireless SSL protocol, that should driver the API panel!", status:"Canceled", priority:"Medium" },
      { id:"TASK-1280", title:"Use the digital TLS panel, then you can transmit the haptic system!", status:"Done", priority:"High" },
      { id:"TASK-7262", title:"The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!", status:"Done", priority:"High" },
      { id:"TASK-1138", title:"Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!", status:"In Progress", priority:"Medium" },
      { id:"TASK-7184", title:"We need to program the back-end THX pixel!", status:"Todo", priority:"Low" },
      { id:"TASK-5160", title:"Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!", status:"In Progress", priority:"High" },
    ];
    const statusClass = s => s==="Done"?"done": s==="Todo"?"todo": s==="Backlog"?"todo": s==="Canceled"?"todo":"progress";
    const priClass = p => p==="Low"?"low": p==="High"?"high":"medium";

    rows.innerHTML = data.map(d => `
      <tr>
        <td class="center"><input type="checkbox" class="rowCheck"></td>
        <td>${d.id}</td>
        <td>${d.title}</td>
        <td class="center"><span class="badge ${statusClass(d.status)}">${d.status}</span></td>
        <td class="center"><span class="badge ${priClass(d.priority)}">${d.priority}</span></td>
        <td class="center">⋯</td>
      </tr>
    `).join("");
  }

  // Select all
  const all = document.getElementById("selectAll");
  if (all) {
    all.addEventListener("change", ()=>{
      document.querySelectorAll(".rowCheck").forEach(cb=> cb.checked = all.checked);
    });
  }

  // Calendar (same as other pages)
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
})();
