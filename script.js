function startAI() {
  const input = document.getElementById("wordInput");
  const boot = document.getElementById("boot");

  if (!input || !input.value.trim()) {
    alert("Please enter a word");
    return;
  }

  localStorage.setItem(
    "word",
    input.value.trim().toLowerCase().replace(/\s+/g, " ")
  );

  if (boot) boot.style.display = "block";

  setTimeout(() => {
    window.location.href = "view.html";
  }, 1800);
}

/* =========================
   KNOWLEDGE DATA
========================= */

let knowledgeData = {};

async function loadKnowledge() {
  try {
    const res = await fetch("data.json");
    knowledgeData = await res.json();
  } catch (err) {
    console.error("Error loading data.json", err);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadKnowledge();

  const panel = document.getElementById("infoPanel");
  const nodes = document.querySelectorAll(".node");
  const center = document.getElementById("centerWord");

  if (!panel || !center) return;

  const word = localStorage.getItem("word") || "ai";
  center.innerText = word.toUpperCase();

  const wordData = knowledgeData[word];

  window.openNode = function (type, element) {
    nodes.forEach(n => n.classList.remove("active"));
    element.classList.add("active");

    panel.classList.remove("idle"); // ✅ FIX visibility issue

    panel.innerHTML = `
      <h3>${capitalize(type)}</h3>
      <p>${wordData?.[type] || "Information not available for this topic."}</p>
    `;
  };

  window.showAll = function () {
    nodes.forEach(n => n.classList.remove("active"));
    panel.classList.remove("idle"); // ✅ FIX visibility issue

    panel.innerHTML = `
      <h3>Definition</h3><p>${wordData?.definition || "N/A"}</p>
      <h3>Uses</h3><p>${wordData?.uses || "N/A"}</p>
      <h3>Working</h3><p>${wordData?.working || "N/A"}</p>
      <h3>Benefits</h3><p>${wordData?.benefits || "N/A"}</p>
      <h3>Future</h3><p>${wordData?.future || "N/A"}</p>
    `;
  };
});

/* =========================
   HELPERS
========================= */

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/* =========================
   PNG DOWNLOAD (FIXED)
========================= */

function downloadPNG() {
  const panel = document.getElementById("infoPanel");

  if (!panel || panel.innerText.trim() === "") {
    alert("No information to download");
    return;
  }

  html2canvas(panel, {
    backgroundColor: "#0b0f1a",
    scale: 2
  }).then(canvas => {
    const link = document.createElement("a");
    const word = localStorage.getItem("word") || "ai-topic";

    link.download = `${word}_ai_information.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
