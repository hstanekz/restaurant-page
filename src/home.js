import { content, createHtmlElement } from "./index.js";

function renderHome() {
  const main = document.createElement("main");

  const welcome = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Welcome"
  );
  const title = createHtmlElement("h1", null, ["white"], "The Pizza Place");

  const hr = document.createElement("hr");
  const subtitle = createHtmlElement(
    "p",
    null,
    ["text-center", "white"],
    "The pleasure of eating with your hands. Truly delightful!"
  );
  const button = createHtmlElement("button", null, null, "View the menu");

  main.appendChild(welcome);
  main.appendChild(title);
  main.appendChild(hr);
  main.appendChild(subtitle);
  main.appendChild(button);

  content.appendChild(main);
}

export { renderHome };
