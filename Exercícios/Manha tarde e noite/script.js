function carregar() {

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora <12) {
    img.src = 'cafe.png'
    document.body.style.background = 'rgb(228, 108, 28)'
} else if (hora >= 12 && hora < 18) {
    img.src = 'almoco.png'
    document.body.style.background = 'rgb(75, 187, 231)'
} else {
    img.src = 'jantar.png'
    document.body.style.background = 'rgb(3, 5, 31)'
}
}

