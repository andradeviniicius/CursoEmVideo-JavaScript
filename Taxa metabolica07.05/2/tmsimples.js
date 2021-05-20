function calcular() {
    var altura = document.querySelector('input#altura')
    a1 = Number(altura.value)
    var peso = document.querySelector('input#peso')
    p1 = Number(peso.value)
    var idade = document.querySelector('input#idade')
    i1 = Number(idade.value)
    var main = document.querySelector('div#main')
    var main1 = document.querySelector('div#main1')

    var frad = document.getElementsByName('radiosex')

    if (frad[0].checked) {
        var cmasc = ((p1 * 10) + (a1 * 6.25) - (i1 * 5) + 5)
        main4.innerHTML = `O seu corpo gasta parado gasta ${cmasc} calorias`
    } 
    
    else if (frad[1].checked) {
        var cfem = 655 + (9.6 * p1) + (1.8 * a1) - (4.7 * i1)
        main4.innerHTML = `O seu corpo gasta parado gasta ${cfem} calorias`
    }
}