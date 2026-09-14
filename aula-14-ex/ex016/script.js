function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let result = document.getElementById('result')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    result.innerHTML = `Contando:<br>`
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        result.innerHTML = 'Impossível contar!'
    } else if (i == f) {
        result.innerHTML = 'Início e fim idênticos!'
    } else {
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1
            passo.value = '1'
        }
        if (i < f) {
            for(let cont = i; cont <= f; cont += p) {
                result.innerHTML += `${cont} \u{1F449}	`
            }
        } else if (i > f) {
            for(let cont = i; cont >= f; cont -= p) {
                result.innerHTML += `${cont} \u{1F449}	`
            }
        }   
        result.innerHTML += `\u{1F3C1}`
    }
}