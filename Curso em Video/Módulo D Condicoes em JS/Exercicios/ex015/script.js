function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('Invalido')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                genero = 'Criança'
                
            }
                else if (idade <= 17) {
                    genero = 'adolescente'
                    
            }   else if (idade <= 23) {
                genero = 'Jovem'
                
            }   else if (idade <= 60 ) {
                genero = 'Adulto'
            }   else {
                genero = 'Senhor'
            }


            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                genero = 'uma criança'
                
            }
                else if (idade <= 17) {
                    genero = 'adolescente'
                    
            }   else if (idade <= 23) {
                genero = 'uma jovem'
                
            }   else if (idade <= 60 ) {
                genero = 'uma adulta'
            }   else {
                genero = 'Senhora'
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    }
    
}