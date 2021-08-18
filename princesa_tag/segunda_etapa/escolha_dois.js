var escolhaDois

function escolhaDois () {
    escolhaDois = prompt('1 - Vestir roupas 2 - Continuar fuga');
while (true) {
    if (escolhaDois == 1 || escolhaDois == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaDois = prompt('1 - Vestir roupas 2 - Continuar fuga');
    }
}
if (escolhaDois == 1) {
    location = ('./escapou_castelo.html')
} else {
    location = ('./game_over_um.html')
}
}