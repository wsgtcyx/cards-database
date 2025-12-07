import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Tyranitar",
        "fr": "Tyranitar",
        "es": "tiranitar",
        "it": "Tiranitar",
        "de": "Tyranitar",
        "pt-br": "Tiranitar",
        "zh-tw": "班吉拉",
    },
    illustrator: "Hasuno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Darkness"],
    evolveFrom: {
        en: "Pupitar",
        "fr": "Pupitre",
        "es": "pupitar",
        "it": "Pupitar",
        "de": "Pupitar",
        "pt-br": "Pupitar",
        "zh-tw": "蛹"
    },
    description: {
        en: "Extremely strong, it can change the landscape.\nIt is so insolent that it doesn't care about others.",
        "fr": "Extrêmement puissant, il peut changer le paysage.\nIl est tellement insolent qu'il ne se soucie pas des autres.",
        "es": "Extremadamente fuerte, puede cambiar el paisaje.\nEs tan insolente que no le importan los demás.",
        "it": "Estremamente forte, può cambiare il paesaggio.\nÈ così insolente che non si preoccupa degli altri.",
        "de": "Es ist extrem stark und kann die Landschaft verändern.\nEs ist so unverschämt, dass es sich nicht um andere kümmert.",
        "pt-br": "Extremamente forte, pode mudar a paisagem.\nÉ tão insolente que não se importa com os outros.",
        "zh-tw": "極其強大，可以改變地貌。\n它太囂張了，根本不關心別人。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Energy Plunder",
                "fr": "Pillage d'énergie",
                "es": "Saqueo de energía",
                "it": "Saccheggio energetico",
                "de": "Energieplünderung",
                "pt-br": "Pilhagem de energia",
                "zh-tw": "能源掠奪"
            },
            effect: {
                en: "Once during your turn, you may move all {D} Energy from each of your Pokémon to this Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez déplacer toutes les {D} Énergie de chacun de vos Pokémon vers ce Pokémon.",
                "es": "Una vez durante tu turno, puedes mover todas las {D} Energías de cada uno de tus Pokémon a este Pokémon.",
                "it": "Una sola volta durante il tuo turno, puoi spostare tutte le {D} Energie da ciascuno dei tuoi Pokémon a questo Pokémon.",
                "de": "Einmal während deines Zuges kannst du alle {D}-Energien von jedem deiner Pokémon auf dieses Pokémon übertragen.",
                "pt-br": "Uma vez durante o seu turno, você pode mover todas as energias {D} de cada um dos seus Pokémon para este Pokémon.",
                "zh-tw": "在你的回合中，你可以將每隻神奇寶貝的所有 {D} 能量移至該神奇寶貝。"
            }
        }],
    attacks: [{
            name: {
                en: "Buster Tail",
                "fr": "Queue de Buster",
                "es": "cola destructora",
                "it": "Buster Coda",
                "de": "Buster Tail",
                "pt-br": "Cauda Buster",
                "zh-tw": "巴斯特尾巴"
            },
            damage: 130,
            cost: ["Darkness", "Darkness", "Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4,
    boosters: ["ho-oh"]
};
export default card;
