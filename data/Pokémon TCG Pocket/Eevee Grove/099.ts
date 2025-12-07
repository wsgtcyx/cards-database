import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Gardevoir",
        "fr": "Gardevoir",
        "es": "Gardevoir",
        "it": "Gardevoir",
        "de": "Gardevoir",
        "pt-br": "Gardevoir",
        "zh-tw": "沙奈朵",
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    evolveFrom: {
        en: "Kirlia",
        "fr": "Kirlia",
        "es": "kirlia",
        "it": "Kirlia",
        "de": "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "基利亞"
    },
    description: {
        en: "To protect its Trainer, it will expend all its psychic\npower to create a small black hole.",
        "fr": "Pour protéger son Dresseur, il dépensera tous ses pouvoirs psychiques\npouvoir de créer un petit trou noir.",
        "es": "Para proteger a su Entrenador, gastará toda su energía psíquica.\npoder para crear un pequeño agujero negro.",
        "it": "Per proteggere il suo Allenatore, spenderà tutta la sua forza psichica\npotere di creare un piccolo buco nero.",
        "de": "Um seinen Trainer zu schützen, wird es sein gesamtes psychisches Potenzial aufwenden\nMacht, ein kleines Schwarzes Loch zu erzeugen.",
        "pt-br": "Para proteger seu Treinador, ele gastará todo o seu poder psíquico\npoder para criar um pequeno buraco negro.",
        "zh-tw": "為了保護訓練家，它會耗盡所有的靈能\n產生小黑洞的能力。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Psy Shadow",
                "fr": "Ombre Psy",
                "es": "Sombra psi",
                "it": "Psico Ombra",
                "de": "Psi-Schatten",
                "pt-br": "Sombra Psíquica",
                "zh-tw": "心靈陰影"
            },
            effect: {
                en: "Once during your turn, you may take a {P} Energy from your Energy Zone and attach it to the {P} Pokémon in the Active Spot.",
                "fr": "Une fois pendant votre tour, vous pouvez prendre une Énergie {P} de votre Zone d'Énergie et l'attacher au Pokémon {P} dans le Point Actif.",
                "es": "Una vez durante tu turno, puedes tomar una Energía {P} de tu Zona de Energía y unirla al Pokémon {P} en el Punto Activo.",
                "it": "Una sola volta durante il tuo turno, puoi prendere un'Energia {P} dalla tua Zona Energetica e assegnarla al Pokémon {P} in posizione attiva.",
                "de": "Einmal während deines Zuges kannst du eine {P}-Energie aus deiner Energiezone nehmen und sie an das {P}-Pokémon an der aktiven Stelle anlegen.",
                "pt-br": "Uma vez durante o seu turno, você pode pegar uma Energia {P} da sua Zona de Energia e anexá-la ao Pokémon {P} no Ponto Ativo.",
                "zh-tw": "在你的回合中，你可以從你的能量區取出一個 {P} 能量並將其附加到活動地點的 {P} 神奇寶貝上。"
            }
        }],
    attacks: [{
            name: {
                en: "Psyshot",
                "fr": "Tir psychologique",
                "es": "Psicodisparo",
                "it": "Psicocolpo",
                "de": "Psyshot",
                "pt-br": "Psyshot",
                "zh-tw": "心理射擊"
            },
            damage: 60,
            cost: ["Psychic", "Psychic", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
