let vetor = []
let getNum = document.getElementById('numero')
let tabela = document.getElementById('tabela')
let res = document.getElementById('res')


function isNumero(n) {
    return (n <= 100 && n >= 1)
}

function inLista(n, v) {
    return (v.indexOf(Number(n)) != -1)
}

function adicionar() {
    let n = Number(getNum.value)
    if (isNumero(n) && !inLista(n, vetor)) {
        let linha = document.createElement('option')
        vetor.push(n)
        linha.text = `Valor ${n} Adicionado.`
        tabela.appendChild(linha)
        res.innerHTML = ''
    } else {
        alert('Entrada Inválida. Certifique-se de fornecer um número que não esteja na lista.')
    }
    getNum.value = ''
    getNum.focus()
}

function analisar() {
    if (vetor.length > 0) {
        vetor.sort(Number)
        let soma = 0
        for (n in vetor) {
            soma += vetor[n]
        }
        let media = soma / vetor.length
        let menor = vetor[0]
        let maior = vetor[vetor.length - 1]
        res.innerHTML += `<p></p>`
        res.innerHTML += `Ao todo, há ${vetor.length} números cadastrados,<p></p>`
        res.innerHTML += `O maior é ${maior},<p></p>`
        res.innerHTML += `O menor é ${menor},<p></p>`
        res.innerHTML += `A soma dos valores corresponde a ${soma},<p></p>`
        res.innerHTML += `E a média é ${media}.`
    } else {
        alert('Adicione um elemento para começar.')
    }

}

