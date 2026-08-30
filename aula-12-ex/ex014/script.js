function carregar() {
    var msg1 = window.document.getElementById('msg1')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    if (minutos < 10) {
        msg2.innerHTML = `Agora são ${horas}:0${minutos}.`
    } else {
        msg2.innerHTML = `Agora são ${horas}:${minutos}.`
    }
    if (horas >= 0 && horas < 6) {
        msg1.innerHTML = 'BOA MADRUGADA!!'
        img.src = 'foto-madrugada.jpg'
        document.body.style.background = 'black'
    } else if (horas >= 6 && horas <= 11) {
        msg1.innerHTML = 'BOM DIA!!'
        img.src = 'foto-manha.jpg'
        document.body.style.background = 'orange'
    } else if (horas > 11 && horas <= 17) {
        msg1.innerHTML = 'BOA TARDE!!'
        img.src = 'foto-tarde.jpg'
        document.body.style.background = 'blue'
    } else {
        msg1.innerHTML = 'BOA NOITE!!'
        img.src = 'foto-noite.jpg'
        document.body.style.background = 'darkblue'
    }
}

carregar()