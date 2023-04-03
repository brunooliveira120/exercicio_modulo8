const form = document.getElementById("form-agenda");
const nomes = [];
const numeros = [];
var linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha(){
    const inputNomecontato = document.getElementById('nome-contato');
    const inputNumerocontato = document.getElementById('numero-contato');

    if(nomes.includes(inputNomecontato.value)) {
        alert(`O contato ${inputNomecontato.value} já foi inserido`)
    } else {
        nomes.push(inputNomecontato.value)
        numeros.push(parseFloat(inputNumerocontato.value));

        var linha = `<tr>`
        linha += `<td>${inputNomecontato.value}</td>`
        linha += `<td>${inputNumerocontato.value}</td>`
        linha += `</tr>`

        linhas += linha;
    }

    inputNomecontato.value = '';
    inputNumerocontato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}