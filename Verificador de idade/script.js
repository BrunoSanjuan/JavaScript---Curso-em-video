function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    var anoNascimento = Number(fano.value)

    if (fano.value.length == 0 || anoNascimento <= 0 || anoNascimento > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotobebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotoadolescente.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoadultomasculino.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosomasculino.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotobebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotoadolescente.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoadultofeminino.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosafeminino.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}