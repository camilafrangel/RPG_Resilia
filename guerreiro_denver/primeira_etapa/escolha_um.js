var escolhaUm

function escolhaUm () {
    escolhaUm= prompt('1 - Ajudar 2 - Não ajudar');
while (true) {
    if (escolhaUm == 1 || escolhaUm == 2) {
        break
    } else {
        escolhaUm= prompt('1 - Ajudar 2 - Não ajudar');
    }
}
if (escolhaUm == 1) {
    location = ('./ajudar.html')
} else {
    location = ('./nao_ajudar.html')
}
}