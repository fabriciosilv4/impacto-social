const menu_button = document.getElementById("menu_button");
const navigation = document.getElementById("navigation");

menu_button.addEventListener("click", function () {
    const is_open = navigation.classList.toggle("active");

    menu_button.setAttribute("aria-expanded", is_open);

    if (is_open) {
        menu_button.setAttribute("aria-label", "Fechar menu");
    } else {
        menu_button.setAttribute("aria-label", "Abrir menu");
    }
});

const navigation_links = document.querySelectorAll(".navigation a");

navigation_links.forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menu_button.setAttribute("aria-expanded", "false");
        menu_button.setAttribute("aria-label", "Abrir menu");
    });
});

const contact_form = document.getElementById("contact_form");
const form_message = document.getElementById("form_message");

contact_form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        form_message.textContent = "Preencha todos os campos.";
        form_message.className = "form_message form_error";
        return;
    }

    form_message.textContent = "Mensagem enviada com sucesso!";
    form_message.className = "form_message form_success";

    contact_form.reset();
});