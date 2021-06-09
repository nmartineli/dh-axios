const buscaCep = require("./src/requests/buscaCep");

async function run() {
  const endereco = await buscaCep.buscarCep("");
  console.log(endereco);
}

run();
