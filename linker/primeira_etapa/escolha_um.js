var escolhaUm

function escolhaUm () {
    escolhaUm= prompt('1 - Flexbox: Masmorras    2 - Web: Rios e masmorras');
while (true) {
    if (escolhaUm == 1 || escolhaUm == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaUm= prompt('1 - Flexbox: Masmorras    2 - Web: Rios e masmorras');
    }
}
if (escolhaUm == 1) {
    location = ('./flexbox.html')
} else {
    location = ('./game_over_web.html')
}
}