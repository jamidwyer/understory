import "/vendor/understory-web-components.js";

const nav = document.getElementById("nav");
const updateSelected = () => nav.setAttribute("selected", location.hash || "#button");
window.addEventListener("hashchange", updateSelected);
updateSelected();
