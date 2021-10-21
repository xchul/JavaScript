var num = document.getElementById('txtn')
var sel = document.getElementById('selnum')
var p = document.getElementById('par')


var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adc() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado `
        sel.appendChild(item)
        p.innerHTML = ''
    } else {
        alert('Valor inválido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function fin() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        
        p.innerHTML = ''
        p.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        p.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        p.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        p.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        p.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
    }
}






