var escolhaPersonagens 

function escolhaPersonagens () {
    escolhaPersonagens = prompt('1 - Princesa Tag 2 - Linker 3 - Denver');
while (true) {
    if (escolhaPersonagens == 1 || escolhaPersonagens == 2 || escolhaPersonagens == 3) {
        break
    } else {
        alert("Personagem inválido, digite um número entre 1 e 3!");
        escolhaPersonagens = prompt('1 - Princesa Tag 2 - Linker 3 - Denver');
    }
}
if (escolhaPersonagens == 1) {
    location = ('./princesa_tag/primeira_etapa/escolha_princesa_um.html')
} else if (escolhaPersonagens == 2) {
    location = ('./linker/primeira_etapa/escolha_linker_um.html')
}
else {
    location = ('./guerreiro_denver/escolha_denver_um.html')
}
}