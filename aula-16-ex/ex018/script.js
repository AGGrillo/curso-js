let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let result = document.querySelector('div#result')
let valores = []

function eNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function emLista(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (eNumero(num.value) && !emLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        result.innerHTML = ''
    } else {
        window.alert('Número inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            } 
        }
        media = soma / tot
        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo, temos ${tot} valores cadastrados.</p>`
        result.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p?`
        result.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p?`
        result.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        result.innerHTML += `<p>A média dos valores cadastrados é ${media}.</p>`
    }
}

function excluirItem() { 
    if (lista.length == 0) {
        window.alert('Lista vazia!')
    } else {
        let i = lista.selectedIndex
        if (i == -1) {
            window.alert('Selecione um item!')
        } else { 
            lista.remove(i)
            valores.splice(i, 1)
            result.innerHTML = ''
        }    
    }
}