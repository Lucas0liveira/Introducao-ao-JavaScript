function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos`

    if (hora >= 0 && hora < 12) {
        img.src = 'Banco de Imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'Banco de Imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'Banco de Imagens/noite.png'
        document.body.style.background = '#515154'
    }
}