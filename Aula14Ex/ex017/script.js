function calcular() {
    let numero = window.document.getElementById('num').value
    let seletor = window.document.getElementById('select')

    if (numero != '') {
        numero = Number(numero)

        seletor.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `>> ${i} x ${numero} = ${i * numero}`
            seletor.appendChild(item)
        }
    } else {
        window.alert('Digite um número para executar!')
    }
}