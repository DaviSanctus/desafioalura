let amigos = [];

function adicionarAmigo() {
  let teste = document.querySelector("input");

  if (!teste.value) {
    alert("Por favor, insira um nome");
  } else {
    amigos.push(teste.value);
    document.getElementById("listaAmigos").innerHTML = amigos;
  }
  limparCampo();
}

function limparCampo() {
  teste = document.querySelector("input");
  teste.value = "";
}

function sortearAmigo() {
  if (amigos.length == 0) {
    console.log("");
  } else {
    indiceLimite = amigos.length;
    indiceEscolhido = Math.floor(Math.random() * indiceLimite);
    sorteado = amigos[indiceEscolhido];
    document.getElementById("resultado").innerHTML = sorteado;
  }
}
