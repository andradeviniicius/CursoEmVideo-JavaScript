    function calcular() {
        
        let inicio = document.querySelector('input#txti')
        let fim = document.querySelector('input#txtf')
        let passo = document.querySelector('input#txtp')
        
        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            window.alert('[ERRO] Confira os dados')
        } else {
            res.innerHTML ='Contando:'
            let i1 = Number(inicio.value)
            let f1 = Number(fim.value)
            let p1 = Number(passo.value)
        
        let res = document.querySelector('div#res')
        
        for(let i = i1; f1 >= i; i += p1) {
            
            res.innerHTML += ''
            res.innerHTML += `${i}`
            res.innerHTML += '👉'
        }
    }
    }




            /* resolucao
function calcular() {
    let ini = document.querySelector('input#txti') //essa variavel nao existe fora do bloco calcular devido a propriedade do elemento Let
    let fim = document.querySelector('input#txtf')
    let pas = document.querySelector('input#txtp')

    if (ini.value.lenght == 0 || )
} */