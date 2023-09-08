const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const errorFullName = document.querySelector("#fullname-error");
let nameIsFull = false;

function checkFullName (name) {
  const splitName = name.split(" ");
  return splitName.length >= 2;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const accountNumber = document.querySelector("#accountNumber");
  const amount = document.querySelector("#amount");
  const description = document.querySelector("#description");
  const successMsg = document.querySelector("#success-msg");

  if (nameIsFull) {
    successMsg.classList.remove("invisible");
    successMsg.innerHTML = `Transferencia realizada com sucesso para ${fullName.value}, conta ${accountNumber.value}. No valor de ${amount.value}. Descricao: ${description.value}`;
  }
});

fullName.addEventListener("keyup", (e) => {
  const el = e.target;
  const checkCotainTagInvisible = errorFullName.classList.contains("invisible");
  nameIsFull = checkFullName(el.value);

  if (nameIsFull) {
    if (!checkCotainTagInvisible) {
      errorFullName.classList.add("invisible");
      el.classList.remove("error");
    }
  } else if (checkCotainTagInvisible) {
    errorFullName.classList.remove("invisible");
    el.classList.add("error");
  }
});