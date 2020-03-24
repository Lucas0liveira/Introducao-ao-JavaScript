function contar() {
    let inicio = window.document.getElementById('inicio').value
    let fim = window.document.getElementById('fim').value
    let passo = window.document.getElementById('passo').value
    let res = window.document.getElementById('res')

    if (inicio == '' || fim == '' || inicio == fim) {
        window.alert("Intervalo Inválido")
        res.innerHTML = 'Impossível contar'
    } else {
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        res.innerHTML = ""

        if (passo == 0) {
            window.alert("PASSO INVÁLIDO. Assumindo Passo = 1")
            passo = 1
        }

        if (inicio > fim) {
            //contagem decrescente
            for (let i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `👉 ${i} `
            }
            res.innerHTML += `🏁`
        } else {
            //contagem crescente
            for (let i = inicio; i <= fim; i += passo) {
                res.innerHTML += `\u{1f449} ${i} `
            }
            res.innerHTML += `\u{1f3C1}`
        }
    }
}
