function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${horas}:${minutos}.`
    if (horas >= 0 && horas < 6) {
        img.src = 'foto-madrugada.jpg'
        document.body.style.background = 'black'
    } else if (horas >= 6 && horas <= 11) {
        img.src = 'foto-manha.jpg'
        document.body.style.background = 'orange'
    } else if (horas > 11 && horas <= 17) {
        img.src = 'foto-tarde.jpg'
        document.body.style.background = 'blue'
    } else {
        img.src = 'foto-noite.jpg'
        document.body.style.background = 'darkblue'
    }
}

carregar()