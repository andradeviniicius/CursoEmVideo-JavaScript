
   // ((p1 * 10) + (a1 * 6.25) - (i1 * 5) + 5)
   //TMB fem = 655 + (9,6 x peso em kg.) + (1,8 x altura em cm) - (4,7 x idade em anos).
    
   var res = document.querySelector('div#res')

   function calcular() {
       
        var peso = document.querySelector('input#peso')
        var idade = document.querySelector('input#idade')
        var altura = document.querySelector('input#altura')
        var a1 = Number(altura.value)
        var p1 = Number(peso.value)
        var i1 = Number(idade.value)

       if (i1 >= 100) {
            window.alert('[ERRO] Idade Invalida')
       }

       else {
            
        var frad = document.getElementsByName('radiosex')
        
        if (frad[0].checked) { 
            var cmasc = ((p1 * 10) + (a1 * 6.25) - (i1 * 5) + 5)
            res.innerHTML = `O seu corpo gasta parado ${cmasc} calorias` 
       }     
       
       else if (frad[1].checked) {
            var cfem = 655 + (9.6 * p1) + (1.8 * a1) - (4.7 * i1)
            res.innerHTML = `O seu corpo gasta parado ${cfem} calorias` 
       }
    
   }
}