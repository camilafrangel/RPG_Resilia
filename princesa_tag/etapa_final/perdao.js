var perdao

function perdao () {
    perdao= prompt('1 - Sim  2 - Não');
while (true) {
    if (perdao == 1 || perdao == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        perdao= prompt('1 - Sim  2 - Não');
    }
}
if (perdao == 1) {
    location = ('../fim/final_feliz.html')
} else {
    location = ('../fim/final_triste.html')
}
}