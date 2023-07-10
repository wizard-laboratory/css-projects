const section = document.getElementById("section")
const overlay = document.getElementById("overlay")
const showBtn = document.getElementById("show-modal")
const closeBtn = document.getElementById("close-btn")

showBtn.addEventListener("click", () => section.classList.add("active"));
  overlay.addEventListener("click", () =>
    section.classList.remove("active")
  );

closeBtn.addEventListener("click", () =>
  section.classList.remove("active")
);