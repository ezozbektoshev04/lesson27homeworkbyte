const body = document.querySelector("body"),
  modelToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("aside");
sidebarToggle = body.querySelector(".sidebar-toggle");

modelToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
