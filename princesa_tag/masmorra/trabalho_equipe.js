var trabalhoEquipe

function trabalhoEquipe () {
    trabalhoEquipe = prompt('1 - Juntar a eles 2 - Sozinha');
while (true) {
    if (trabalhoEquipe == 1 || trabalhoEquipe == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        trabalhoEquipe = prompt('1 - Juntar a eles 2 - Sozinha');
    }
}
if (trabalhoEquipe == 1) {
    location = ('./equipe_princesa.html')
} else {
    location = ('./game_over_dragao.html')
}
}