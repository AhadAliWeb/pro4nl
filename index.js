const bars = document.querySelector(".bars");
const sidePanel = document.querySelector(".sidepanel-nav");
const close = document.querySelector(".close");
const sideLinks = document.querySelector(".side-links");
const links = sideLinks.querySelectorAll("a");

bars.addEventListener("click", () => {
  sidePanel.classList.add("block");
  sidePanel.classList.remove("none");
});

close.addEventListener("click", () => {
  sidePanel.classList.add("none");
  sidePanel.classList.remove("block");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    sidePanel.classList.add("none");
    sidePanel.classList.remove("block");
  });
});
