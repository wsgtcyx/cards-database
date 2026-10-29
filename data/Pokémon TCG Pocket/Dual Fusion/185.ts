import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/185",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/185",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/185",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/185",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/185",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/185",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/185"
    },
    name: {
        en: "Mega Mewtwo X ex",
        fr: "Méga-Mewtwo X-ex",
        es: "Mega-Mewtwo X ex",
        "pt-br": "Mega Mewtwo X ex",
        "zh-tw": "超級超夢Xex",
        ja: "メガミュウツーXex",
        ko: "메가뮤츠X ex",
        it: "Mega-Mewtwo X-ex",
        de: "Mega-Mewtu X-ex"
    },
    illustrator: "KASSEN",
    rarity: "Three Star",
    category: "Pokemon",
    boosters: [],
    hp: 180,
    types: [
        "Psychic",
        "Fighting"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Dual Impact",
                fr: "Impact Double",
                es: "Impacto Dual",
                it: "Impatto Duale",
                de: "Doppelter Stoß",
                "pt-br": "Impacto Dobrado",
                "zh-tw": "雙元衝擊",
                ja: "Dual Impact",
                ko: "Dual Impact"
            },
            cost: [
                "Colorless",
                "Psychic",
                "Psychic"
            ],
            damage: "100+",
            effect: {
                en: "If a Stadium is in play, this attack does 40 more damage.",
                fr: "Si un Stade est en jeu, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si hay un Estadio en juego, este ataque hace 40 puntos de daño más.",
                it: "Se c'è in gioco una carta Stadio, questo attacco infligge 40 danni in più.",
                de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 40 Schadenspunkte mehr zu.",
                "pt-br": "Se um Estádio estiver em jogo, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "若場上有競技場卡,則增加40點傷害。",
                ja: "If a Stadium is in play, this attack does 40 more damage.",
                ko: "If a Stadium is in play, this attack does 40 more damage."
            }
        }
    ],
    abilities: []
};

export default card;
