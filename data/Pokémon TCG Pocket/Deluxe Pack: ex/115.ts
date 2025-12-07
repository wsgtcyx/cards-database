import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Greninja",
        "fr": "Greninja",
        "es": "greninja",
        "it": "Greninja",
        "de": "Greninja",
        "pt-br": "Greninja",
        "zh-tw": "甲賀忍蛙",
    },
    illustrator: "5ban Graphics",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    evolveFrom: {
        en: "Frogadier",
        "fr": "Frogadier",
        "es": "ranadier",
        "it": "Frogadier",
        "de": "Frogadier",
        "pt-br": "Sapo",
        "zh-tw": "呱頭蛙",
    },
    description: {
        en: "It creates throwing stars out of compressed water.\nWhen it spins them and throws them at high speed,\nthese stars can split metal in two.",
        "fr": "Il crée des étoiles projetantes à partir d’eau comprimée.\nQuand il les fait tourner et les lance à grande vitesse,\nces étoiles peuvent diviser le métal en deux.",
        "es": "Crea estrellas arrojadizas a partir de agua comprimida.\nCuando los hace girar y los lanza a gran velocidad,\nEstas estrellas pueden dividir el metal en dos.",
        "it": "Crea stelle lancianti dall'acqua compressa.\nQuando li fa girare e li lancia ad alta velocità,\nqueste stelle possono dividere il metallo in due.",
        "de": "Es entstehen Wurfsterne aus komprimiertem Wasser.\nWenn es sie dreht und mit hoher Geschwindigkeit schleudert,\nDiese Sterne können Metall in zwei Teile spalten.",
        "pt-br": "Ele cria estrelas a partir de água comprimida.\nQuando ele os gira e os lança em alta velocidade,\nessas estrelas podem dividir o metal em dois.",
        "zh-tw": "它用壓縮水製造出飛濺的星星。\n當它高速旋轉並投擲它們時，\n這些星星可以將金屬分成兩半。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Water Shuriken",
                "fr": "Shuriken d'eau",
                "es": "shuriken de agua",
                "it": "Shuriken dell'acqua",
                "de": "Wasser-Shuriken",
                "pt-br": "Shuriken de água",
                "zh-tw": "水手裡劍"
            },
            effect: {
                en: "Once during your turn, you may do 20 damage to 1 of your opponent's Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez infliger 20 dégâts à 1 Pokémon de votre adversaire.",
                "es": "Una vez durante tu turno, puedes hacer 20 daños a 1 de los Pokémon de tu rival.",
                "it": "Una sola volta durante il tuo turno, puoi infliggere 20 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Einmal während deines Zuges kannst du einem Pokémon deines Gegners 20 Schadenspunkte zufügen.",
                "pt-br": "Uma vez durante o seu turno, você pode causar 20 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "在你的回合中，你可以對對手的 1 只神奇寶貝造成 20 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Mist Slash",
                "fr": "Tranche de brume",
                "es": "Corte de niebla",
                "it": "Taglio di nebbia",
                "de": "Nebelhieb",
                "pt-br": "Corte de névoa",
                "zh-tw": "霧斬"
            },
            damage: 60,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
