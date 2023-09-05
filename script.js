const form = document.querySelector("form");
const b = document.querySelector("#b");
const a = document.querySelector("#a");
const successMsg = document.querySelector("#success-msg");

let msgIsVisible = false; // armazena o status de visibilidade para não executar o comando mais de uma vez sem necessidade.
function msgVisible(boolean) {
  if (boolean) {
    if (!msgIsVisible) {
      msgIsVisible = true;
      successMsg.classList.remove("invisible");
    }
  } else if (msgIsVisible) {
    msgIsVisible = false;
    successMsg.classList.add("invisible");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  msgVisible(true);
  successMsg.innerHTML = `Está correto, o valor de B - ${b.value} é maior doque A - ${a.value}`;
})

a.addEventListener("keyup", (e) => {
    const valueA = parseFloat(e.target.value);
    b.min = valueA + 1;

    msgVisible(false);
})

b.addEventListener("keyup", () => msgVisible(false));
