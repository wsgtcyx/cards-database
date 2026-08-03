import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/040",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/040",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/040",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/040",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/040",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/040",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/040"
    },
    name: {
        en: "Darkrai",
        fr: "Darkrai",
        es: "Darkrai",
        it: "Darkrai",
        de: "Darkrai",
        "pt-br": "Darkrai",
        "zh-tw": "達克萊伊",
        ko: "다크라이",
        ja: "ダークライ"
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    dexId: [491],
    stage: "Basic",
    description: {
        en: "It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.",
        fr: "Il endort humains et Pokémon, et leur fait avoir\ndes cauchemars pour les chasser de son territoire.",
        es: "Defiende su territorio de personas y Pokémon\nhaciéndoles dormir y provocándoles pesadillas.",
        it: "Respinge umani e Pokémon dal suo\nterritorio inducendoli a un sonno\nprofondo e provocando incubi.",
        de: "Es vertreibt Eindringlinge aus seinem Revier, indem\nes sie in Schlaf versetzt und mit Alpträumen quält.",
        "pt-br": "Causa um sono profundo e cheio de pesadelos\nem pessoas e Pokémon para afugentá-los\nde seu território.",
        "zh-tw": "它通過讓人類和寶可夢經歷噩夢般的深度睡眠來將他們驅逐出其領地。"
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
                "pt-br": "Sonhos ruins",
                "zh-tw": "夢魘"
            },
            effect: {
                en: "At the end of each turn, if your opponent's Active Pokémon is Asleep, do 20 damage to that Pokémon.",
                fr: "À la fin de chaque tour, si le Pokémon Actif de votre adversaire est Endormi, infligez 20 dégâts à ce Pokémon.",
                es: "Al final de cada turno, si el Pokémon Activo de tu rival está Dormido, hazle 20 puntos de daño.",
                it: "Alla fine di ogni turno, se il Pokémon attivo del tuo avversario è addormentato, infliggi 20 danni a quel Pokémon.",
                de: "Wenn das Aktive Pokémon deines Gegners am Ende jeder Runde schläft, füge diesem Pokémon 20 Schadenspunkte zu.",
                "pt-br": "No final de cada turno, se o Pokémon Ativo do seu oponente estiver Adormecido, cause 20 pontos de dano a esse Pokémon.",
                "zh-tw": "每回合結束時，如果對手的活躍寶可夢處於睡眠狀態，則對該寶可夢造成 20 點傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Dark Slumber",
                fr: "Sommeil Obscur",
                es: "Letargo Oscuro",
                it: "Sonno Oscuro",
                de: "Dunkler Schlummer",
                "pt-br": "Sono Sombrio",
                "zh-tw": "黑色微寐"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                es: "El Pokémon Activo de tu rival ahora está Dormido.",
                it: "Il Pokémon attivo del tuo avversario è addormentato.",
                de: "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍寶可夢現在處於睡眠狀態。"
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
