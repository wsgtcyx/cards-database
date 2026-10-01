import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/328",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/328",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/328",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/328",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/328",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/328",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/328"
    },
    name: {
        en: "Darkrai",
        fr: "Darkrai",
        es: "Darkrai",
        it: "Darkrai",
        de: "Darkrai",
        "pt-br": "Darkrai",
        "zh-tw": "達克萊伊",
        ja: "ダークライ",
        ko: "다크라이"
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Darkness"
    ],
    dexId: [
        491
    ],
    stage: "Basic",
    description: {
        en: "It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.",
        fr: "Il endort humains et Pokémon, et leur fait avoir des cauchemars pour les chasser de son territoire.",
        es: "Defiende su territorio de personas y Pokémon haciéndoles dormir y provocándoles pesadillas.",
        it: "Respinge umani e Pokémon dal suo territorio inducendoli a un sonno profondo e provocando incubi.",
        de: "Es vertreibt Eindringlinge aus seinem Revier, indem es sie in Schlaf versetzt und mit Alpträumen quält.",
        "pt-br": "Causa um sono profundo e cheio de pesadelos em pessoas e Pokémon para afugentá-los de seu território.",
        "zh-tw": "用引誘進入深層睡眠的力量，讓人或者寶可夢作惡夢，並將其逐出自己的領地。",
        ja: "It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.",
        ko: "It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Bad Dreams",
                fr: "Mauvais Rêve",
                es: "Mal Sueño",
                it: "Sogniamari",
                de: "Alptraum",
                "pt-br": "Sonhos Ruins",
                "zh-tw": "夢魘",
                ja: "Bad Dreams",
                ko: "Bad Dreams"
            },
            effect: {
                en: "At the end of each turn, if your opponent's Active Pokémon is Asleep, do 20 damage to that Pokémon.",
                fr: "À la fin de chaque tour, si le Pokémon Actif de votre adversaire est Endormi, infligez-lui 20 dégâts.",
                es: "Al final de cada turno, si el Pokémon Activo de tu rival está Dormido, haz 20 puntos de daño a ese Pokémon.",
                it: "Alla fine di ogni turno, se il Pokémon attivo dell'avversario è addormentato, infliggi 20 danni a quel Pokémon.",
                de: "Am Ende jedes Zuges, wenn das Aktive Pokémon deines Gegners schläft, füge jenem Pokémon 20 Schadenspunkte zu.",
                "pt-br": "No final de cada turno, se o Pokémon Ativo do seu oponente estiver Adormecido, cause 20 pontos de dano àquele Pokémon.",
                "zh-tw": "在雙方的回合結束時,若對手的戰鬥寶可夢睡眠,則那隻寶可夢受到20點傷害。",
                ja: "At the end of each turn, if your opponent's Active Pokémon is Asleep, do 20 damage to that Pokémon.",
                ko: "At the end of each turn, if your opponent's Active Pokémon is Asleep, do 20 damage to that Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Dark Slumber",
                fr: "Sommeil Obscur",
                es: "Letargo Oscuro",
                it: "Sonno Oscuro",
                de: "Dunkler Schlummer",
                "pt-br": "Sono Sombrio",
                "zh-tw": "黑色微寐",
                ja: "Dark Slumber",
                ko: "Dark Slumber"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
                es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
                it: "Il Pokémon attivo del tuo avversario viene addormentato.",
                de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "將對手的戰鬥寶可夢睡眠。",
                ja: "Your opponent's Active Pokémon is now Asleep.",
                ko: "Your opponent's Active Pokémon is now Asleep."
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
