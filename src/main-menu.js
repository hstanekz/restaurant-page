import { content, createHtmlElement } from "./index.js";

const menu = [
  {
    name: "Crispy Pepperoni Pizza",
    description:
      "Delicious pepperoni pizza with a crispy crust and mouthwatering toppings.",
    price: "$12.99",
  },
  {
    name: "Margherita Pizza",
    description:
      "Classic Margherita pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
    price: "$10.99",
  },
  {
    name: "Vegetarian Supreme Pizza",
    description:
      "A delightful combination of fresh vegetables on a cheesy pizza base.",
    price: "$11.99",
  },
];

function renderMenu() {
  const main = document.createElement("main");
  main.classList.add("main");

  const welcome = createHtmlElement("p", null, ["cursive", "golden"], "Welcome");
  const title = createHtmlElement("h1", null, ["gray"], "Menu");

  const hr = document.createElement("hr");

  main.appendChild(welcome);
  main.appendChild(title);
  main.appendChild(hr);

  menu.forEach((item) => {
    const div = createHtmlElement("div", null, ["menu-item"], null);

    const name = createHtmlElement("h2", null, ["golden"], item.name);
    const description = createHtmlElement("p", null, ["gray"], item.description);
    const price = createHtmlElement("h2", null, ["golden"], item.price);
    const hr = createHtmlElement("hr", null, ["menu-hr"], null);

    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(hr);

    main.appendChild(div);
  });

  content.appendChild(main);
}

export { renderMenu };
