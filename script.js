const form = document.querySelector("form");
const b = document.querySelector("#b");
const a = document.querySelector("#a");
const errorMsg = document.querySelector("#error-msg");
const successMsg = document.querySelector("#success-msg");
const button = document.querySelector("#verify");
let checked = false;
let visible = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.classList.remove("invisible");
  successMsg.innerHTML = `Está correto, o valor de B - ${b.value} é maior doque A - ${a.value}`;
})

b.addEventListener("keyup", (e) => {
  // const isError = b.classList.contains("error");
  checked = parseInt(e.target.value) > parseInt(a.value);

  if (checked) {
    if (!visible) {
      b.classList.remove("error");
      errorMsg.classList.add("invisible");
      button.disabled = false;
      visible = true;
    }
  } else if (visible) {
    b.classList.add("error");
    errorMsg.classList.remove("invisible");
    successMsg.classList.add("invisible");
    button.disabled = true;
    visible = false;
  }

})

