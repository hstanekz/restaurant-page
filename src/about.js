import { content, createHtmlElement } from "./index.js";

function renderAbout() {
  const main = document.createElement("main");
  main.classList.add("main");

  const welcome = createHtmlElement("p", null, ["cursive", "golden"], "Welcome");
  const title = createHtmlElement("h1", null, ["gray"], "About Us");

  const hr = document.createElement("hr");

  const content =
    "At our pizza restaurant, we strive to deliver the finest pizzas made with the freshest ingredients. Our commitment to quality and taste ensures a delightful experience for our customers. Vivamus sit amet porta mauris, in vestibulum ante. Phasellus nec nisi eros. Quisque ultricies urna sit amet neque posuere luctus. Etiam viverra magna ac ligula pellentesque, sed hendrerit felis pulvinar."
  const p = createHtmlElement("p", null, ["menu-item"], content);

  main.appendChild(welcome);
  main.appendChild(title);
  main.appendChild(hr);
  main.appendChild(p);

  document.getElementById("content").appendChild(main);

}

export { renderAbout };


