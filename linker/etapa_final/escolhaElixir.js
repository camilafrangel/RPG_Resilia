var escolhaElixir

function escolhaElixir () {
    escolhaElixir = prompt('1 - Seguir com vingança  2 - Entregar elixir');
while (true) {
    if (escolhaElixir == 1 || escolhaElixir == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaElixir = prompt('1 - Seguir com vingança  2 - Entregar elixir');
    }
}
if (escolhaElixir == 1) {
    location = ('../fim/final_triste.html')
} else {
    location = ('../fim/final_feliz.html')
}
}