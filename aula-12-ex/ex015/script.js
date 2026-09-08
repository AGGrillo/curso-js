function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var result = document.querySelector('div#result')
    if (formAno.value.length == 0 || formAno.value < 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.height = '200px'
        img.style.width = '200px'
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.borderRadius = '50%'
        img.style.marginTop = '10px'
        img.style.marginBottom = '10px'
        if (formSex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'bebe-masculino.jpg')
            } else if (idade < 22) {
                img.setAttribute('src', 'jovem-masculino.jpg')
            } else if (idade < 51) {
                img.setAttribute('src', 'adulto.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (formSex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'bebe-feminino.jpg')
            } else if (idade < 22) {
                img.setAttribute('src', 'jovem-feminino.jpg')
            } else if (idade < 51) {
                img.setAttribute('src', 'adulta.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        result.appendChild(img)
    }
}