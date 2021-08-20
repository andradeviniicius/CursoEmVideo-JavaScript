    function calcular() {
        let inicio = document.querySelector('input#inicio')
        let fim = document.querySelector('input#fim')
        let passo = document.querySelector('input#passo')
    
        var i1 = Number(inicio.value)
        var f1 = Number(fim.value)
        var p1 = Number(passo.value)
    
        var res = document.querySelector('div#resultado')
         
        for(var i = i1;f1 >= i; i+=p1) {
            
            res.innerHTML += ''
            res.innerHTML += `${i}`
            res.innerHTML += '👉'
            
            
        }
        res.innerHTML += '👌'
    
        
    }
    

