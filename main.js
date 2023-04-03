const form = document.getElementById("form-agenda")
var linhas = ""
const nomes = []
const numeros = []


form.addEventListener("submit", function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNomeContato = documento.getElementById("nome-contato");
    const inputNumeroContato = documento.getElementById("numero-contato");

    if(nomes.includes(inputNomeContato.value)){
        alert(`O Contato: ${inputNomeContato.value} já está cadastrado`)
    } else {
        nomes.push(inputNomeContato.value)
        numeros.push(parseFloat(inputNumeroContato.value))

        var linha = `<tr>`

        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroContato.value}</td>`
        linha += `</tr>`

        linhas += linha

    }

    inputNomeContato.value = ""
    inputNumeroContato.value = ""
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}