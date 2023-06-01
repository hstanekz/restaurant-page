function nav() {
    const head = document.createElement('header');
    head.textContent = "Restaurant Page";
    const contentSelect = document.querySelector('#content');
    contentSelect.appendChild(head);
}

export {nav}