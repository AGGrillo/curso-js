function carregar() {
    var msg1 = window.document.getElementById('msg1')
    var msg2 = window.document.getElementById('msg2')
    var msg3 = window.document.getElementById('msg3')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    if (minutos < 10) {
        msg3.innerHTML = `Agora são ${horas}h0${minutos}min.`
    } else {
        msg3.innerHTML = `Agora são ${horas}h${minutos}min.`
    }
    if (horas >= 0 && horas < 6) {
        msg1.innerHTML = 'BOA MADRUGADA!!'
        msg2.innerHTML = 'Tenha uma excelente madrugada!'
        img.src = 'foto-madrugada.jpg'
        document.body.style.background = 'black'
    } else if (horas >= 6 && horas < 12) {
        msg1.innerHTML = 'BOM DIA!!'
        msg2.innerHTML = 'Tenha um excelente dia!'
        img.src = 'foto-manha.jpg'
        document.body.style.background = 'orange'
    } else if (horas >= 12 && horas < 18) {
        msg1.innerHTML = 'BOA TARDE!!'
        msg2.innerHTML = 'Tenha uma excelente tarde!'
        img.src = 'foto-tarde.jpg'
        document.body.style.background = 'blue'
    } else {
        msg1.innerHTML = 'BOA NOITE!!'
        msg2.innerHTML = 'Tenha uma excelente noite!'
        img.src = 'foto-noite.jpg'
        document.body.style.background = 'darkblue'
    }
}

carregar()