import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/033",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/033",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/033",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/033",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/033",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/033",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/033"
    },
    name: {
        en: "Oranguru",
        fr: "Gouroutan",
        es: "Oranguru",
        it: "Oranguru",
        de: "Kommandutan",
        "pt-br": "Oranguru",
        "zh-tw": "智揮猩",
        ko: "하랑우탄",
        ja: "ヤレユータン"
    },
    illustrator: "Sekio",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [765],
    stage: "Basic",
    description: {
        en: "This Pokémon lives quietly in the depths of the forest. The purple, cape-like fur gets longer and longer as Oranguru ages.",
        fr: "Il vit paisiblement au fin fond de la forêt. Sa fourrure violette, qui ressemble à une cape, s'allonge au fil des années.",
        es: "Vive tranquilamente en las profundidades del bosque. El pelo morado que le crece à modo de capa se va alargando con los años.",
        it: "Vive tranquillo nel profondo della foresta. I peli viola che lo ricoprono a mo' di mantello si allungano con il passare degli anni.",
        de: "Es lebt friedlich in den Tiefen des Waldes. Sein lilafarbenes, umhangähnliches Fell wird immer länger, je älter das Pokémon wird.",
        "pt-br": "Este Pokémon vive discretamente nas profundezas da floresta. Seu pelo roxo semelhante a uma capa fica cada vez mais longo conforme Oranguru envelhece.",
        "zh-tw": "在森林深處過著安靜的生活。如同斗蓬般的紫色體毛會隨著年齡而越變越長。"
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Punch and Draw",
                fr: "Poing et Pioche",
                es: "Puñetazo y Robo",
                it: "Pugnopesca",
                de: "Schlagen und ziehen",
                "pt-br": "Socar e Comprar",
                "zh-tw": "出拳&抽出"
            },
            effect: {
                en: "Draw a card.",
                fr: "Piochez une carte.",
                es: "Roba carta.",
                it: "Pesca una carta.",
                de: "Ziehe 1 Karte.",
                "pt-br": "Compre carta.",
                "zh-tw": "從自己的牌庫抽出張卡。"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
