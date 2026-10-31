import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/003",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/003",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/003",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/003",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/003",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/003"
    },
    name: {
        en: "Squirtle",
        fr: "Carapuce",
        es: "Squirtle",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜",
        ja: "ゼニガメ",
        ko: "꼬부기",
        it: "Squirtle",
        de: "Schiggy"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Bubble",
                fr: "Écume",
                es: "Burbuja",
                it: "Bolla",
                de: "Blubber",
                "pt-br": "Bolha",
                "zh-tw": "泡沫",
                ja: "Bubble",
                ko: "Bubble"
            },
            cost: [
                "Water"
            ],
            damage: 10,
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
                es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
                de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
                "pt-br": "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
                "zh-tw": "擲1次硬幣若為正面,則將對手的戰鬥寶可夢麻痺。",
                ja: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                ko: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
            }
        }
    ],
    abilities: [],
    description: {
        en: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        fr: "Quand il rentre son cou dans sa carapace, il peut projeter de l'eau à haute pression.",
        es: "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
        it: "Quando ritrae il lungo collo dentro la corazza, spara un vigoroso getto d'acqua.",
        de: "Zieht es seinen langen Hals in seinen Panzer zurück, verspritzt es Wasser mit unbändiger Kraft.",
        "pt-br": "Ao retrair o pescoço longo para dentro de seu casco, lança um jato de água muito poderoso.",
        "zh-tw": "當牠把長長的脖子縮回龜殼裡時，會順勢噴出力道強勁的水柱。",
        ja: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        ko: "When it retracts its long neck into its shell, it squirts out water with vigorous force."
    }
};

export default card;
