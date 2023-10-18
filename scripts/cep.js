export const cepQuery = (cep) => new Promise( async (resolve, reject) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json();
    
    if (!data?.erro) {
      return resolve(data);
    }
    return reject({
      message: "CEP não encontrado."
    });
})