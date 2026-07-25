import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/130",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/130",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/130",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/130",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/130",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/130"
    },
    name: {
        en: "Baxcalibur",
        fr: "Glaivodo",
        es: "Baxcalibur",
        it: "Baxcalibur",
        de: "Espinodon",
        "pt-br": "Baxcalibur",
        "zh-tw": "戟脊龍",
        pt: "Baxcalibur"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Crown",
    category: "Pokemon",
    hp: 170,
    types: ["Water"],
    dexId: [998],
    evolveFrom: {
        en: "Arctibax",
        fr: "Cryodo",
        es: "Arctibax",
        it: "Arctibax",
        de: "Cryospino",
        "pt-br": "Arctibax",
        "zh-tw": "凍脊龍",
        pt: "Arctibax"
    },
    stage: "Stage2",
    description: {
        en: "It launches itself into battle by flipping upside down and spewing frigid air from its mouth. It finishes opponents off with its dorsal blade.",
        "fr": "Il se lance dans la bataille en se retournant et en crachant de l'air glacial par sa bouche. Il achève les adversaires avec sa lame dorsale.",
        "es": "Se lanza a la batalla dándose la vuelta y escupiendo aire helado por la boca. Remata a sus oponentes con su hoja dorsal.",
        "it": "Si lancia in battaglia capovolgendosi e sputando aria gelida dalla bocca. Finisce gli avversari con la sua lama dorsale.",
        "de": "Es stürzt sich in die Schlacht, indem es sich auf den Kopf dreht und eiskalte Luft aus seinem Mund spuckt. Es erledigt Gegner mit seiner Rückenklinge.",
        "pt-br": "Ele se lança na batalha virando de cabeça para baixo e expelindo ar gelado pela boca. Ele acaba com os oponentes com sua lâmina dorsal.",
        "zh-tw": "它透過翻轉並從嘴裡噴出寒冷的空氣來投入戰鬥。它用背刃消滅對手。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Ice Maker",
                "fr": "Machine à glaçons",
                "es": "Máquina de hielo",
                "it": "Macchina per il ghiaccio",
                "de": "Eismaschine",
                "pt-br": "Máquina de fazer gelo",
                "zh-tw": "製冰機"
            },
            effect: {
                en: "Once during your turn, you may take a Water Energy from your Energy Zone and attach it to the Water Pokémon in the Active Spot.",
                "fr": "Une fois pendant votre tour, vous pouvez prendre une Énergie Eau de votre Zone Énergie et l'attacher au Pokémon Eau dans le Point Actif.",
                "es": "Una vez durante tu turno, puedes tomar una Energía Agua de tu Zona de Energía y unirla al Pokémon Agua en el Punto Activo.",
                "it": "Una sola volta durante il tuo turno, puoi prendere un'Energia Water dalla tua Zona Energetica e assegnarla al Pokémon Water in posizione attiva.",
                "de": "Einmal während deines Zuges kannst du eine Wasser-Energie aus deiner Energiezone nehmen und sie an das Wasser-Pokémon an der aktiven Stelle anlegen.",
                "pt-br": "Uma vez durante o seu turno, você pode pegar uma Energia Água da sua Zona de Energia e anexá-la ao Pokémon Água no Ponto Ativo.",
                "zh-tw": "在你的回合中，你可以從你的能量區域取出一個水能量並將其附加到戰鬥場的水寶可夢上。"
            },
        },
    ],
    attacks: [
        {
            name: {
                en: "Buster Tail",
                fr: "Queue Destructrice",
                es: "Cola Destructora",
                it: "Coda Distruttrice",
                de: "Zertrümmernder Schweif",
                "pt-br": "Cauda Buster",
                "zh-tw": "巴斯特尾巴",
                pt: "Cauda Aniquiladora"
            },
            damage: "90",
            cost: ["Water", "Water", "Water"],
        },
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
