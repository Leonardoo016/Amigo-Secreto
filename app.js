let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else { 
        amigos.push(nome);
        atualizarListaAmigos();
        document.getElementById("amigo").value = "";
        }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function semDuplicar() {
    amigos = document.querySelector ("input");
    amigos.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos para sortear. Adicione ao menos um amigo!");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
    amigos.length = 0;
    atualizarListaAmigos();
    semDuplicar();
}