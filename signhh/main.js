const input = document.getElementById("password");
const setCaret = el => {
    const range = document.createRange(),
        sel = window.getSelection();
    range.setStart(
        el.childNodes[0], el.innerText.length
    );
    range.collapse(true);

    sel.removeAllRanges();
    sel.addRange(range);
};
const buttonfreim = button => {
    button.classList.button("showing");

    input.type = input.type === "password"
        ? "text"
        : "password";

    input.focus();
    setCaret(input);
};
// function change() {
//     if (password.type = 'password') {
//         password.type = 'text';
//     } else {
//         password.type = 'password';
//     }
// };