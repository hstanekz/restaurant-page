import { renderNav } from "./navbar.js";
import { renderHome } from "./home.js";
import { renderFooter } from "./footer.js";
import { renderMenu } from "./main-menu.js";
import { renderAbout } from "./about.js";

const content = document.getElementById("content");

function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

  if (content) element.innerText = content;

  return element;
}

function home() {
    content.innerHTML = "";
    renderNav();
    renderHome();
    renderFooter();
  }
  function menu() {
    content.innerHTML = "";
    renderNav();
    renderMenu();
    renderFooter();
  }
  function about() {
    content.innerHTML = "";
    renderNav();
    renderAbout();
    renderFooter();
  }
  
  home();
  document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "HOME") home();
    if (target === "MENU" || target === "SEE MENU") menu();
    if (target === "ABOUT") about();
  });

export { createHtmlElement, content };