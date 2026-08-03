import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/119",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/119",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/119",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/119",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/119",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/119",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/119"
    },
    name: {
        en: "Pawmi",
        fr: "Pohm",
        es: "Pawmi",
        it: "Pawmi",
        de: "Pamo",
        'pt-br': "Pawmi",
        "zh-tw": "布撥",
        ko: "빠모"
    },
    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [921],
    description: {
        en: "The pads of its paws are electricity-discharging organs. Pawmi fires electricity from its forepaws while standing unsteadily on its hind legs.",
        "fr": "Les coussinets de ses pattes sont des organes qui déchargent de l'électricité. Pohm tire de l'électricité depuis ses pattes antérieures tout en se tenant de manière instable sur ses pattes postérieures.",
        "es": "Las almohadillas de sus patas son órganos que descargan electricidad. Pawmi dispara electricidad desde sus patas delanteras mientras se mantiene inestable sobre sus patas traseras.",
        "it": "I cuscinetti delle zampe sono organi che scaricano elettricità. Pawmi spara elettricità dalle zampe anteriori mentre sta instabile sulle zampe posteriori.",
        "de": "Die Ballen seiner Pfoten sind elektrisch ableitende Organe. Pamo feuert Elektrizität aus seinen Vorderpfoten ab, während es unsicher auf seinen Hinterbeinen steht.",
        "pt-br": "As almofadas de suas patas são órgãos que descarregam eletricidade. Pawmi dispara eletricidade com suas patas dianteiras enquanto fica instável nas patas traseiras.",
        "zh-tw": "它的爪墊是放電器官。 布撥 用後腿搖搖晃晃地站立，並從前爪發射電流。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Random Spark",
                fr: "Étincelle Surprise",
                es: "Chispa al Azar",
                it: "Scintilla Casuale",
                de: "Zufälliger Funke",
                "pt-br": "Faísca Aleatória",
                "zh-tw": "隨機火花",
                pt: "Fagulha Aleatória"
            },
            cost: ["Lightning"],
            effect: {
                en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 10 danni a uno dei Pokémon\ndel tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
                'pt-br': "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只寶可夢造成 10 點傷害。",
                ko: "상대의 포켓몬 1마리에게 10데미지를 준다."
            }
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
