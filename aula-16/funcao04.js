function fatorial(n) {
    let fat = 1
    for(let cont = n; cont > 1; cont--) {
        fat *= cont
    }
    return fat 
}

console.log(fatorial(6))