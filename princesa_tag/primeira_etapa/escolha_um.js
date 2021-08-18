var escolhaUm

function escolhaUm () {
    escolhaUm= prompt('1 - Seguir pelo corredor 2 - Cozinha');
while (true) {
    if (escolhaUm == 1 || escolhaUm == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaUm = prompt('1 - Seguir pelo corredor 2 - Cozinha');
    }
}
if (escolhaUm == 1) {
    location = ('../segunda_etapa/game_over_um.html')
} else {
    location = ('../segunda_etapa/cozinha.html')
}
}