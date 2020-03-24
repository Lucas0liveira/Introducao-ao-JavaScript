function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('Verifica ai que deu errado')
    } else {
        var formSex = document.getElementsByName('txtsex')
        var idade = ano - Number(formAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade < 13) {
                //criança
                img.setAttribute('src', 'Banco de Imagens/bebe-m.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'Banco de Imagens/jovem-m.png')
            } else if (idade < 60) {
                //adult
                img.setAttribute('src', 'Banco de Imagens/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'Banco de Imagens/idoso-m.png')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade < 13) {
                //criança
                img.setAttribute('src', 'Banco de Imagens/bebe-f.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'Banco de Imagens/jovem-f.png')
            } else if (idade < 60) {
                //adulta
                img.setAttribute('src', 'Banco de Imagens/adulto-f.png')
            } else {
                //idosa
                img.setAttribute('src', 'Banco de Imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}