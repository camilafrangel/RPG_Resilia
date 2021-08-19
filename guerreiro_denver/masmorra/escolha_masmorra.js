var escolhaMasmorra

function escolhaMasmorra () {
    escolhaMasmorra= prompt('1 - justify-content: space-between;  2 - align-items: center;');
while (true) {
    if (escolhaMasmorra == 1 || escolhaMasmorra == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaMasmorra= prompt('1 - justify-content: space-between; 2 - align-items: center;');
    }
}
if (escolhaMasmorra == 1) {
    location = ('./passagem_aberta.html')
} else {
    location = ('./game_over_flex.html')
}
}