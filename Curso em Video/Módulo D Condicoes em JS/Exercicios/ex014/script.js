function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()


    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora > 5 && hora < 12){
       foto.src = 'manha.png'
       document.body.style.backgroundColor = 'cyan'
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'tarde.png'
        document.body.style.backgroundColor = 'orange'
    } else if (hora >= 18 && hora <= 24) {
        foto.src = 'noite.png'
        document.body.style.backgroundColor = 'gray'
    } else if (hora >= 0 && hora <= 5) {
        foto.src = 'madrugada.png'
        document.body.style.backgroundColor = 'black'

    }
}