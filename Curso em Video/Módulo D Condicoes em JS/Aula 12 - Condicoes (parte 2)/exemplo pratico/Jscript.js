
    var res = document.querySelector('div#res')
    var pesq = document.querySelector('input#pesquisa'.toLowerCase)
function verif() {
    if (pesq == 'Vinicius') {
        res.innerHTML= 'Seja bem vindo, Vinícius'
    }
    if (pesq == 'Matheus') {
        res.innerHTML= 'Seja bem vindo, Matheus'
    }
    if (pesq == 'Valerio') {
        res.innerHTML= 'Seja bem vindo, Valerio'
    } 
    else {
        res.innerHTML='Você não é um funcionario, saia >:('
    }
}
