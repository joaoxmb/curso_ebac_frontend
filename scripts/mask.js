import { cepQuery } from "./cep.js";

const address = $("#address")
const tel = $("#tel")
const cpf = $("#cpf")
const cep = $("#cep")

tel.mask("(00) 00000-0000")
cpf.mask("000.000.000-00")
cep.mask("00000-000", {
  onComplete: (cepValue) => {
    const converted = cepValue.replace(/\D/g, "");

    cepQuery(converted)
      .then((data) => {
        address
          .val(data.logradouro)
        
        cep
          .removeClass()
          .addClass("valid")
      })
      .catch((err) => {
        address
          .attr("placeholder", err.message)
        
        cep
          .removeClass()
          .addClass("invalid")
      })
  }
})