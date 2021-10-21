function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero= 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src' , 'craincah.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'adolescenth.png')
            } else if (idade <50 ){
                //adulto
                img.setAttribute('src' , 'adultoh.png')
            } else {
                //idoso
                img.setAttribute('src' , 'idosoh.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src' , 'criancam.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'adolescentem.png')
            } else if (idade <50 ){
                //adulto
                img.setAttribute('src' , 'adultom.png')
            } else {
                //idoso
                img.setAttribute('src' , 'idosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}