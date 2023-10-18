import "./mask.js"

const form = $("#register form");

form.on("submit", (e) => {
  e.preventDefault();
  const name = $("#fullname");
  const nameIsValid = name
    .val()
    .split(" ")
    .length > 1;
  
  if(nameIsValid){
    name.removeClass()
    form[0].reset()
    alert("Registro criado com sucesso!")
    return;
  }

  name 
    .val("")
    .removeClass()
    .addClass("invalid")
    .attr("placeholder", "Você deve preencher com o seu nome inteiro.")
    .focus()

})