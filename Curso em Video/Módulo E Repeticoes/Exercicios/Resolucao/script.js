    function calcular() {
        
        let inicio = document.querySelector('input#txti')
        let fim = document.querySelector('input#txtf')
        let passo = document.querySelector('input#txtp')
        var res = document.querySelector('div#res')
        
        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            window.alert('[ERRO] Confira os dados')
        } else {
            res.innerHTML ='Contando:'
            let i1 = Number(inicio.value)
            let f1 = Number(fim.value)
            let p1 = Number(passo.value)
            if(i1 < f1) {
                
            }

        for(let i = i1; f1 >= i; i += p1) {
            
            res.innerHTML += ''
            res.innerHTML += `${i}`
            res.innerHTML += '👉'
        }
    }
    }