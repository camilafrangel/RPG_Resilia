var trabalhoEquipe

function trabalhoEquipe () {
    trabalhoEquipe = prompt('1 - Aceitar proposta 2 - Tentar sozinho');
while (true) {
    if (trabalhoEquipe == 1 || trabalhoEquipe == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        trabalhoEquipe = prompt('1 - Aceitar proposta 2 - Tentar sozinho');
    }
}
if (trabalhoEquipe == 1) {
    location = ('./equipe_denver.html')
} else {
    location = ('./game_over_dragao.html')
}
}