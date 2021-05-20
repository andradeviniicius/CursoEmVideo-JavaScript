function calcular() {
    var altura = document.querySelector('input#altura')
    a1 = Number(altura.value)
    var peso = document.querySelector('input#peso')
    p1 = Number(peso.value)
    var idade = document.querySelector('input#idade')
    i1 = Number(idade.value)
    
    
    if (a1 > 240 || a1 <= 0) {
        main1.innerHTML ='[ERRO] Altura Inválida <br>'
    } else {
        main1.innerHTML =`sua altura é de ${a1} centimetros <br>`
    }
    
    if (p1 > 280 || p1 <= 0) {
        main2.innerHTML='[ERRO] Peso Inválido <br>'
    } else {
        main2.innerHTML =`seu peso é de ${p1} kilos <br>`
    }
    
    if (i1 > 120 || i1 <= 0) {
        main3.innerHTML='[ERRO] Idade Inválida<br>'
    } else {
        main3.innerHTML =`Você tem ${i1} anos <br> <br>`
    } 
    
    var frad = document.getElementsByName('radsex')

    if (frad[0].checked) {
        var cmasc = ((p1 * 10) + (a1 * 6.25) - (i1 * 5) + 5)
        main4.innerHTML = `O seu corpo gasta parado gasta ${cmasc} calorias`
    } 
    
    else if (frad[1].checked) {
        var cfem = 655 + (9.6 * p1) + (1.8 * a1) - (4.7 * i1)
        main4.innerHTML = `O seu corpo gasta parado ${cfem} calorias`
    }
    

}