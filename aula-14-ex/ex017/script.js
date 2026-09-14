function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    tab.innerHTML = ''
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
        let item = document.createElement('option')
        item.text = 'Digite um número acima'
        tab.appendChild(item)
    } else {
        let n = Number(num.value)
        let cont = 1
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
}