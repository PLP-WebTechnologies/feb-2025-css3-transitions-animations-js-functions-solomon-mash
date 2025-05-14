// Animate box on button click
document.getElementById("animateButton").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.classList.remove("animated"); // Reset animation
  void box.offsetWidth; // Force reflow
  box.classList.add("animated");
});

// Save color preference to localStorage
document.getElementById("savePref").addEventListener("click", () => {
  const color = document.getElementById("colorPicker").value;
  localStorage.setItem("preferredColor", color);
  applyPreference(color);
  alert("✅ Preference saved!");
});

// Apply stored preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("preferredColor");
  if (savedColor) {
    document.getElementById("colorPicker").value = savedColor;
    applyPreference(savedColor);
  }
});

function applyPreference(color) {
  document.body.style.backgroundColor = color;
}
